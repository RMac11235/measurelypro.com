/* Browser-side spoken-measurement parser for the Measurely demo.
   No network.  Used by the live mic path and the scripted walk-through. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.MeasurelyParse = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  const ONES = {
    zero: 0, oh: 0, a: 1, an: 1, one: 1, two: 2, three: 3, four: 4, five: 5,
    six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12,
    thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17,
    eighteen: 18, nineteen: 19,
    cero: 0, un: 1, uno: 1, una: 1, dos: 2, tres: 3, cuatro: 4, cinco: 5,
    seis: 6, siete: 7, ocho: 8, nueve: 9, diez: 10, once: 11, doce: 12,
    trece: 13, catorce: 14, quince: 15, dieciseis: 16, dieciséis: 16,
    diecisiete: 17, dieciocho: 18, diecinueve: 19,
  };
  const TENS = {
    twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70,
    eighty: 80, ninety: 90,
    veinte: 20, treinta: 30, cuarenta: 40, cincuenta: 50, sesenta: 60,
    setenta: 70, ochenta: 80, noventa: 90,
  };
  const ROOM_NAMES = [
    ["master bedroom", "master bedroom"],
    ["living room", "living room"],
    ["family room", "family room"],
    ["dining room", "dining room"],
    ["great room", "great room"],
    ["front room", "front room"],
    ["laundry room", "laundry"],
    ["walk in closet", "closet"],
    ["walk-in closet", "closet"],
    ["guest room", "guest room"],
    ["recamara principal", "master bedroom"],
    ["recámara principal", "master bedroom"],
    ["cuarto de lavado", "laundry"],
    ["sala de estar", "living room"],
    ["baño", "bathroom"],
    ["bano", "bathroom"],
    ["cocina", "kitchen"],
    ["comedor", "dining room"],
    ["pasillo", "hallway"],
    ["recamara", "bedroom"],
    ["recámara", "bedroom"],
    ["habitacion", "bedroom"],
    ["habitación", "bedroom"],
    ["sala", "living room"],
    ["vestidor", "closet"],
    ["entrada", "entry"],
    ["closet", "closet"],
    ["kitchen", "kitchen"],
    ["bathroom", "bathroom"],
    ["bedroom", "bedroom"],
    ["hallway", "hallway"],
    ["hall way", "hallway"],
    ["hall", "hallway"],
    ["closet", "closet"],
    ["office", "office"],
    ["laundry", "laundry"],
    ["pantry", "pantry"],
    ["foyer", "foyer"],
    ["entry", "entry"],
    ["garage", "garage"],
    ["basement", "basement"],
    ["dining", "dining room"],
  ];
  const PRODUCTS = [
    { re: /luxury vinyl(?:\s+plank)?|\blvp\b|tablón de vinilo|tablon de vinilo|vinilo de lujo/, code: "LVP", trade: "flooring" },
    { re: /\blaminate\b|laminado/, code: "LAMINATE", trade: "flooring" },
    { re: /\bhardwood\b|madera/, code: "HARDWOOD", trade: "flooring" },
    { re: /\btile\b|loseta|azulejo/, code: "TILE", trade: "flooring" },
    { re: /\bcarpet\b|alfombra/, code: "CARPET", trade: "flooring" },
  ];

  function round4(n) {
    return Math.round(n * 10000) / 10000;
  }

  function tokens(text) {
    return String(text).toLowerCase()
      .replace(/[’']/g, "'")
      .replace(/(\d+)\s*'\s*(\d+(?:\.\d+)?)?\s*"?/g, "$1 feet $2 inches")
      .replace(/(\d+)\s*'/g, "$1 feet")
      .replace(/(\d+)\s*(?:inches|inch|in)\b/g, "$1 inches")
      .replace(/(\d+)\s*"/g, "$1 inches")
      .replace(/(\d)\.(\d)/g, "$1DECIMAL$2")
      .replace(/\./g, " ")
      .replace(/DECIMAL/g, ".")
      .replace(/-/g, " ")
      .replace(/[^a-z0-9áéíóúüñ.'\s]/gi, " ")
      .replace(/\s+/g, " ")
      .trim()
      .split(" ")
      .filter(Boolean);
  }

  function parseNumberPhrase(toks, i) {
    if (i >= toks.length) return null;
    const w = toks[i];
    if (/^\d+(?:\.\d+)?$/.test(w)) {
      let value = parseFloat(w);
      let next = i + 1;
      const frac = parseFraction(toks, next);
      if (frac && (toks[next] === "and" || toks[next] === "y")) {
        value += frac.value;
        next = frac.next;
      } else if (frac && !TENS[toks[next]] && !ONES[toks[next]] && !/^\d/.test(toks[next] || "")) {
        // "12 half" is uncommon; only take "and a half"
      }
      return { value: value, next: next };
    }
    if (TENS[w] != null) {
      let value = TENS[w];
      let next = i + 1;
      if (toks[next] && ONES[toks[next]] != null && ONES[toks[next]] < 10) {
        value += ONES[toks[next]];
        next += 1;
      }
      const frac = parseFraction(toks, next);
      if (frac && (toks[next] === "and" || toks[next] === "y")) {
        value += frac.value;
        next = frac.next;
      }
      return { value: value, next: next };
    }
    if (ONES[w] != null) {
      // Bare "a" / "an" / "un" is only a number when a fraction or unit follows.
      if ((w === "a" || w === "an" || w === "un" || w === "una") && !looksLikeNumberFollow(toks, i + 1)) {
        return null;
      }
      let value = ONES[w];
      let next = i + 1;
      const frac = parseFraction(toks, next);
      if (frac && (toks[next] === "and" || toks[next] === "y" || toks[next] === "and")) {
        value += frac.value;
        next = frac.next;
      }
      return { value: value, next: next };
    }
    const lone = parseFraction(toks, i);
    if (lone && (toks[i] === "half" || toks[i] === "quarter" || toks[i] === "medio" || toks[i] === "media")) {
      return lone;
    }
    return null;
  }

  function looksLikeNumberFollow(toks, i) {
    const w = toks[i];
    if (!w) return false;
    if (w === "half" || w === "quarter" || w === "and" || w === "y" || w === "medio" || w === "media") return true;
    if (/^(feet|foot|ft|inches|inch|in|pies|pie|pulgadas|pulgada)$/.test(w)) return true;
    if (/^(doors?|windows?|outlets?|receptacles?|fixtures?|cans?|switches?|dimmers?|puertas?|ventanas?|enchufes?|luminarias?|luces?|interruptores?|atenuadores?)$/.test(w)) return true;
    return false;
  }

  function parseFraction(toks, i) {
    if (toks[i] === "and" || toks[i] === "y") {
      return parseFraction(toks, i + 1);
    }
    if (toks[i] === "a" && (toks[i + 1] === "half" || toks[i + 1] === "quarter")) {
      return { value: toks[i + 1] === "half" ? 0.5 : 0.25, next: i + 2 };
    }
    if (toks[i] === "half" || toks[i] === "medio" || toks[i] === "media") {
      return { value: 0.5, next: i + 1 };
    }
    if (toks[i] === "quarter") {
      return { value: 0.25, next: i + 1 };
    }
    if (toks[i] === "three" && toks[i + 1] === "quarters") {
      return { value: 0.75, next: i + 2 };
    }
    return null;
  }

  function convertNumberWords(text) {
    const toks = tokens(text);
    const out = [];
    let i = 0;
    while (i < toks.length) {
      const num = parseNumberPhrase(toks, i);
      if (num) {
        out.push(String(num.value));
        i = num.next;
      } else {
        out.push(toks[i]);
        i += 1;
      }
    }
    return out.join(" ");
  }

  function readLength(str, from) {
    const slice = str.slice(from);
    const feetIn = slice.match(/^\s*(\d+(?:\.\d+)?)\s*(?:feet|foot|ft|pies|pie)\s*(?:(\d+(?:\.\d+)?)\s*(?:inches|inch|in|pulgadas|pulgada))?/);
    if (feetIn) {
      const feet = parseFloat(feetIn[1]);
      const inches = feetIn[2] ? parseFloat(feetIn[2]) : 0;
      return { value: round4(feet + inches / 12), next: from + feetIn[0].length, raw: feetIn[0] };
    }
    const inchesOnly = slice.match(/^\s*(\d+(?:\.\d+)?)\s*(?:inches|inch|in|pulgadas|pulgada)\b/);
    if (inchesOnly) {
      return { value: round4(parseFloat(inchesOnly[1]) / 12), next: from + inchesOnly[0].length, raw: inchesOnly[0] };
    }
    const bare = slice.match(/^\s*(\d+(?:\.\d+)?)/);
    if (bare) {
      return { value: parseFloat(bare[1]), next: from + bare[0].length, raw: bare[0] };
    }
    return null;
  }

  function findDimensions(norm) {
    const found = [];
    const by = /(?:\s|^)((?:\d+(?:\.\d+)?(?:\s*(?:feet|foot|ft|pies|pie))?(?:\s*\d+(?:\.\d+)?\s*(?:inches|inch|in|pulgadas|pulgada))?)|\d+(?:\.\d+)?)\s*(?:by|x|times|por)\s*((?:\d+(?:\.\d+)?(?:\s*(?:feet|foot|ft|pies|pie))?(?:\s*\d+(?:\.\d+)?\s*(?:inches|inch|in|pulgadas|pulgada))?)|\d+(?:\.\d+)?)(?:\s*(?:feet|foot|ft|pies|pie))?/g;
    let m;
    while ((m = by.exec(norm))) {
      const left = readLength(m[1], 0);
      const right = readLength(m[2], 0);
      if (!left || !right) continue;
      found.push({
        index: m.index,
        end: m.index + m[0].length,
        length: left.value,
        width: right.value,
        text: m[0].trim(),
        cutout: isCutoutContext(norm, m.index),
      });
    }
    return found;
  }

  function isCutoutContext(norm, index) {
    const before = norm.slice(Math.max(0, index - 40), index);
    return /(?:island\s+)?cutout(?:\s+(?:of|is|de))?\s*$/.test(before) || /recorte(?:\s+de\s+isla)?\s*$/.test(before) || /isla\s*$/.test(before);
  }

  function findRooms(norm) {
    const found = [];
    ROOM_NAMES.forEach(function (pair) {
      const name = pair[0];
      const canonical = pair[1];
      let start = 0;
      while (start < norm.length) {
        const idx = norm.indexOf(name, start);
        if (idx === -1) break;
        const before = idx === 0 ? " " : norm[idx - 1];
        const after = idx + name.length >= norm.length ? " " : norm[idx + name.length];
        if (/\w/.test(before) || /\w/.test(after)) {
          start = idx + 1;
          continue;
        }
        found.push({ index: idx, end: idx + name.length, name: canonical, text: name });
        start = idx + name.length;
      }
    });
    found.sort(function (a, b) { return a.index - b.index || (b.end - b.index) - (a.end - a.index); });
    const unique = [];
    found.forEach(function (room) {
      const overlap = unique.some(function (other) {
        return room.index < other.end && room.end > other.index;
      });
      if (!overlap) unique.push(room);
    });
    return unique.sort(function (a, b) { return a.index - b.index; });
  }

  function findCounts(norm) {
    const kinds = [
      { re: /(\d+(?:\.\d+)?)\s*(?:recessed\s+)?(?:cans|can lights|can light|fixtures?|luces empotradas|luminarias?)/g, key: "fixtures" },
      { re: /(?:fixture\s+swaps?|cambios? de luminaria)\s*(\d+(?:\.\d+)?)/g, key: "swaps", swap: true },
      { re: /(\d+(?:\.\d+)?)\s*(?:fixture\s+swaps?|cambios? de luminaria)/g, key: "swaps" },
      { re: /(\d+(?:\.\d+)?)\s*(?:outlets?|receptacles?|enchufes?)/g, key: "outlets" },
      { re: /(\d+(?:\.\d+)?)\s*(?:windows?|ventanas?)/g, key: "windows" },
      { re: /(\d+(?:\.\d+)?)\s*(?:doors?|puertas?)/g, key: "doors" },
      { re: /(\d+(?:\.\d+)?)\s*(?:switches?|interruptores?)/g, key: "switches" },
      { re: /(\d+(?:\.\d+)?)\s*(?:dimmers?|atenuadores?)/g, key: "dimmers" },
    ];
    const found = [];
    kinds.forEach(function (kind) {
      kind.re.lastIndex = 0;
      let m;
      const re = kind.re;
      while ((m = re.exec(norm))) {
        const n = parseFloat(m[1]);
        if (!n) continue;
        found.push({ index: m.index, end: m.index + m[0].length, key: kind.key, value: n, text: m[0] });
      }
    });
    return found;
  }

  function detectProduct(norm) {
    for (let i = 0; i < PRODUCTS.length; i++) {
      if (PRODUCTS[i].re.test(norm)) return PRODUCTS[i];
    }
    if (/\b(?:flooring|floors?|pisos?)\b/.test(norm)) return { code: "LVP", trade: "flooring" };
    if (/\b(?:lighting|lights?|iluminaci[oó]n|recessed|cans|fixture)\b/.test(norm)) {
      return { code: null, trade: "lighting" };
    }
    return { code: null, trade: null };
  }

  function nearestRoom(rooms, index) {
    // Speech is usually "room, then numbers." Use the last room named
    // before this spot.  Only look ahead when no room has been named yet
    // (for example "16 by 18 in the living room").
    let prev = null;
    rooms.forEach(function (room) {
      if (room.index <= index) prev = room;
    });
    if (prev) return prev;
    for (let i = 0; i < rooms.length; i++) {
      if (rooms[i].index > index) return rooms[i];
    }
    return null;
  }

  function emptyCounts() {
    return { fixtures: 0, swaps: 0, outlets: 0, windows: 0, doors: 0, switches: 0, dimmers: 0 };
  }

  function addCounts(target, counts) {
    Object.keys(counts).forEach(function (key) {
      target[key] = (target[key] || 0) + (counts[key] || 0);
    });
  }

  function parseMeasurements(text) {
    const original = String(text || "").trim();
    const norm = convertNumberWords(original);
    const roomsFound = findRooms(norm);
    const dims = findDimensions(norm);
    const countsFound = findCounts(norm);
    const product = detectProduct(norm);
    const rooms = [];
    const roomMap = new Map();

    function ensureRoom(name, index) {
      const key = name || "area";
      if (roomMap.has(key)) return roomMap.get(key);
      const room = {
        name: key,
        length: 0,
        width: 0,
        cutLength: 0,
        cutWidth: 0,
        gross: 0,
        cut: 0,
        net: 0,
        counts: emptyCounts(),
        notes: "",
      };
      roomMap.set(key, room);
      rooms.push(room);
      return room;
    }

    roomsFound.forEach(function (found) {
      ensureRoom(found.name, found.index);
    });

    dims.forEach(function (dim) {
      const host = nearestRoom(roomsFound, dim.index);
      const room = ensureRoom(host ? host.name : rooms.length ? rooms[rooms.length - 1].name : "area", dim.index);
      if (dim.cutout) {
        room.cutLength = dim.length;
        room.cutWidth = dim.width;
        room.cut = round4(dim.length * dim.width);
      } else {
        room.length = dim.length;
        room.width = dim.width;
        room.gross = round4(dim.length * dim.width);
      }
    });

    countsFound.forEach(function (count) {
      const host = nearestRoom(roomsFound, count.index);
      const room = host ? ensureRoom(host.name, count.index) : null;
      if (room) room.counts[count.key] = (room.counts[count.key] || 0) + count.value;
      else {
        if (!rooms.length) ensureRoom("area", count.index);
        const fallback = rooms[0];
        fallback.counts[count.key] = (fallback.counts[count.key] || 0) + count.value;
      }
    });

    rooms.forEach(function (room) {
      if (!room.gross && room.length && room.width) room.gross = round4(room.length * room.width);
      if (!room.cut && room.cutLength && room.cutWidth) room.cut = round4(room.cutLength * room.cutWidth);
      room.net = round4(Math.max(0, (room.gross || 0) - (room.cut || 0)));
    });

    let trade = product.trade;
    const totalCounts = emptyCounts();
    rooms.forEach(function (room) { addCounts(totalCounts, room.counts); });
    if (!trade) {
      if (totalCounts.fixtures || totalCounts.swaps || totalCounts.dimmers) trade = "lighting";
      else if (rooms.some(function (room) { return room.net > 0; })) trade = "flooring";
    }

    const totalNet = round4(rooms.reduce(function (sum, room) { return sum + (room.net || 0); }, 0));
    const totalGross = round4(rooms.reduce(function (sum, room) { return sum + (room.gross || 0); }, 0));
    const notes = original;

    return {
      text: original,
      normalized: norm,
      rooms: rooms,
      trade: trade || "flooring",
      product: product.code || (trade === "lighting" ? null : "LVP"),
      counts: totalCounts,
      totalGross: totalGross,
      totalNet: totalNet,
      notes: notes,
    };
  }

  function formatFeet(n) {
    if (n == null || n === "") return "";
    const value = Number(n);
    if (!isFinite(value)) return "";
    const feet = Math.floor(value + 1e-9);
    const inches = Math.round((value - feet) * 12);
    if (inches === 0) return String(round4(value));
    if (inches === 12) return String(feet + 1);
    return feet + " ft " + inches + " in";
  }

  return {
    convertNumberWords: convertNumberWords,
    parseMeasurements: parseMeasurements,
    formatFeet: formatFeet,
    round4: round4,
  };
});
