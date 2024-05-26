// store.js
import { atom, useAtom } from 'jotai';
import { atomWithReset, atomWithStorage, selectAtom } from 'jotai/utils';
import { isEqual } from 'lodash-es';

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
// read write atoms
const count = atom(1);
export const readWriteAtom = atom((get) => get(count),
(get, set) => {
    set(count, get(count) + 1);
},
);
export const handleMouseMoveAtom1 = atom (
    (get) => get(dotsAtom),
    (get, set, update) => {
        if(get(drawingAtom)) {
            set(dotsAtom, (prev) => [...prev, update]);
        }
    }
);
const createCountIncAtoms = (initialValue) => {
    const baseAtom = atom(initialValue)
    const valueAtom = atom((get) => get(baseAtom))
    const incAtom = atom(null, (get, set) => set(baseAtom, (c) => c + 1))
    return [valueAtom, incAtom]
  }

// Create atoms for foo and bar counters
export const [fooAtom, fooIncAtom] = createCountIncAtoms(0);
export const [barAtom, barIncAtom] = createCountIncAtoms(0);

// Async Read Atoms
export const counter1 = atom(1);
export const asyncAtom = atom(async (get) => get(counter1) * 50);

// Async Write Atoms
export const asyncWriteAtom = atom(null, async (get, set) => {
    await fetch('http://jsonplaceholder.typicode.com/todos/');
    set(counter1, get(counter1) + 1);
});

// Atom with Reset
export const resetCounter = atomWithReset(1);

const defaultPerson = {
    name: {
      first: "Jane",
      last: "Doe"
    },
    birth: {
      year: 2000,
      month: "Jan",
      day: 1,
      time: {
        hour: 0,
        minute: 0
      }
    }
  };
// Original atom.
export const personAtom = atom(defaultPerson);
// Tracks person.name. Updated when person.name object changes, even
// if neither name.first nor name.last actually change.
export const nameAtom = selectAtom(personAtom, (person) => person.name);
// Tracks person.birth. Updated when year, month, day, hour, or minute changes.
// Use of deepEquals means that this atom doesn't update if birth field is
// replaced with a new object containing the same data. E.g., if person is re-read
// from a database.
export const birthAtom = selectAtom(personAtom, (person) => person.birth, isEqual);