# Add a new property listing

Add a new listing to `src/lib/listings.js`.

If the user provided details (price, rooms, area, floor, district, city, score, tag, img) use them.
Otherwise fill in plausible Mongolian real-estate defaults:
- price: a realistic MNT amount (e.g. 380_000_000)
- city: 'Ulaanbaatar'
- district: one of 'Sükhbaatar', 'Bayanzürkh', 'Khan-Uul', 'Chingeltei', 'Songino-Khairkhan'
- score: 80–96
- img: a valid Unsplash photo URL (use one that doesn't already appear in the file)

Steps:
1. Read `src/lib/listings.js` to find the current max `id`.
2. Append a new object with `id = maxId + 1`.
3. Confirm the addition and remind the user that the new route `/listings/<id>` is automatically pre-generated on the next `npm run build` via `generateStaticParams`.
