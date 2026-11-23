/* Display copy of the rates in app/lib/logic/math.dart and functions/src/plans.ts.
   The demo does not add a second price list.  Change those files, then change this copy. */
(function (root, factory) {
  const api = factory();
  if (typeof module !== "undefined" && module.exports) module.exports = api;
  root.MeasurelyMath = api;
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  function money(n) {
    return Math.round(n * 100) / 100;
  }

  function round4(n) {
    return Math.round(n * 10000) / 10000;
  }

  const PLANS = {
    measure: { id: "measure", monthlyUsd: 0, includedUsers: 0, perUserUsd: 9.99, workflowCharges: false },
    standard: { id: "standard", monthlyUsd: 49.99, includedUsers: 1, perUserUsd: 29.99, workflowCharges: false },
    custom: { id: "custom", monthlyUsd: 499.99, includedUsers: 0, perUserUsd: 49.99, workflowCharges: true },
  };

  const BOOK = {
    LVP: { code: "LVP", name: "LVP", unit: "sqft", material: 3.25, labor: 2.5, wastePct: 10, trade: "flooring" },
    LAMINATE: { code: "LAMINATE", name: "Laminate", unit: "sqft", material: 2.75, labor: 2.25, wastePct: 10, trade: "flooring" },
    HARDWOOD: { code: "HARDWOOD", name: "Hardwood", unit: "sqft", material: 8.5, labor: 4, wastePct: 8, trade: "flooring" },
    TILE: { code: "TILE", name: "Tile", unit: "sqft", material: 6, labor: 5.5, wastePct: 15, trade: "flooring" },
    CARPET: { code: "CARPET", name: "Carpet", unit: "sqft", material: 2.4, labor: 1.75, wastePct: 10, trade: "flooring" },
    TRANSITION: { code: "TRANSITION", name: "Transition", unit: "ea", material: 18, labor: 12, wastePct: 0, trade: "flooring" },
    UNDERLAYMENT: { code: "UNDERLAYMENT", name: "Underlayment", unit: "sqft", material: 0.55, labor: 0.4, wastePct: 0, trade: "flooring" },
    DEMO: { code: "DEMO", name: "Demo and haul-off", unit: "sqft", material: 0, labor: 1.25, wastePct: 0, trade: "flooring" },
    STAIRS: { code: "STAIRS", name: "Stairs", unit: "ea", material: 35, labor: 45, wastePct: 0, trade: "flooring" },
    RECESSED: { code: "RECESSED", name: "Recessed can", unit: "ea", material: 28, labor: 65, wastePct: 0, trade: "lighting" },
    FIXTURE_SWAP: { code: "FIXTURE_SWAP", name: "Fixture swap", unit: "ea", material: 0, labor: 45, wastePct: 0, trade: "lighting" },
    UNDERCABINET: { code: "UNDERCABINET", name: "Under-cabinet light", unit: "ea", material: 75, labor: 55, wastePct: 0, trade: "lighting" },
    SWITCH: { code: "SWITCH", name: "Switch", unit: "ea", material: 4, labor: 25, wastePct: 0, trade: "lighting" },
    DIMMER: { code: "DIMMER", name: "Dimmer", unit: "ea", material: 22, labor: 35, wastePct: 0, trade: "lighting" },
    CIRCUIT: { code: "CIRCUIT", name: "New circuit", unit: "ea", material: 85, labor: 180, wastePct: 0, trade: "lighting" },
  };

  function monthlyPlanUsd(planId, users) {
    const plan = PLANS[planId];
    const extra = Math.max(0, users - plan.includedUsers);
    return money(plan.monthlyUsd + extra * plan.perUserUsd);
  }

  function floorTakeoff() {
    const gross = round4(14 * 12);
    const cut = round4(4 * 6);
    const net = round4(gross - cut);
    const withWaste = round4(net * (1 + BOOK.LVP.wastePct / 100));
    const boxes = Math.ceil(withWaste / 20 - 1e-9);
    const billable = round4(boxes * 20);
    return { gross: gross, cut: cut, net: net, withWaste: withWaste, boxes: boxes, billable: billable };
  }

  function priceLines(rows, taxPct, minJob) {
    const lines = rows.map(function (row) {
      const rate = money(row.rate);
      const qty = round4(row.qty);
      return { item: row.item, qty: qty, unit: row.unit, rate: rate, amount: money(qty * rate), isDefault: true };
    });
    const subtotal = money(lines.reduce(function (sum, line) { return sum + line.amount; }, 0));
    const taxable = money(subtotal < minJob ? minJob : subtotal);
    const tax = money(taxable * taxPct / 100);
    return { lines: lines, subtotal: subtotal, tax: tax, total: money(taxable + tax) };
  }

  function priceFloor() {
    const takeoff = floorTakeoff();
    const priced = priceLines([
      { item: "LVP material", qty: takeoff.billable, unit: "sqft", rate: BOOK.LVP.material },
      { item: "LVP labor", qty: takeoff.withWaste, unit: "sqft", rate: BOOK.LVP.labor },
    ], 7, 250);
    priced.takeoff = takeoff;
    return priced;
  }

  function priceLight() {
    return priceLines([
      { item: "Recessed can", qty: 12, unit: "ea", rate: BOOK.RECESSED.material + BOOK.RECESSED.labor },
      { item: "Fixture swap", qty: 3, unit: "ea", rate: BOOK.FIXTURE_SWAP.material + BOOK.FIXTURE_SWAP.labor },
    ], 7, 250);
  }

  return {
    money: money,
    PLANS: PLANS,
    BOOK: BOOK,
    monthlyPlanUsd: monthlyPlanUsd,
    floorTakeoff: floorTakeoff,
    priceFloor: priceFloor,
    priceLight: priceLight,
    WORKFLOW_NEW_USD: 750,
    WORKFLOW_CREDIT_USD: 200,
    SESSION_USD_PER_HOUR: 500,
    HOUSE_CALLS_PER_HOUR: 60,
  };
});
