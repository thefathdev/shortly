// @ts-nocheck
import { writable } from 'svelte/store';

import { browser } from '$app/environment';

const stored = browser && localStorage.getItem('content');

export const storedUrls = writable(stored ? JSON.parse(stored) : []);

storedUrls.subscribe((data) => browser && localStorage.setItem('content', JSON.stringify(data)));
