# RPG pixel couple candidate and rollback

The main page defaults to the new `RpgPixelCouple.tsx` candidate. No original artwork was overwritten.

Compare on the same title screen:

- `/?characters=rpg`: new RPG sprite and comparison menu.
- `/?characters=original`: first version, preserved in `PixelCouple.tsx`.
- `/?characters=previous`: preceding 34 x 27 sprite, preserved in `DetailedPixelCouple.tsx`.

Only the optional `characters` query parameter controls this preview. It does not write localStorage or alter quest routes or completion. Remove the parameter to return to the normal main screen.

For a permanent rollback, change the fallback value `rpg` to `original` in `IntroCharacters.tsx`.

The candidate uses a transparent 46 x 40 SVG grid and hand-placed color pixels. Character heights are 36 and 32 pixels (1.125 ratio, approximating the requested 185/163 relationship). Shoes share the same baseline. Main-page display widths are 322, 276 and 230 px (7x, 6x, 5x) where space permits. The reference guides only character density and RPG proportions; its room and scenery are not reproduced.

The previous generated PNG is archived and is not used by this candidate.
