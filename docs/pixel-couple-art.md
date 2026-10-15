# Current pixel couple — hand-placed game sprite

The title screen now uses the flat-color SVG in `src/components/DetailedPixelCouple.tsx`, based on the first `PixelCouple.tsx`. It does not use image generation or the previous PNG.

- Canvas: 34 x 27 logical pixels; character heights: 23 and 20 pixels, aligned at the feet.
- Simple eyes, single-pixel facial details, tidy hair and joined hands.
- No gradients, filters, smooth shading, or baked-in scenery.
- Main-page widths: 340 / 272 / 204 px where space permits (10x / 8x / 6x).
- Currently applied only to the title screen; the transparent component is reusable.

## Archived illustration notes — no longer used by the application
# Pixel couple — Love v2

Created with the built-in image generation tool. The user reference was used as style guidance, not as a character to copy. This replaces the earlier hand-coded faces completely.

- Asset: `public/assets/pixel-couple-love-v2.png`
- Consumer: `src/components/DetailedPixelCouple.tsx`, currently used only by the intro.
- Original PNG alpha is preserved; no background, floor, or scene is baked in.
- For other pages, reuse the component and size it with `object-fit: contain`. Its portrait aspect ratio differs from the earlier SVG.
- The requested 185 cm / 163 cm relationship is art direction, not an exact pixel measurement of the generated pose.

## Generation prompt

Use case: stylized-concept. Create ONE production-ready transparent-background pixel-art chibi romantic couple sprite for a purple/pink retro birthday game website. This is a completely new character design. The attached user reference is STYLE GUIDANCE ONLY: capture its beautiful cute polished chibi face, large luminous violet eyes, clean pixel hair masses and refined game sprite finish, without copying its character, bangs, bow, costume or pose. Highest priority: appealing, sweet, lovely faces, not crude geometric faces. Two full-body Korean young adult chibi characters standing close, gently holding hands between them, bodies subtly angled toward each other, soft happy smiles, tender loving expressions, subtly looking toward each other while faces remain mostly visible. Man on left 185cm, woman on right 163cm: approximately 1.135 height ratio, same ground baseline, both chibi with large ROUND heads and small compact bodies, no long faces. Woman: lovely large clear violet eyes with white sparkles, soft round cheeks, subtle blush, tiny smile, nearly invisible nose, NO BANGS whatsoever, open forehead and neat center-part long straight dark purple-black hair falling smoothly past waist, small pink hair clip; pink/lilac short dress, ivory socks and purple shoes. Man: cute handsome youthful friendly round face, big clear eyes (a little smaller than woman's, NEVER narrow), tiny subtle nose slightly more defined than woman's but no nose bridge line, neat short dark purple-black hair with smooth tidy side-swept bangs, soft lavender knit sweater, muted purple pants and ivory sneakers. Consistent same pixel grid and outline weight for both. Style polished high-quality 16-bit anime chibi pixel game sprites, hand-placed crisp square pixel clusters, stepped clean silhouettes, delicate purposeful shading limited mainly to hair and clothes, dark plum outlines rather than harsh black, palette lavender/pink/dark plum/ivory with warm light skin. Character heads take about 45% of each character height. Soft cheeks, no facial contour lines, no under-eye lines, no dark eye bags, no harsh eyebrows, no deep facial shading, no elongated noses or faces, no angular realistic anatomy, no spiky messy hair. Hands clearly join naturally, anatomically coherent two people with exactly two arms each. Isolated couple only: absolutely no scenery, no moon, no stars, no hearts, no floor, no cast shadow, no frame, no text, no watermark. True alpha transparency, no checkerboard baked into image. Full bodies and all hair and shoes visible, compact composition with small even transparent margin. This must be a beautiful finished pixel illustration, not SVG-looking rectangles or flat stick figures.

