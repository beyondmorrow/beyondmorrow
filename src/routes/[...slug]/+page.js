import { storyblokInit, apiPlugin, useStoryblokApi } from "@storyblok/svelte";
import { PUBLIC_STORYBLOK_TOKEN } from '$env/static/public';

import GenericPage from '../../components/contentType/GenericPage.svelte';
import EventPage from '../../components/contentType/EventPage.svelte';

import Heading from '../../components/nestable/Heading.svelte';
import Image from '../../components/nestable/Image.svelte';
import Offers from '../../components/nestable/Offers.svelte';
import DetailedOffers from '../../components/nestable/DetailedOffers.svelte';
import Faq from '../../components/nestable/Faq.svelte';
import ContactForm from '../../components/nestable/ContactForm.svelte';
import RichText from '../../components/nestable/RichText.svelte';
import Timetable from '../../components/nestable/Timetable.svelte';
import Events from '../../components/nestable/Events.svelte';
import Event from '../../components/nestable/Event.svelte';
import TextWithImage from '../../components/nestable/TextWithImage.svelte';

/**
 * Init Storyblok
 */
storyblokInit({
  accessToken: PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    // Content Type Components
    eventPage: EventPage,
    page: GenericPage,
    // Nestable Components
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
  },
});

export async function load({ params }) {
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