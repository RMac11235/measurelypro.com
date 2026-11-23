# Measurely demo

Clickable sample.  No server, no account, no keys, and no real names.

1. Open `index.html` in a browser on this PC or on a phone that can open the file.
2. Choose the phone app or the web portal.
3. Every screen says `Demo, sample data`.

The phone path is sign in (or the sample seat), Jobs, the voice walk-through with the progress ring, the measurement sheet, the estimate, the invoice, and a DocuSign-style confirmation that stays on the page.  One flooring job and one lighting job are loaded.  English and Spanish switch in the header.  Plan tiers are on the phone Plans tab and on the portal.

Prices on the screen are computed from `demo-math.js`, which is a display copy of `app/lib/logic/math.dart` and `functions/src/plans.ts`.  Do not invent a third list.  If those files change, change `demo-math.js` to match.

The confirmation step does not call DocuSign.  The sample CSV is built in the browser from the two sample jobs.
