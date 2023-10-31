import { storyblokInit, apiPlugin, useStoryblokApi } from "@storyblok/svelte";
import { PUBLIC_STORYBLOK_TOKEN } from '$env/static/public';
import * as c from '../pathConst';

import GenericPage from '../components/contentType/GenericPage.svelte';
import EventPage from '../components/contentType/EventPage.svelte';

import Heading from '../components/nestable/Heading.svelte';
import Image from '../components/nestable/Image.svelte';
import Offers from '../components/nestable/Offers.svelte';
import DetailedOffers from '../components/nestable/DetailedOffers.svelte';
import Faq from '../components/nestable/Faq.svelte';
import ContactForm from '../components/nestable/ContactForm.svelte';
import RichText from '../components/nestable/RichText.svelte';
import Timetable from '../components/nestable/Timetable.svelte';
import Events from '../components/nestable/Events.svelte';
import Event from '../components/nestable/Event.svelte';
import TextWithImage from '../components/nestable/TextWithImage.svelte';
import HeroBanner from '../components/nestable/HeroBanner.svelte';
import RevokeConsent from '../components/nestable/RevokeConsent.svelte';
import Testimonials from '../components/nestable/Testimonials.svelte';
import CallToAction from '../components/nestable/CallToAction.svelte';
import SocialMediaNewsletter from '../components/nestable/SocialMediaNewsletter.svelte';
import Location from '../components/nestable/Location.svelte';
import Prices from '../components/nestable/Prices.svelte';
import ButtonGroup from '../components/nestable/ButtonGroup.svelte';
import Divider from '../components/nestable/Divider.svelte';
import Quote from '../components/nestable/Quote.svelte';
import YouTube from '../components/nestable/YouTube.svelte';
import SpotifySection from '../components/nestable/SpotifySection.svelte';
import Gallery from "../components/nestable/Gallery.svelte";

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
            gallery: Gallery,
        },
    });
}

export default async function loadData(params) {
    const slug = params.slug;

    return {
        ... await loadStory(slug),
        // At the moment, the events component is only supported on the home and retreats-event pages
        ... ((slug === 'retreats-events' || !slug) && await loadEvents())
    }
}

async function loadStory(slug) {
    const storyblokApi = useStoryblokApi();

    let path = 'cdn/stories/';

    if (slug) {
        path += slug;
    } else {
        path += 'home';
    }

    const { data } = await storyblokApi.get(path, {
        version: "published",
    });

    return { story: data.story };
}

async function loadEvents() {
    const storyblokApi = useStoryblokApi();

    const { data } = await storyblokApi.get('cdn/stories/', {
        version: 'published',
        starts_with: c.PATH_RETREATS_EVENTS.substring(1),
        is_startpage: 0, // Exclude Retreats & Events Overview Page
        per_page: 20,
        sort_by: 'content.startingDate:desc',
        filter_query: {
            component: {
                in: 'eventPage'
            },
        }
    })

    return { events: data.stories };
}

/**
     * Return image dimensions for a storyblok image url
     *
     * @param url
     */
export function getImageDimensions(url) {
    return {
        width: url.split("/")[5].split("x")[0],
        height: url.split("/")[5].split("x")[1],
    };
};