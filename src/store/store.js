import { writable } from 'svelte/store';

let storedUrls = writable([
	{
		initial: 'htt',
		shorten: 'ht'
	}
]);

export default storedUrls;
