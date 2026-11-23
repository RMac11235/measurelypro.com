# Measurely demo

Clickable sample of the core walk-in flow.  No server, no account, no keys, and no real names.

1. Sign in at the gate, then the phone opens on the walk-in screen.
2. Tap the mic and speak rooms, sizes, and counts, or watch the walk-through.
3. The app turns the spoken words into a room-by-room summary.  You can edit the numbers, then open an estimate and invoice priced from `demo-math.js`.

The home chooser, the jobs list, and the web portal are still in the demo, but they are secondary.  Every screen says `Demo, sample data`.

Live listening uses the browser's Web Speech API.  In Chrome that service is provided by Google.  Nothing is sent to a Measurely server.  Safari, Firefox, and iOS use the typed walk-through instead.

Prices on the estimate are computed from `demo-math.js`, which is a display copy of `app/lib/logic/math.dart` and `functions/src/plans.ts`.  Do not invent a third list.

The confirmation step does not call DocuSign.  The sample CSV is built in the browser from the two sample jobs.
