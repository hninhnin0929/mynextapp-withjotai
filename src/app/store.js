// store.js
import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const countAtom = atom(0);

export const themeAtom = atom('light');

export const theme = atomWithStorage('dark', false);