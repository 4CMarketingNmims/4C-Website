// Mumbai / Salsette Island outline, drawn in the same 480 x 780 viewBox used
// everywhere else in the project (see MapScene3D.js). Unlike the earlier
// version — which was a generic teardrop blob — this traces the actual
// silhouette of the city: a broad northern landmass (the Salsette suburbs,
// Borivali down to Kurla/Thane creek) that narrows into the long, hooked
// South Mumbai peninsula (Bandra -> Worli -> Marine Drive/Back Bay -> Colaba),
// with a distinct eastern bulge for Chembur/Trombay and Mumbai Harbour, and
// a western bulge for the Juhu/Versova shoreline. Elephanta is kept as its
// own small island offshore rather than merged into the mainland, matching
// how it actually sits apart across the harbour.
//
// Every LANDMARKS x/y in page.js was checked against this outline and sits
// comfortably inside it (coastal landmarks like Marine Drive, Haji Ali and
// Gateway of India sit close to the edge, as they do in reality).
export const MUMBAI_PATHS = [
  // Main landmass: Salsette Island + the South Mumbai peninsula.
  "M 170 140 L 260 125 L 340 145 L 385 195 L 400 250 L 405 310 L 420 365 L 430 410 L 400 440 L 365 420 L 345 460 L 330 505 L 310 550 L 290 590 L 265 630 L 235 670 L 215 710 L 195 730 L 165 715 L 145 680 L 128 640 L 112 600 L 98 560 L 70 515 L 85 465 L 110 420 L 140 375 L 175 330 L 155 220 L 150 175 Z",
  // Elephanta Caves: a small separate island offshore in the harbour.
  "M 270 650 L 320 645 L 345 675 L 330 710 L 285 715 L 260 690 Z",
];

export const MUMBAI_OUTLINE_PATHS = [
  "M 170 140 L 260 125 L 340 145 L 385 195 L 400 250 L 405 310 L 420 365 L 430 410 L 400 440 L 365 420 L 345 460 L 330 505 L 310 550 L 290 590 L 265 630 L 235 670 L 215 710 L 195 730 L 165 715 L 145 680 L 128 640 L 112 600 L 98 560 L 70 515 L 85 465 L 110 420 L 140 375 L 175 330 L 155 220 L 150 175 Z",
  "M 270 650 L 320 645 L 345 675 L 330 710 L 285 715 L 260 690 Z",
];