// store.js
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const countAtom = atom(0);

export const themeAtom = atom('light');

export const theme = atomWithStorage('dark', false);

export const textAtom = atom('readonly atoms');
export const uppercase = atom((get) => get(textAtom).toUpperCase());

export const textAtom1 = atom('write only atoms');
export const uppercase1 = atom(null, (get, set) => {
    set(textAtom, get(textAtom).toUpperCase())
})

export const dotsAtom = atom([]);
export const drawingAtom = atom(false);
export const handleMouseDownAtom = atom(
    null,
    (get, set) => {
        set(drawingAtom, true);
    }
);
export const handleMouseUpAtom = atom(
    null,
    (get, set) => {
        set(drawingAtom, false);
    }
);
export const handleMouseMoveAtom = atom (
    null,
    (get, set, update) => {
        if(get(drawingAtom)) {
            set(dotsAtom, (prev) => [...prev, update]);
        }
    }
);