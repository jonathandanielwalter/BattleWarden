import { writable } from "svelte/store";

export const player1Name = writable("");
export const player2Name = writable("");

export const player1Vp = writable(0);
export const player2Vp = writable(0);