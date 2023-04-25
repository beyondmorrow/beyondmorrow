import { storyblokInit, apiPlugin, useStoryblokApi } from "@storyblok/svelte";
import { PUBLIC_STORYBLOK_TOKEN } from '$env/static/public';

import GenericPage from './components/contentType/GenericPage.svelte';
import EventPage from './components/contentType/EventPage.svelte';

import Heading from './components/nestable/Heading.svelte';
import Image from './components/nestable/Image.svelte';
import Offers from './components/nestable/Offers.svelte';
import DetailedOffers from './components/nestable/DetailedOffers.svelte';
import Faq from './components/nestable/Faq.svelte';
import ContactForm from './components/nestable/ContactForm.svelte';
import RichText from './components/nestable/RichText.svelte';
import Timetable from './components/nestable/Timetable.svelte';
import Events from './components/nestable/Events.svelte';
import Event from './components/nestable/Event.svelte';
import TextWithImage from './components/nestable/TextWithImage.svelte';
import HeroBanner from './components/nestable/HeroBanner.svelte';
import RevokeConsent from './components/nestable/RevokeConsent.svelte';
import Testimonials from './components/nestable/Testimonials.svelte';
import CallToAction from './components/nestable/CallToAction.svelte';
import SocialMediaNewsletter from './components/nestable/SocialMediaNewsletter.svelte';
import Location from './components/nestable/Location.svelte';
import Prices from './components/nestable/Prices.svelte';
import ButtonGroup from './components/nestable/ButtonGroup.svelte';
import Divider from './components/nestable/Divider.svelte';
import Quote from './components/nestable/Quote.svelte';
import YouTube from './components/nestable/YouTube.svelte';
import SpotifySection from './components/nestable/SpotifySection.svelte';

/**
 * Init Storyblok
 */
export function initStoryblok() {
    storyblokInit({
        accessToken: PUBLIC_STORYBLOK_TOKEN,
        use: [apiPlugin],
        components: {
            // Content Type ./components
            eventPage: EventPage,
            page: GenericPage,
            // Nestable ./components
            heading: Heading,
            image: Image,
            offers: Offers,
            detailedOffers: DetailedOffers,
            faq: Faq,
            contactForm: ContactForm,
            text: RichText,
            timetable: Timetable,
            events: Events,
            event: Event,
            textWithImage: TextWithImage,
            heroBanner: HeroBanner,
            revokeConsent: RevokeConsent,
            testimonials: Testimonials,
            callToAction: CallToAction,
            socialMediaAndNewsletter: SocialMediaNewsletter,
            location: Location,
            prices: Prices,
            buttonGroup: ButtonGroup,
            button: ButtonGroup,
            divider: Divider,
            quote: Quote,
            youtube: YouTube,
            spotifySection: SpotifySection,
        },
    });
}

export default async function loadData(params) {
    const storyblokApi = useStoryblokApi();

    let slug = params.slug;
    let path = 'cdn/stories/';

    if (slug) {
        path += slug;
    } else {
        path += 'home';
    }

    const { data } = await storyblokApi.get(path, {
        version: "published",
    });

    return {
        story: data.story
    }
}