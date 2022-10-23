import { writable } from "svelte/store";
import { browser } from '$app/environment';

export let consent = undefined;

if (browser) {
    let storedConsent = localStorage.getItem('consent');

    consent = writable(storedConsent);

    consent.subscribe((value) => localStorage.consent = value);
}