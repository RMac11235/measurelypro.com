(function () {
  const math = window.MeasurelyMath;
  const floorPrice = math.priceFloor();
  const lightPrice = math.priceLight();
  const checkError = (function () {
    if (floorPrice.total !== 980.12) return "Floor total drifted.";
    if (floorPrice.takeoff.net !== 144 || floorPrice.takeoff.boxes !== 8) return "Floor takeoff drifted.";
    if (lightPrice.total !== 1338.57) return "Light total drifted.";
    if (math.monthlyPlanUsd("measure", 3) !== 29.97) return "Measure price drifted.";
    if (math.monthlyPlanUsd("standard", 3) !== 109.97) return "Standard price drifted.";
    if (math.monthlyPlanUsd("custom", 3) !== 649.96) return "Custom price drifted.";
    return "";
  })();

  const copy = {
    en: {
      voice: "Voice estimating for flooring and lighting.",
      openNote: "Opens in this browser.  No server and no account.",
      phone: "Phone app",
      phoneBlurb: "Sign in, walk a room, and open the sheet, the estimate, the invoice, and the confirmation.",
      startHere: "Start here.  Tap the phone app.",
      portal: "Web portal",
      portalBlurb: "Team, price book, jobs, estimates, invoices, workflow charges, and usage.",
      email: "Email",
      password: "Password",
      signIn: "Sign in",
      sampleSeat: "Use the sample seat",
      badSign: "Use an email with @ and a password of at least 4 characters.  Nothing is sent.",
      localOnly: "This demo does not create an account and does not connect to a server.",
      jobs: "Jobs",
      record: "Record",
      speakLang: "Language you will speak",
      floorWhen: "18 Nov 2026",
      lightWhen: "19 Nov 2026",
      plans: "Plans",
      company: "Sample Floor and Light",
      floorTitle: "North kitchen",
      lightTitle: "Front room cans",
      floorTrade: "Flooring",
      lightTrade: "Lighting",
      customerA: "Sample Customer A",
      customerB: "Sample Customer B",
      addressA: "100 Sample Street",
      addressB: "200 Sample Street",
      approved: "Approved",
      draft: "Draft",
      open: "Open",
      logout: "Sign out",
      job: "Job",
      status: "Status",
      sheet: "Measurement sheet",
      estimate: "Estimate",
      invoice: "Invoice",
      approve: "Approve measurements",
      approvedDone: "Measurements approved.",
      blocked: "This plan makes the sheet.  Prices are on the Standard plan.",
      docLang: "Document language",
      net: "Net",
      waste: "with waste",
      boxes: "boxes",
      tax: "Tax",
      total: "Total",
      defaults: "Prices marked default are nominal starters, not a quote.",
      saveBoth: "Save estimate and invoice",
      saved: "Estimate and invoice saved in this demo.",
      tap: "Tap to record",
      which: "This walk-through is the front room lighting job.",
      listening: "Listening",
      review: "Review the sheet",
      uploading: "Uploading",
      reading: "Reading measurements",
      summarizing: "Summarizing",
      ready: "Ready",
      summary: "Summary",
      floorSummary: "Kitchen, 14 by 12, with a 4 by 6 island cutout.  Luxury vinyl plank.  A transition was spoken and is not a priced line.",
      lightSummary: "Front room.  12 recessed cans and 3 fixture swaps.",
      floorTalk: "Kitchen, 14 by 12, island cutout 4 by 6, luxury vinyl plank.",
      lightTalk: "Front room, 12 recessed cans, fixture swap 3.",
      source: "Numbers and the line they came from",
      nothing: "Nothing here reaches an estimate until you approve it.",
      confirmTitle: "Confirm",
      confirmLead: "DocuSign-style confirmation.  This step does not call DocuSign and does not send anything.",
      signHere: "Sign in the box",
      clear: "Clear",
      sampleName: "Sample name",
      agree: "I confirm this sample.  It is not sent and it is not DocuSign.",
      confirm: "Confirm sample",
      confirmed: "Sample confirmation stored on this page only.",
      needSign: "Sign, type a sample name, and check the box.",
      back: "Back",
      plansLead: "Tentative prices from the one config file.  The first month is free.  Preview a plan to see what the phone allows.",
      measureLine: "Measure.  9.99 USD a user each month.",
      standardLine: "Standard.  49.99 USD a month, including 1 user, then 29.99 USD for each added user.",
      customLine: "Custom.  499.99 USD a month plus 49.99 USD a user, plus workflow quotes.",
      seats3: "Three sample seats after the free month",
      voiceFree: "Voice notes are not billed.  Each seat stops at 60 house-call rows an hour.",
      session: "A live session is 500 USD an hour in 15 minute steps.",
      preview: "Preview",
      team: "Team and seats",
      book: "Price book",
      estimates: "Estimates",
      invoices: "Invoices",
      charges: "Workflow charges",
      usage: "Usage",
      billing: "Plan tiers",
      owner: "Owner",
      admin: "Admin",
      estimator: "Estimator",
      active: "Active",
      role: "Role",
      item: "Item",
      unit: "Unit",
      price: "Price",
      defaultMark: "default",
      amount: "Amount",
      quoted: "Quoted",
      quoteApproved: "Approved",
      billed: "Billed",
      quotedPrice: "Quoted price",
      applied: "Credit applied",
      due: "Amount due",
      creditLeft: "Workflow credit left",
      approveQuote: "Approve quote",
      billQuote: "Bill approved quote",
      estBlock: "An estimator can see the quote.  An owner or an admin approves and bills it.",
      workflowNote: "Sample quote for a new workflow.  The floor is 750 USD.  The sample company starts with 200 USD of credit.",
      captures: "Captures processed per month",
      unpaid: "Unpaid",
      awaiting: "Awaiting approval",
      needs: "Needs approval",
      sampleConfirmed: "Sample confirmed",
      export: "Download sample CSV",
      exported: "Sample file saved by the browser.  It has the two sample jobs only.",
      material: "Material",
      labor: "Labor",
      sell: "Sell",
      length: "Length",
      width: "Width",
      cutout: "Island cutout",
      counts: "Counts",
      sheetTitle: "Measurement sheet",
      invoiceNo: "Invoice",
      estimateNo: "Estimate",
      walkTitle: "Walk-in",
      walkCustomer: "This visit",
      tapMic: "Tap the mic and speak the measurements",
      stopMic: "Stop and summarize",
      watchWalk: "Watch a walk-through",
      skipWalk: "Skip to summary",
      captionIdle: "In the real app, you walk the job and speak the measurements out loud. The phone listens and writes them down as you go.",
      captionLive: "Listening now. Speak the rooms, sizes, and counts. Tap stop when you are done.",
      captionWalk: "This walk-through types a typical walk-in so you can see the flow when a microphone is not available.",
      captionSummarize: "When you stop, the app turns the spoken measurements into a room-by-room summary.",
      captionReady: "Check the numbers, edit them if you need to, and then open a priced estimate.",
      captionDenied: "This browser did not allow the microphone. Watch the walk-through to see the same summary flow.",
      captionUnsupported: "Live listening is not available in this browser. Watch the walk-through to see how a walk-in is summarized.",
      speechNote: "Spoken audio is processed by this browser's speech service, not by Measurely. In Chrome, that service is provided by Google. Nothing is sent to a Measurely server.",
      transcript: "Transcript",
      rooms: "Rooms",
      sqft: "Sq ft",
      sqftTotal: "Total sq ft",
      editHint: "Tap a number to edit it.",
      approveWalk: "Approve measurements",
      tradeLabel: "Trade",
      noRooms: "No rooms or counts were heard yet. Try the walk-through, or record again.",
      moreJobs: "Jobs and portal",
      homeLink: "Home",
      portalLink: "Web portal",
      walkScript: "Alright, I'm walking into the kitchen. This kitchen is 12 by 14. There's an island cutout, 4 by 6. Luxury vinyl plank in here. Two windows, one door. Now I'm in the living room. The living room is 16 by 18 feet. Same luxury vinyl. Three windows and two doors.",
    },
    es: {
      voice: "Estimados por voz para pisos e iluminación.",
      openNote: "Se abre en este navegador.  No hay servidor ni cuenta.",
      phone: "Aplicación del teléfono",
      phoneBlurb: "Entre, recorra un cuarto y abra la hoja, el estimado, la factura y la confirmación.",
      startHere: "Empiece aquí.  Toque la aplicación del teléfono.",
      portal: "Portal web",
      portalBlurb: "Equipo, lista de precios, trabajos, estimados, facturas, cargos de flujo y uso.",
      email: "Correo",
      password: "Contraseña",
      signIn: "Entrar",
      sampleSeat: "Usar el puesto de muestra",
      badSign: "Use un correo con @ y una contraseña de al menos 4 caracteres.  No se envía nada.",
      localOnly: "Esta demostración no crea una cuenta y no se conecta a un servidor.",
      jobs: "Trabajos",
      record: "Grabar",
      speakLang: "Idioma que va a hablar",
      floorWhen: "18 nov 2026",
      lightWhen: "19 nov 2026",
      plans: "Planes",
      company: "Pisos y luz de muestra",
      floorTitle: "Cocina norte",
      lightTitle: "Latas de la sala",
      floorTrade: "Pisos",
      lightTrade: "Iluminación",
      customerA: "Cliente de muestra A",
      customerB: "Cliente de muestra B",
      addressA: "Calle Muestra 100",
      addressB: "Calle Muestra 200",
      approved: "Aprobado",
      draft: "Borrador",
      open: "Abrir",
      logout: "Salir",
      job: "Trabajo",
      status: "Estado",
      sheet: "Hoja de medidas",
      estimate: "Estimado",
      invoice: "Factura",
      approve: "Aprobar medidas",
      approvedDone: "Medidas aprobadas.",
      blocked: "Este plan hace la hoja.  Los precios están en el plan Standard.",
      docLang: "Idioma del documento",
      net: "Neto",
      waste: "con desperdicio",
      boxes: "cajas",
      tax: "Impuesto",
      total: "Total",
      defaults: "Los precios marcados como predeterminados son nominales, no una cotización.",
      saveBoth: "Guardar estimado y factura",
      saved: "Estimado y factura guardados en esta demostración.",
      tap: "Toque para grabar",
      which: "Este recorrido es el trabajo de iluminación de la sala.",
      listening: "Escuchando",
      review: "Revisar la hoja",
      uploading: "Subiendo",
      reading: "Leyendo medidas",
      summarizing: "Resumiendo",
      ready: "Listo",
      summary: "Resumen",
      floorSummary: "Cocina, 14 por 12, con un recorte de isla de 4 por 6.  Tablón de vinilo.  Se habló de una transición y no es una línea con precio.",
      lightSummary: "Sala.  12 luces empotradas y 3 cambios de luminaria.",
      floorTalk: "Cocina, 14 por 12, recorte de isla 4 por 6, tablón de vinilo.",
      lightTalk: "Sala, 12 luces empotradas, cambio de luminaria 3.",
      source: "Números y la línea de origen",
      nothing: "Nada pasa al estimado hasta que lo apruebe.",
      confirmTitle: "Confirmar",
      confirmLead: "Confirmación al estilo de DocuSign.  Este paso no llama a DocuSign y no envía nada.",
      signHere: "Firme en el recuadro",
      clear: "Borrar",
      sampleName: "Nombre de muestra",
      agree: "Confirmo esta muestra.  No se envía y no es DocuSign.",
      confirm: "Confirmar muestra",
      confirmed: "Confirmación de muestra guardada solo en esta página.",
      needSign: "Firme, escriba un nombre de muestra y marque la casilla.",
      back: "Volver",
      plansLead: "Precios tentativos del único archivo de configuración.  El primer mes es gratis.  Previsualice un plan para ver qué permite el teléfono.",
      measureLine: "Measure.  9.99 USD por usuario al mes.",
      standardLine: "Standard.  49.99 USD al mes, con 1 usuario, y luego 29.99 USD por cada usuario añadido.",
      customLine: "Custom.  499.99 USD al mes más 49.99 USD por usuario, más cotizaciones de flujo.",
      seats3: "Tres puestos de muestra después del mes gratis",
      voiceFree: "Las notas de voz no se cobran.  Cada puesto se detiene en 60 filas de visita por hora.",
      session: "Una sesión en vivo es 500 USD por hora en pasos de 15 minutos.",
      preview: "Previsualizar",
      team: "Equipo y puestos",
      book: "Lista de precios",
      estimates: "Estimados",
      invoices: "Facturas",
      charges: "Cargos de flujo",
      usage: "Uso",
      billing: "Niveles del plan",
      owner: "Dueño",
      admin: "Admin",
      estimator: "Estimador",
      active: "Activo",
      role: "Rol",
      item: "Partida",
      unit: "Unidad",
      price: "Precio",
      defaultMark: "predeterminado",
      amount: "Importe",
      quoted: "Cotizado",
      quoteApproved: "Aprobado",
      billed: "Facturado",
      quotedPrice: "Precio cotizado",
      applied: "Crédito aplicado",
      due: "Importe a pagar",
      creditLeft: "Crédito de flujo restante",
      approveQuote: "Aprobar cotización",
      billQuote: "Facturar la cotización aprobada",
      estBlock: "Un estimador puede ver la cotización.  Un dueño o un admin la aprueba y la factura.",
      workflowNote: "Cotización de muestra para un flujo nuevo.  El mínimo es 750 USD.  La empresa de muestra empieza con 200 USD de crédito.",
      captures: "Capturas procesadas por mes",
      unpaid: "Sin pagar",
      awaiting: "Espera aprobación",
      needs: "Necesita aprobación",
      sampleConfirmed: "Muestra confirmada",
      export: "Descargar CSV de muestra",
      exported: "El navegador guardó un archivo de muestra.  Tiene solo los dos trabajos de muestra.",
      material: "Material",
      labor: "Mano de obra",
      sell: "Venta",
      length: "Largo",
      width: "Ancho",
      cutout: "Recorte de isla",
      counts: "Cantidades",
      sheetTitle: "Hoja de medidas",
      invoiceNo: "Factura",
      estimateNo: "Estimado",
      walkTitle: "Visita",
      walkCustomer: "Esta visita",
      tapMic: "Toque el micrófono y diga las medidas",
      stopMic: "Detener y resumir",
      watchWalk: "Ver un recorrido",
      skipWalk: "Saltar al resumen",
      captionIdle: "En la aplicación real, usted recorre el trabajo y dice las medidas en voz alta. El teléfono escucha y las anota mientras habla.",
      captionLive: "Escuchando ahora. Diga los cuartos, las medidas y las cantidades. Toque detener cuando termine.",
      captionWalk: "Este recorrido escribe una visita típica para que vea el flujo cuando no hay micrófono.",
      captionSummarize: "Cuando usted se detiene, la aplicación convierte las medidas habladas en un resumen cuarto por cuarto.",
      captionReady: "Revise los números, edítelos si hace falta y luego abra un estimado con precios.",
      captionDenied: "Este navegador no permitió el micrófono. Vea el recorrido para el mismo flujo de resumen.",
      captionUnsupported: "La escucha en vivo no está disponible en este navegador. Vea el recorrido para ver cómo se resume una visita.",
      speechNote: "El audio hablado lo procesa el servicio de voz de este navegador, no Measurely. En Chrome, ese servicio lo proporciona Google. No se envía nada a un servidor de Measurely.",
      transcript: "Transcripción",
      rooms: "Cuartos",
      sqft: "Pies²",
      sqftTotal: "Total pies²",
      editHint: "Toque un número para editarlo.",
      approveWalk: "Aprobar medidas",
      tradeLabel: "Oficio",
      noRooms: "Aún no se oyeron cuartos ni cantidades. Pruebe el recorrido, o grabe de nuevo.",
      moreJobs: "Trabajos y portal",
      homeLink: "Inicio",
      portalLink: "Portal web",
      walkScript: "Bueno, entro en la cocina. Esta cocina es de 12 por 14. Hay un recorte de isla, 4 por 6. Tablón de vinilo aquí. Dos ventanas, una puerta. Ahora estoy en la sala. La sala es de 16 por 18 pies. El mismo vinilo de lujo. Tres ventanas y dos puertas.",
    },
  };

  const parseApi = window.MeasurelyParse;
  let recognition = null;
  let walkTimer = null;
  let clockTimer = null;

  const state = {
    lang: "en",
    signedIn: true,
    error: "",
    plan: "standard",
    docLang: "",
    role: "owner",
    approved: { floor: true, light: false, walk: false },
    invoiced: { floor: true, light: false, walk: false },
    confirmed: { floor: false, light: false, walk: false },
    stage: "",
    elapsed: 0,
    heard: "",
    heardInterim: "",
    listening: false,
    walkthrough: false,
    micDenied: false,
    captionKey: "captionIdle",
    summary: null,
    charge: "quoted",
    credit: math.WORKFLOW_CREDIT_USD,
    applied: 0,
    due: math.WORKFLOW_NEW_USD,
    exportNote: "",
    signNotice: "",
    strokes: [],
    signName: "",
    agreed: false,
    savedNote: "",
  };

  let timer = null;
  let drawing = null;

  function t(key) {
    return copy[state.lang][key];
  }

  function tx(key) {
    return copy[state.docLang || state.lang][key];
  }

  function esc(value) {
    return String(value).replace(/[&<>"]/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[ch];
    });
  }

  function usd(n) {
    return Number(n).toFixed(2) + " USD";
  }

  function hash() {
    return location.hash || "#/phone/record";
  }

  function jobName(id) {
    if (id === "walk") return t("walkTitle");
    return id === "floor" ? t("floorTitle") : t("lightTitle");
  }

  function pricedFor(id) {
    if (id === "walk") return state.summary ? math.priceSummary(state.summary) : { lines: [], subtotal: 0, tax: 0, total: 0, takeoff: null };
    return id === "floor" ? floorPrice : lightPrice;
  }

  function speechCtor() {
    return window.SpeechRecognition || window.webkitSpeechRecognition || null;
  }

  function isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  }

  function isFirefox() {
    return /Firefox\//.test(navigator.userAgent);
  }

  function isSafari() {
    return /Safari\//.test(navigator.userAgent) && !/Chrome|Chromium|Edg|Android/.test(navigator.userAgent);
  }

  function liveMicAvailable() {
    return !!(speechCtor() && !isIOS() && !isFirefox() && !isSafari());
  }

  function langSwitch() {
    return '<div class="lang"><button type="button" data-act="lang" data-arg="en" aria-pressed="' + (state.lang === "en") + '">EN</button><button type="button" data-act="lang" data-arg="es" aria-pressed="' + (state.lang === "es") + '">ES</button></div>';
  }

  function banner() {
    return '<p class="banner">Demo, sample data</p>';
  }

  function stageValue() {
    if (state.stage === "listening") return 0.33;
    if (state.stage === "summarizing") return 0.66;
    if (state.stage === "ready") return 1;
    return 0;
  }

  function stageLabel() {
    if (!state.stage) return "";
    return t(state.stage);
  }

  function clock() {
    const minutes = Math.floor(state.elapsed / 60);
    const rest = state.elapsed % 60;
    return minutes + ":" + String(rest).padStart(2, "0");
  }

  function ringSvg(value, cls) {
    const length = 2 * Math.PI * 46;
    const offset = length * (1 - value);
    return '<svg class="' + cls + '" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="46" fill="none" stroke="#e6dfd4" stroke-width="8"></circle><circle cx="60" cy="60" r="46" fill="none" stroke="#0f6e56" stroke-width="8" stroke-linecap="round" stroke-dasharray="' + length.toFixed(2) + '" stroke-dashoffset="' + offset.toFixed(2) + '" transform="rotate(-90 60 60)"></circle></svg>';
  }

  function strip() {
    if (!state.stage) return "";
    const reviewHref = state.summary ? "#/phone/summary" : "#/phone/sheet/light";
    const review = state.stage === "ready" ? '<a href="' + reviewHref + '">' + esc(t("review")) + "</a>" : "";
    return '<div class="strip">' + ringSvg(stageValue(), "mini") + "<div><strong>" + esc(stageLabel()) + "</strong> " + clock() + "<div>" + review + "</div></div></div>";
  }

  function tabs(active) {
    function tab(id, href, label) {
      return '<a class="' + (active === id ? "on" : "") + '" href="' + href + '">' + esc(label) + "</a>";
    }
    return '<nav class="tabs">' + tab("jobs", "#/phone/jobs", t("jobs")) + tab("record", "#/phone/record", t("record")) + tab("plans", "#/phone/plans", t("plans")) + "</nav>";
  }

  function phone(title, body, active, back) {
    const backLink = back ? '<a href="' + back + '">' + esc(t("back")) + "</a>" : "<span></span>";
    return '<div class="stage"><div class="phone">' + banner() + strip() + '<header class="bar">' + backLink + "<h1>" + esc(title) + "</h1>" + langSwitch() + '</header><div class="screen">' + body + "</div>" + tabs(active) + "</div></div>";
  }

  function linesTable(priced) {
    return "<table><tr><th>" + esc(tx("item")) + "</th><th>" + esc(tx("amount")) + "</th></tr>" + priced.lines.map(function (line) {
      return "<tr><td>" + esc(line.item) + "<div class='meta'>" + line.qty + " " + esc(line.unit) + " × " + line.rate.toFixed(2) + " (" + esc(tx("defaultMark")) + ")</div></td><td>" + usd(line.amount) + "</td></tr>";
    }).join("") + "</table><p>" + esc(tx("tax")) + " " + usd(priced.tax) + "</p><p class='total'>" + esc(tx("total")) + " " + usd(priced.total) + "</p>";
  }

  function sheetBody(id) {
    if (id === "walk") return walkSheet();
    if (id === "floor") {
      const takeoff = floorPrice.takeoff;
      return "<article class='card'><div class='sheet-head'><div><strong>" + esc(t("sheetTitle")) + "</strong><div>" + esc(jobName("floor")) + "</div><div class='meta'>" + esc(t("customerA")) + " · " + esc(t("addressA")) + "</div></div></div><p>" + esc(t("summary")) + ": " + esc(t("floorSummary")) + "</p><table><tr><th>" + esc(t("length")) + "</th><td>14 ft</td></tr><tr><th>" + esc(t("width")) + "</th><td>12 ft</td></tr><tr><th>" + esc(t("cutout")) + "</th><td>4 × 6 ft</td></tr><tr><th>" + esc(t("net")) + "</th><td>" + takeoff.net + " sq ft</td></tr><tr><th>" + esc(t("waste")) + "</th><td>" + takeoff.withWaste + " sq ft</td></tr><tr><th>" + esc(t("boxes")) + "</th><td>" + takeoff.boxes + "</td></tr></table><p class='meta'>" + esc(t("source")) + "</p><p>" + esc(t("floorTalk")) + "</p><p>14, 12, 4, 6</p></article>";
    }
    return "<article class='card'><strong>" + esc(t("sheetTitle")) + "</strong><div>" + esc(jobName("light")) + "</div><div class='meta'>" + esc(t("customerB")) + " · " + esc(t("addressB")) + "</div><p>" + esc(t("summary")) + ": " + esc(t("lightSummary")) + "</p><table><tr><th>" + esc(t("counts")) + "</th><td>12 recessed cans</td></tr><tr><th>" + esc(t("counts")) + "</th><td>3 fixture swaps</td></tr></table><p class='meta'>" + esc(t("source")) + "</p><p>" + esc(t("lightTalk")) + "</p><p>12, 3</p></article>";
  }

  function guardPhone(route) {
    if (state.signedIn) return "";
    if (route.indexOf("#/phone/") === 0 && route !== "#/phone/signin") return "#/phone/signin";
    return "";
  }

  function screen() {
    const route = hash();
    const bounce = guardPhone(route);
    if (bounce) return phoneSign();
    if (route === "#/home" || route === "#/" || route === "") return home();
    if (route === "#/phone/signin") return phoneSign();
    if (route === "#/phone/jobs") return phoneJobs();
    if (route === "#/phone/record") return phoneRecord();
    if (route === "#/phone/summary") return phoneSummary();
    if (route === "#/phone/plans") return phonePlans();
    if (route.indexOf("#/phone/job/") === 0) return phoneJob(route.split("/")[3]);
    if (route.indexOf("#/phone/sheet/") === 0) return phoneSheet(route.split("/")[3]);
    if (route.indexOf("#/phone/estimate/") === 0) return phoneEstimate(route.split("/")[3]);
    if (route.indexOf("#/phone/invoice/") === 0) return phoneInvoice(route.split("/")[3]);
    if (route.indexOf("#/phone/confirm/") === 0) return phoneConfirm(route.split("/")[3]);
    if (route.indexOf("#/portal") === 0) return portal(route.split("/")[2] || "team");
    return home();
  }

  function home() {
    return '<div class="home">' + banner() + "<main><h1>Measurely</h1><p class='lede'>" + esc(t("voice")) + "</p><p class='quiet'>" + esc(t("openNote")) + "</p><p class='start'>" + esc(t("startHere")) + "</p>" + langSwitch() + (checkError ? "<p class='err'>" + esc(checkError) + "</p>" : "") + '<div class="choices"><a class="choice" href="#/phone/record"><img src="phone-card.svg" alt=""><strong>' + esc(t("phone")) + "</strong>" + esc(t("phoneBlurb")) + '</a><a class="choice" href="#/portal/team"><img src="portal-card.svg" alt=""><strong>' + esc(t("portal")) + "</strong>" + esc(t("portalBlurb")) + "</a></div></main></div>";
  }

  function phoneSign() {
    const err = state.error ? "<p class='err'>" + esc(t("badSign")) + "</p>" : "";
    const body = '<img class="mark" src="mark.svg" alt=""><p>' + esc(t("voice")) + "</p><p>" + esc(t("localOnly")) + '</p><label>' + esc(t("email")) + '<input id="email" type="email" autocomplete="off"></label><label>' + esc(t("password")) + '<input id="password" type="password" autocomplete="off"></label><button class="primary" type="button" data-act="signin">' + esc(t("signIn")) + '</button><button class="ghost" type="button" data-act="sample">' + esc(t("sampleSeat")) + "</button>" + err;
    return phone("Measurely", body, "", "");
  }

  function phoneJobs() {
    function row(id, trade, status, total, when) {
      return '<a class="job" href="#/phone/job/' + id + '"><strong>' + esc(jobName(id)) + "</strong><div class='meta'>" + esc(trade) + " · " + esc(status) + "</div><div class='meta'>" + usd(total) + " · " + esc(when) + "</div></a>";
    }
    const lightStatus = state.approved.light ? t("approved") : t("draft");
    const walkRow = state.summary
      ? row("walk", state.summary.trade === "lighting" ? t("lightTrade") : t("floorTrade"), state.approved.walk ? t("approved") : t("draft"), pricedFor("walk").total, t("walkTitle"))
      : "";
    const body = "<p>" + esc(t("company")) + "</p>" + walkRow + row("floor", t("floorTrade"), t("approved"), floorPrice.total, t("floorWhen")) + row("light", t("lightTrade"), lightStatus, lightPrice.total, t("lightWhen")) + '<a class="ghost" style="display:block;text-align:center;text-decoration:none" href="#/phone/record">' + esc(t("record")) + "</a>" + '<a class="ghost" style="display:block;text-align:center;text-decoration:none" href="#/portal/team">' + esc(t("portalLink")) + "</a>" + '<button class="ghost" type="button" data-act="signout">' + esc(t("logout")) + "</button>";
    return phone(t("jobs"), body, "jobs", "#/home");
  }

  function phoneJob(id) {
    if (id !== "floor" && id !== "light" && id !== "walk") return home();
    const priced = pricedFor(id);
    const talk = id === "walk" ? (state.summary ? state.summary.text : "") : (id === "floor" ? t("floorTalk") : t("lightTalk"));
    const who = id === "walk" ? t("walkCustomer") : (id === "floor" ? t("customerA") : t("customerB"));
    const where = id === "walk" ? t("walkTitle") : (id === "floor" ? t("addressA") : t("addressB"));
    const approved = state.approved[id];
    let estimateLink = '<a class="primary" style="display:block;text-align:center;text-decoration:none" href="#/phone/estimate/' + id + '">' + esc(t("estimate")) + "</a>";
    if (!approved) estimateLink = "<p class='meta'>" + esc(t("nothing")) + "</p>";
    if (state.plan === "measure") estimateLink = "<p>" + esc(t("blocked")) + "</p>";
    const invoiceLink = state.invoiced[id] ? '<a class="ghost" style="display:block;text-align:center;text-decoration:none" href="#/phone/invoice/' + id + '">' + esc(t("invoice")) + " " + usd(priced.total) + "</a>" : "";
    const body = "<p>" + esc(who) + "</p><p class='meta'>" + esc(where) + "</p><p>" + esc(talk) + "</p><p>" + esc(t("status")) + ": " + esc(approved ? t("approved") : t("draft")) + '</p><a class="primary" style="display:block;text-align:center;text-decoration:none" href="#/phone/sheet/' + id + '">' + esc(t("sheet")) + "</a>" + estimateLink + invoiceLink;
    return phone(t("job"), body, "jobs", "#/phone/jobs");
  }

  function phoneSheet(id) {
    if (id !== "floor" && id !== "light" && id !== "walk") return home();
    const approved = state.approved[id];
    const button = approved
      ? "<p>" + esc(t("approvedDone")) + "</p>"
      : '<button class="primary" type="button" data-act="approve" data-arg="' + id + '">' + esc(t("approve")) + "</button><p>" + esc(t("nothing")) + "</p>";
    const next = approved && state.plan !== "measure"
      ? '<a class="primary" style="display:block;text-align:center;text-decoration:none" href="#/phone/estimate/' + id + '">' + esc(t("estimate")) + "</a>"
      : "";
    return phone(t("sheet"), sheetBody(id) + button + next, "jobs", "#/phone/job/" + id);
  }

  function phoneEstimate(id) {
    if (id !== "floor" && id !== "light" && id !== "walk") return home();
    if (!state.approved[id]) return phone(t("estimate"), "<p>" + esc(t("nothing")) + "</p>", "jobs", "#/phone/job/" + id);
    if (state.plan === "measure") return phone(t("estimate"), "<p>" + esc(t("blocked")) + "</p>", "jobs", "#/phone/job/" + id);
    const priced = pricedFor(id);
    const doc = state.docLang || state.lang;
    const takeoff = id === "floor" ? "<p>" + esc(tx("net")) + " " + priced.takeoff.net + "  " + esc(tx("waste")) + " " + priced.takeoff.withWaste + "  " + esc(tx("boxes")) + " " + priced.takeoff.boxes + "</p>" : "<p>" + esc(tx("lightSummary")) + "</p>";
    const saved = state.savedNote ? "<p>" + esc(t("saved")) + "</p>" : "";
    const body = "<p>" + esc(t("docLang")) + '</p><div class="seg"><button type="button" data-act="doc" data-arg="en" aria-pressed="' + (doc === "en") + '">English</button> <button type="button" data-act="doc" data-arg="es" aria-pressed="' + (doc === "es") + '">Español</button></div><p class="meta">' + esc(tx("defaults")) + "</p>" + takeoff + linesTable(priced) + '<button class="primary" type="button" data-act="save" data-arg="' + id + '">' + esc(t("saveBoth")) + "</button>" + saved;
    return phone(t("estimate"), body, "jobs", "#/phone/job/" + id);
  }

  function phoneInvoice(id) {
    if (id !== "floor" && id !== "light" && id !== "walk") return home();
    if (!state.invoiced[id]) return phone(t("invoice"), "<p>" + esc(t("nothing")) + "</p>", "jobs", "#/phone/job/" + id);
    const priced = pricedFor(id);
    const who = id === "walk" ? t("walkCustomer") : (id === "floor" ? t("customerA") : t("customerB"));
    const status = state.confirmed[id] ? t("sampleConfirmed") : t("unpaid");
    const body = "<article class='card'><p>" + esc(t("invoiceNo")) + " " + (id === "floor" ? "S-100" : "S-101") + "</p><p>" + esc(who) + "</p><p>" + esc(jobName(id)) + "</p>" + linesTable(priced) + "<p><span class='chip wait'>" + esc(status) + "</span></p></article>" + '<a class="primary" style="display:block;text-align:center;text-decoration:none" href="#/phone/confirm/' + id + '">' + esc(t("confirmTitle")) + "</a>";
    return phone(t("invoice"), body, "jobs", "#/phone/job/" + id);
  }

  function phoneConfirm(id) {
    if (id !== "floor" && id !== "light" && id !== "walk") return home();
    if (state.confirmed[id]) {
      return phone(t("confirmTitle"), "<p>" + esc(t("confirmed")) + "</p><p>" + esc(jobName(id)) + "</p>", "jobs", "#/phone/invoice/" + id);
    }
    const notice = state.signNotice ? "<p class='err'>" + esc(t("needSign")) + "</p>" : "";
    const body = "<p>" + esc(t("confirmLead")) + "</p><p>" + esc(jobName(id)) + "</p><p>" + esc(t("signHere")) + '</p><canvas id="pad" class="signpad" width="640" height="200"></canvas><button class="ghost" type="button" data-act="clear-sign">' + esc(t("clear")) + "</button><label>" + esc(t("sampleName")) + '<input id="sign-name" type="text" autocomplete="off" value="' + esc(state.signName) + '"></label><label class="check"><input id="sign-agree" type="checkbox"' + (state.agreed ? " checked" : "") + "><span>" + esc(t("agree")) + '</span></label><button class="primary" type="button" data-act="confirm" data-arg="' + id + '">' + esc(t("confirm")) + "</button>" + notice;
    return phone(t("confirmTitle"), body, "jobs", "#/phone/invoice/" + id);
  }

  function countLine(counts) {
    const bits = [];
    if (counts.windows) bits.push(counts.windows + " " + (state.lang === "es" ? "ventanas" : "windows"));
    if (counts.doors) bits.push(counts.doors + " " + (state.lang === "es" ? "puertas" : "doors"));
    if (counts.outlets) bits.push(counts.outlets + " " + (state.lang === "es" ? "enchufes" : "outlets"));
    if (counts.fixtures) bits.push(counts.fixtures + " " + (state.lang === "es" ? "luminarias" : "fixtures"));
    if (counts.swaps) bits.push(counts.swaps + " " + (state.lang === "es" ? "cambios" : "swaps"));
    if (counts.switches) bits.push(counts.switches + " " + (state.lang === "es" ? "interruptores" : "switches"));
    if (counts.dimmers) bits.push(counts.dimmers + " " + (state.lang === "es" ? "atenuadores" : "dimmers"));
    return bits.join(" · ");
  }

  function walkSheet() {
    if (!state.summary) return "<p>" + esc(t("noRooms")) + "</p>";
    const s = state.summary;
    const takeoff = pricedFor("walk").takeoff;
    const rows = s.rooms.map(function (room) {
      const cut = room.cut ? parseApi.formatFeet(room.cutLength) + " × " + parseApi.formatFeet(room.cutWidth) : "—";
      return "<tr><td>" + esc(room.name) + "</td><td>" + esc(parseApi.formatFeet(room.length)) + " × " + esc(parseApi.formatFeet(room.width)) + "</td><td>" + esc(cut) + "</td><td>" + room.net + "</td></tr>";
    }).join("");
    const counts = countLine(s.counts);
    return "<article class='card'><div class='sheet-head'><div><strong>" + esc(t("sheetTitle")) + "</strong><div>" + esc(t("walkTitle")) + "</div><div class='meta'>" + esc(t("walkCustomer")) + "</div></div></div><p>" + esc(t("tradeLabel")) + ": " + esc(s.trade === "lighting" ? t("lightTrade") : t("floorTrade")) + (s.product ? " · " + esc(s.product) : "") + "</p><table><tr><th>" + esc(t("rooms")) + "</th><th></th><th>" + esc(t("cutout")) + "</th><th>" + esc(t("sqft")) + "</th></tr>" + rows + "</table><p><strong>" + esc(t("sqftTotal")) + ": " + s.totalNet + "</strong></p>" + (takeoff ? "<p class='meta'>" + esc(t("waste")) + " " + takeoff.withWaste + " · " + takeoff.boxes + " " + esc(t("boxes")) + "</p>" : "") + (counts ? "<p class='counts-line'>" + esc(counts) + "</p>" : "") + "<p class='meta'>" + esc(t("source")) + "</p><p>" + esc(s.text) + "</p></article>";
  }

  function phoneRecord() {
    const canLive = liveMicAvailable() && !state.micDenied;
    let captionKey = state.captionKey || "captionIdle";
    if (!canLive && !state.listening && !state.walkthrough && state.stage !== "ready" && state.stage !== "summarizing") {
      if (state.micDenied) captionKey = "captionDenied";
      else if (!liveMicAvailable()) captionKey = "captionUnsupported";
    }
    const stageClass = "ring-wrap" + (state.stage ? " " + state.stage : "");
    let hero = '<div class="' + stageClass + '">' + ringSvg(state.stage ? stageValue() : 0, "ring") + '<div class="ring-label"><span>' + esc(state.stage ? stageLabel() : t("tapMic")) + "</span>" + (state.stage ? "<span>" + clock() + "</span>" : "") + "</div></div>";
    if (canLive && !state.walkthrough) {
      const micLabel = state.listening ? t("stopMic") : t("tapMic");
      hero += '<div class="mic-wrap"><button class="mic' + (state.listening ? " live" : "") + '" type="button" data-act="' + (state.listening ? "stop-live" : "start-live") + '">' + esc(micLabel) + "</button></div>";
    }
    hero += '<button class="ghost" type="button" data-act="walkthrough">' + esc(t("watchWalk")) + "</button>";
    if (state.walkthrough) {
      hero += '<button class="ghost" type="button" data-act="skip-walk">' + esc(t("skipWalk")) + "</button>";
    }
    if (state.stage === "ready" && state.summary) {
      hero += '<a class="primary" style="display:block;text-align:center;text-decoration:none" href="#/phone/summary">' + esc(t("summary")) + "</a>";
    }
    const spoken = esc(state.heard || "") + (state.heardInterim ? ' <span class="interim">' + esc(state.heardInterim) + "</span>" : "");
    const transcript = '<div class="transcript" id="transcript"><strong>' + esc(t("transcript")) + "</strong><div>" + (spoken || "&nbsp;") + "</div></div>";
    const body = "<p class='caption'>" + esc(t(captionKey)) + "</p>" + hero + transcript
      + '<div class="lang"><span>' + esc(t("speakLang")) + "</span>" + langSwitch() + "</div>"
      + "<p class='speech-note'>" + esc(t("speechNote")) + "</p>"
      + '<div class="side-links"><a href="#/phone/jobs">' + esc(t("moreJobs")) + '</a><a href="#/home">' + esc(t("homeLink")) + '</a><a href="#/portal/team">' + esc(t("portalLink")) + "</a></div>";
    return phone(t("record"), body, "record", "");
  }

  function phoneSummary() {
    if (!state.summary) {
      return phone(t("summary"), "<p>" + esc(t("noRooms")) + '</p><a class="primary" style="display:block;text-align:center;text-decoration:none" href="#/phone/record">' + esc(t("record")) + "</a>", "record", "#/phone/record");
    }
    const s = state.summary;
    const rows = s.rooms.map(function (room, index) {
      return "<tr>"
        + "<td><input data-field='name' data-room='" + index + "' value='" + esc(room.name) + "'></td>"
        + "<td><input data-field='length' data-room='" + index + "' type='text' inputmode='decimal' value='" + esc(room.length || "") + "'></td>"
        + "<td><input data-field='width' data-room='" + index + "' type='text' inputmode='decimal' value='" + esc(room.width || "") + "'></td>"
        + "<td><input data-field='cutLength' data-room='" + index + "' type='text' inputmode='decimal' value='" + esc(room.cutLength || "") + "'></td>"
        + "<td><input data-field='cutWidth' data-room='" + index + "' type='text' inputmode='decimal' value='" + esc(room.cutWidth || "") + "'></td>"
        + "<td>" + room.net + "</td></tr>"
        + "<tr><td colspan='6'><div class='counts-line'><label>W <input data-field='windows' data-room='" + index + "' type='text' inputmode='numeric' value='" + (room.counts.windows || 0) + "'></label> "
        + "<label>D <input data-field='doors' data-room='" + index + "' type='text' inputmode='numeric' value='" + (room.counts.doors || 0) + "'></label> "
        + "<label>O <input data-field='outlets' data-room='" + index + "' type='text' inputmode='numeric' value='" + (room.counts.outlets || 0) + "'></label> "
        + "<label>F <input data-field='fixtures' data-room='" + index + "' type='text' inputmode='numeric' value='" + (room.counts.fixtures || 0) + "'></label></div></td></tr>";
    }).join("");
    const priced = pricedFor("walk");
    const next = state.approved.walk && state.plan !== "measure"
      ? '<a class="primary" style="display:block;text-align:center;text-decoration:none" href="#/phone/estimate/walk">' + esc(t("estimate")) + " · " + usd(priced.total) + "</a>"
      : '<button class="primary" type="button" data-act="approve" data-arg="walk">' + esc(t("approveWalk")) + "</button>";
    const blocked = state.plan === "measure" && state.approved.walk ? "<p>" + esc(t("blocked")) + "</p>" : "";
    const body = "<p class='caption'>" + esc(t("captionReady")) + "</p>"
      + "<p>" + esc(t("tradeLabel")) + ": <strong>" + esc(s.trade === "lighting" ? t("lightTrade") : t("floorTrade")) + "</strong>"
      + (s.product ? " · " + esc(s.product) : "") + "</p>"
      + "<p class='edit-hint'>" + esc(t("editHint")) + "</p>"
      + "<table class='summary-table'><tr><th>" + esc(t("rooms")) + "</th><th>" + esc(t("length")) + "</th><th>" + esc(t("width")) + "</th><th>" + esc(t("cutout")) + "</th><th></th><th>" + esc(t("sqft")) + "</th></tr>"
      + rows + "</table>"
      + "<p class='total'>" + esc(t("sqftTotal")) + ": " + s.totalNet + "</p>"
      + (countLine(s.counts) ? "<p class='counts-line'>" + esc(countLine(s.counts)) + "</p>" : "")
      + (state.approved.walk ? "<p>" + esc(t("approvedDone")) + "</p>" : "")
      + next + blocked
      + '<a class="ghost" style="display:block;text-align:center;text-decoration:none" href="#/phone/record">' + esc(t("record")) + "</a>";
    return phone(t("summary"), body, "record", "#/phone/record");
  }


  function phonePlans() {
    function row(id, text) {
      const on = state.plan === id;
      const amount = math.monthlyPlanUsd(id, 3);
      return "<article class='card'><p>" + esc(text) + "</p><p><strong>" + esc(t("seats3")) + ": " + usd(amount) + "</strong></p><button class='ghost' type='button' data-act='plan' data-arg='" + id + "'" + (on ? " disabled" : "") + ">" + esc(t("preview")) + (on ? " · " + id : "") + "</button></article>";
    }
    const body = "<p>" + esc(t("plansLead")) + "</p>" + row("measure", t("measureLine")) + row("standard", t("standardLine")) + row("custom", t("customLine")) + "<p>" + esc(t("voiceFree")) + "</p><p>" + esc(t("session")) + "</p><p class='meta'>" + esc(t("company")) + " · " + state.plan + "</p>";
    return phone(t("plans"), body, "plans", "#/phone/jobs");
  }

  function portal(section) {
    const sections = ["team", "book", "jobs", "estimates", "invoices", "charges", "usage", "billing"];
    if (sections.indexOf(section) < 0) section = "team";
    const nav = '<nav class="nav">' + sections.map(function (id) {
      return '<a class="' + (id === section ? "on" : "") + '" href="#/portal/' + id + '">' + esc(t(id === "billing" ? "billing" : id)) + "</a>";
    }).join("") + "</nav>";
    return '<div class="portal">' + banner() + '<header class="top"><div><h1>Measurely</h1><p class="quiet">' + esc(t("company")) + "</p></div>" + langSwitch() + "</header>" + nav + "<main>" + portalBody(section) + "</main></div>";
  }

  function portalBody(section) {
    if (section === "team") {
      return "<h2>" + esc(t("team")) + "</h2><table><tr><th>" + esc(t("sampleName")) + "</th><th>" + esc(t("role")) + "</th><th></th></tr><tr><td>Sample Owner</td><td>" + esc(t("owner")) + "</td><td><span class='chip ok'>" + esc(t("active")) + "</span></td></tr><tr><td>Sample Admin</td><td>" + esc(t("admin")) + "</td><td><span class='chip ok'>" + esc(t("active")) + "</span></td></tr><tr><td>Sample Estimator</td><td>" + esc(t("estimator")) + "</td><td><span class='chip ok'>" + esc(t("active")) + "</span></td></tr></table><p>" + esc(t("seats3")) + " · Standard · " + usd(math.monthlyPlanUsd("standard", 3)) + "</p>";
    }
    if (section === "book") {
      const rows = Object.keys(math.BOOK).map(function (code) {
        const item = math.BOOK[code];
        const sell = math.money(item.material + item.labor);
        return "<tr><td>" + esc(item.name) + "</td><td>" + esc(item.unit) + "</td><td>" + usd(item.material) + "</td><td>" + usd(item.labor) + "</td><td>" + usd(sell) + " (" + esc(t("defaultMark")) + ")</td></tr>";
      }).join("");
      return "<h2>" + esc(t("book")) + "</h2><p>" + esc(t("defaults")) + "</p><table><tr><th>" + esc(t("item")) + "</th><th>" + esc(t("unit")) + "</th><th>" + esc(t("material")) + "</th><th>" + esc(t("labor")) + "</th><th>" + esc(t("sell")) + "</th></tr>" + rows + "</table>";
    }
    if (section === "jobs") {
      const lightStatus = state.approved.light ? t("approved") : t("draft");
      return "<h2>" + esc(t("jobs")) + "</h2><table><tr><th>" + esc(t("job")) + "</th><th></th><th>" + esc(t("status")) + "</th></tr><tr><td>" + esc(t("floorTitle")) + "</td><td>" + esc(t("customerA")) + "</td><td><span class='chip ok'>" + esc(t("approved")) + "</span></td></tr><tr><td>" + esc(t("lightTitle")) + "</td><td>" + esc(t("customerB")) + "</td><td><span class='chip wait'>" + esc(lightStatus) + "</span></td></tr></table>";
    }
    if (section === "estimates") {
      const light = state.approved.light ? "<tr><td>S-201 " + esc(t("lightTitle")) + "</td><td>" + usd(lightPrice.total) + "</td><td><span class='chip wait'>" + esc(state.invoiced.light ? t("awaiting") : t("approved")) + "</span></td></tr>" : "<tr><td>S-201 " + esc(t("lightTitle")) + "</td><td></td><td><span class='chip wait'>" + esc(t("needs")) + "</span></td></tr>";
      return "<h2>" + esc(t("estimates")) + "</h2><table><tr><th>" + esc(t("estimateNo")) + "</th><th>" + esc(t("total")) + "</th><th>" + esc(t("status")) + "</th></tr><tr><td>S-200 " + esc(t("floorTitle")) + "</td><td>" + usd(floorPrice.total) + "</td><td><span class='chip ok'>" + esc(t("approved")) + "</span></td></tr>" + light + "</table>";
    }
    if (section === "invoices") {
      const light = state.invoiced.light ? "<tr><td>S-101 " + esc(t("lightTitle")) + "</td><td>" + usd(lightPrice.total) + "</td><td>" + esc(state.confirmed.light ? t("sampleConfirmed") : t("unpaid")) + "</td></tr>" : "";
      return "<h2>" + esc(t("invoices")) + "</h2><table><tr><th>" + esc(t("invoiceNo")) + "</th><th>" + esc(t("total")) + "</th><th>" + esc(t("status")) + "</th></tr><tr><td>S-100 " + esc(t("floorTitle")) + "</td><td>" + usd(floorPrice.total) + "</td><td>" + esc(state.confirmed.floor ? t("sampleConfirmed") : t("unpaid")) + "</td></tr>" + light + "</table><p><button class='ghost' type='button' data-act='export'>" + esc(t("export")) + "</button></p>" + (state.exportNote ? "<p>" + esc(t("exported")) + "</p>" : "");
    }
    if (section === "charges") {
      const can = state.role === "owner" || state.role === "admin";
      const label = state.charge === "quoted" ? t("quoted") : state.charge === "approved" ? t("quoteApproved") : t("billed");
      return "<h2>" + esc(t("charges")) + "</h2><p>" + esc(t("workflowNote")) + "</p><label>" + esc(t("role")) + "<select id='role'>" + ["owner", "admin", "estimator"].map(function (role) {
        return "<option value='" + role + "'" + (state.role === role ? " selected" : "") + ">" + esc(t(role)) + "</option>";
      }).join("") + "</select></label><article class='card'><p><span class='chip " + (state.charge === "billed" ? "bill" : "wait") + "'>" + esc(label) + "</span></p><p>" + esc(t("quotedPrice")) + " <strong>" + usd(math.WORKFLOW_NEW_USD) + "</strong></p><p>" + esc(t("applied")) + " <strong>" + usd(state.applied) + "</strong></p><p>" + esc(t("due")) + " <strong>" + usd(state.due) + "</strong></p><p>" + esc(t("creditLeft")) + " <strong>" + usd(state.credit) + "</strong></p><button class='primary' type='button' data-act='charge-approve'" + (can && state.charge === "quoted" ? "" : " disabled") + ">" + esc(t("approveQuote")) + "</button><button class='ghost' type='button' data-act='charge-bill'" + (can && state.charge === "approved" ? "" : " disabled") + ">" + esc(t("billQuote")) + "</button><p class='meta'>" + esc(t("estBlock")) + "</p></article>";
    }
    if (section === "usage") {
      return "<h2>" + esc(t("usage")) + "</h2><p>" + esc(t("captures")) + "</p><div class='bars'><div class='barcol'><div style='height:72px'>42</div><span>Sep</span></div><div class='barcol'><div style='height:110px'>61</div><span>Oct</span></div><div class='barcol'><div style='height:64px'>38</div><span>Nov</span></div></div><p>" + esc(t("voiceFree")) + "</p>";
    }
    return "<h2>" + esc(t("billing")) + "</h2><p>" + esc(t("plansLead")) + "</p><table><tr><th></th><th>3</th></tr><tr><td>" + esc(t("measureLine")) + "</td><td>" + usd(math.monthlyPlanUsd("measure", 3)) + "</td></tr><tr><td>" + esc(t("standardLine")) + "</td><td>" + usd(math.monthlyPlanUsd("standard", 3)) + "</td></tr><tr><td>" + esc(t("customLine")) + "</td><td>" + usd(math.monthlyPlanUsd("custom", 3)) + "</td></tr></table><p>" + esc(t("session")) + "</p>";
  }

  function render() {
    document.documentElement.lang = state.lang;
    document.getElementById("app").innerHTML = screen();
    const role = document.getElementById("role");
    if (role) role.addEventListener("change", function () { state.role = role.value; render(); });
    const name = document.getElementById("sign-name");
    if (name) name.addEventListener("input", function () { state.signName = name.value; });
    const agree = document.getElementById("sign-agree");
    if (agree) agree.addEventListener("change", function () { state.agreed = agree.checked; });
    bindPad();
    bindSummaryEdits();
  }

  function bindPad() {
    const canvas = document.getElementById("pad");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    function redraw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#142824";
      ctx.lineWidth = 4;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      state.strokes.forEach(function (stroke) {
        ctx.beginPath();
        stroke.forEach(function (point, index) {
          if (index === 0) ctx.moveTo(point.x, point.y);
          else ctx.lineTo(point.x, point.y);
        });
        ctx.stroke();
      });
    }
    function point(event) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (event.clientX - rect.left) * (canvas.width / rect.width),
        y: (event.clientY - rect.top) * (canvas.height / rect.height),
      };
    }
    redraw();
    canvas.onpointerdown = function (event) {
      canvas.setPointerCapture(event.pointerId);
      drawing = [point(event)];
      state.strokes.push(drawing);
      redraw();
    };
    canvas.onpointermove = function (event) {
      if (!drawing) return;
      drawing.push(point(event));
      redraw();
    };
    canvas.onpointerup = function () { drawing = null; };
  }

  function clearTimers() {
    if (timer) { clearInterval(timer); timer = null; }
    if (walkTimer) { clearInterval(walkTimer); walkTimer = null; }
    if (clockTimer) { clearInterval(clockTimer); clockTimer = null; }
  }

  function stopRecognition() {
    state.listening = false;
    if (!recognition) return;
    try { recognition.onend = null; recognition.stop(); } catch (e) {}
    recognition = null;
  }

  function refreshCounts(summary) {
    const totals = { fixtures: 0, swaps: 0, outlets: 0, windows: 0, doors: 0, switches: 0, dimmers: 0 };
    (summary.rooms || []).forEach(function (room) {
      room.gross = parseApi.round4((Number(room.length) || 0) * (Number(room.width) || 0));
      room.cut = parseApi.round4((Number(room.cutLength) || 0) * (Number(room.cutWidth) || 0));
      room.net = parseApi.round4(Math.max(0, room.gross - room.cut));
      Object.keys(totals).forEach(function (key) {
        totals[key] += Number(room.counts[key] || 0);
      });
    });
    summary.counts = totals;
    summary.totalGross = parseApi.round4((summary.rooms || []).reduce(function (sum, room) { return sum + (room.gross || 0); }, 0));
    summary.totalNet = parseApi.round4((summary.rooms || []).reduce(function (sum, room) { return sum + (room.net || 0); }, 0));
  }

  function finishTranscript(text) {
    stopRecognition();
    clearTimers();
    state.walkthrough = false;
    state.heardInterim = "";
    state.heard = text || state.heard;
    state.stage = "summarizing";
    state.captionKey = "captionSummarize";
    render();
    const parsed = parseApi.parseMeasurements(state.heard, state.lang);
    refreshCounts(parsed);
    state.summary = parsed;
    state.approved.walk = false;
    state.invoiced.walk = false;
    state.confirmed.walk = false;
    setTimeout(function () {
      state.stage = "ready";
      state.captionKey = "captionReady";
      if (location.hash !== "#/phone/summary") location.hash = "#/phone/summary";
      else render();
    }, 350);
  }

  function startClock() {
    if (clockTimer) clearInterval(clockTimer);
    clockTimer = setInterval(function () {
      state.elapsed += 1;
      if (hash() === "#/phone/record") render();
    }, 1000);
  }

  function startLive() {
    const Ctor = speechCtor();
    if (!Ctor || !liveMicAvailable()) {
      state.captionKey = "captionUnsupported";
      render();
      return;
    }
    stopRecognition();
    clearTimers();
    state.walkthrough = false;
    state.micDenied = false;
    state.summary = state.summary;
    state.heard = "";
    state.heardInterim = "";
    state.elapsed = 0;
    state.stage = "listening";
    state.listening = true;
    state.captionKey = "captionLive";
    const rec = new Ctor();
    recognition = rec;
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = state.lang === "es" ? "es-US" : "en-US";
    rec.onresult = function (event) {
      let finalText = "";
      let interim = "";
      for (let i = 0; i < event.results.length; i++) {
        const chunk = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalText += chunk + " ";
        else interim += chunk;
      }
      state.heard = finalText.trim();
      state.heardInterim = interim;
      if (hash() === "#/phone/record") render();
    };
    rec.onerror = function (event) {
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        state.micDenied = true;
        state.listening = false;
        state.stage = "";
        state.captionKey = "captionDenied";
        stopRecognition();
        clearTimers();
        render();
      }
    };
    rec.onend = function () {
      if (state.listening) {
        try { rec.start(); } catch (e) {}
      }
    };
    try {
      rec.start();
      startClock();
      render();
    } catch (e) {
      state.micDenied = true;
      state.listening = false;
      state.captionKey = "captionDenied";
      render();
    }
  }

  function startWalkthrough() {
    stopRecognition();
    clearTimers();
    state.walkthrough = true;
    state.listening = false;
    state.summary = null;
    state.approved.walk = false;
    state.heard = "";
    state.heardInterim = "";
    state.elapsed = 0;
    state.stage = "listening";
    state.captionKey = "captionWalk";
    const words = t("walkScript").split(/\s+/).filter(Boolean);
    let index = 0;
    render();
    walkTimer = setInterval(function () {
      if (index < words.length) {
        index += 1;
        state.heard = words.slice(0, index).join(" ");
        state.elapsed = Math.floor(index * 0.08);
        if (hash() === "#/phone/record") render();
      } else {
        finishTranscript(state.heard);
      }
    }, 80);
  }

  function skipWalkthrough() {
    stopRecognition();
    clearTimers();
    state.walkthrough = false;
    finishTranscript(t("walkScript"));
  }

  function bindSummaryEdits() {
    const inputs = document.querySelectorAll("input[data-field]");
    inputs.forEach(function (input) {
      input.addEventListener("change", function () {
        if (!state.summary) return;
        const room = state.summary.rooms[Number(input.getAttribute("data-room"))];
        if (!room) return;
        const field = input.getAttribute("data-field");
        if (field === "name") room.name = input.value.trim() || "area";
        else if (room.counts && field in room.counts) room.counts[field] = Number(input.value) || 0;
        else room[field] = Number(input.value) || 0;
        refreshCounts(state.summary);
        render();
      });
    });
  }

  function startRecord() {
    if (liveMicAvailable() && !state.micDenied) startLive();
    else startWalkthrough();
  }

  function act(name, arg) {
    if (name === "lang") {
      state.lang = arg;
      if (!state.docLang) state.docLang = "";
      if (state.listening && liveMicAvailable()) {
        const heard = state.heard;
        startLive();
        state.heard = heard;
      }
      render();
      return;
    }
    if (name === "signin") {
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      if (email.indexOf("@") < 0 || password.length < 4) {
        state.error = "email";
        render();
        return;
      }
      state.error = "";
      state.signedIn = true;
      location.hash = "#/phone/record";
      return;
    }
    if (name === "sample") {
      state.signedIn = true;
      state.error = "";
      location.hash = "#/phone/record";
      return;
    }
    if (name === "signout") {
      state.signedIn = false;
      location.hash = "#/phone/signin";
      return;
    }
    if (name === "plan") {
      state.plan = arg;
      render();
      return;
    }
    if (name === "doc") {
      state.docLang = arg;
      render();
      return;
    }
    if (name === "approve") {
      state.approved[arg] = true;
      if (arg === "walk" && state.plan !== "measure") {
        location.hash = "#/phone/estimate/walk";
        return;
      }
      render();
      return;
    }
    if (name === "save") {
      state.invoiced[arg] = true;
      state.savedNote = arg;
      location.hash = "#/phone/invoice/" + arg;
      return;
    }
    if (name === "record" || name === "start-live") {
      startLive();
      return;
    }
    if (name === "stop-live") {
      finishTranscript((state.heard + " " + (state.heardInterim || "")).trim());
      return;
    }
    if (name === "walkthrough") {
      startWalkthrough();
      return;
    }
    if (name === "skip-walk") {
      skipWalkthrough();
      return;
    }
    if (name === "clear-sign") {
      state.strokes = [];
      drawing = null;
      render();
      return;
    }
    if (name === "confirm") {
      const named = (document.getElementById("sign-name").value || "").trim();
      const agreed = document.getElementById("sign-agree").checked;
      state.signName = named;
      state.agreed = agreed;
      if (!state.strokes.length || !named || !agreed) {
        state.signNotice = "need";
        render();
        return;
      }
      state.confirmed[arg] = true;
      state.signNotice = "";
      render();
      return;
    }
    if (name === "charge-approve" && state.charge === "quoted" && state.role !== "estimator") {
      state.charge = "approved";
      render();
      return;
    }
    if (name === "charge-bill" && state.charge === "approved" && state.role !== "estimator") {
      state.applied = Math.min(state.credit, math.WORKFLOW_NEW_USD);
      state.due = math.money(math.WORKFLOW_NEW_USD - state.applied);
      state.credit = math.money(state.credit - state.applied);
      state.charge = "billed";
      render();
      return;
    }
    if (name === "export") {
      const csv = "job,trade,customer,status\nNorth kitchen,flooring,Sample Customer A,approved\nFront room cans,lighting,Sample Customer B,sample\n";
      const blob = new Blob([csv], { type: "text/csv" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "measurely-sample.csv";
      link.click();
      state.exportNote = "yes";
      render();
    }
  }

  document.body.addEventListener("click", function (event) {
    const el = event.target.closest("[data-act]");
    if (!el) return;
    act(el.dataset.act, el.dataset.arg || "");
  });

  window.addEventListener("hashchange", render);
  if (!location.hash) location.hash = "#/phone/record";
  else render();
})();
