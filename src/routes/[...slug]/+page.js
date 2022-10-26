import { storyblokInit, apiPlugin, useStoryblokApi } from "@storyblok/svelte";
import { PUBLIC_STORYBLOK_TOKEN } from '$env/static/public';

import Heading from '../../components/Heading.svelte';
import Page from '../../components/Page.svelte';
import Image from '../../components/Image.svelte';
import Offers from '../../components/Offers.svelte';
import DetailedOffers from '../../components/DetailedOffers.svelte';
import Faq from '../../components/Faq.svelte';
import ContactForm from '../../components/ContactForm.svelte';
import RichText from '../../components/RichText.svelte';
import Timetable from '../../components/Timetable.svelte';
import Events from '../../components/Events.svelte';

/**
 * Init Storyblok
 */
storyblokInit({
  accessToken: PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    heading: Heading,
    page: Page,
    image: Image,
    offers: Offers,
    detailedOffers: DetailedOffers,
    faq: Faq,
    contactForm: ContactForm,
    text: RichText,
    timetable: Timetable,
    events: Events,
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