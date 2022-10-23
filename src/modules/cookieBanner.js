import { consent } from '../stores/cookieConsent'
import { get } from 'svelte/store'

function accept() {
    consent.set(String(true));
}

function decline() {
    consent.set(String(false));
}

function revokeConsent() {
    consent.set(null);
}

export { accept, decline, revokeConsent, consent };