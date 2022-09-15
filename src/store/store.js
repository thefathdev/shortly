import { writable } from 'svelte/store';

let storedUrls = writable([]);

export default storedUrls;

// TODO: add local storage feature
