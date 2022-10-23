import { consent } from '../stores/cookieConsent'

export function accept() {
    consent.set(String(true));
}

export function decline() {
    consent.set(String(false));
}

export function revokeConsent() {
    consent.set(null);
}

export { consent };