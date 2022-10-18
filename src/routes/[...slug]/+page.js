import { storyblokInit, apiPlugin, useStoryblokApi } from "@storyblok/svelte";
 import { PUBLIC_STORYBLOK_TOKEN } from '$env/static/public';

import Heading from '../../components/Heading.svelte';
import Page from '../../components/Page.svelte';
import Image from '../../components/Image.svelte';
import Quote from '../../components/Quote.svelte';
import Offers from '../../components/Offers.svelte';
import DetailedOffers from '../../components/DetailedOffers.svelte';
import Faq from '../../components/Faq.svelte';
import ContactForm from '../../components/ContactForm.svelte';
import RichText from '../../components/RichText.svelte';

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
    quote: Quote,
    offers: Offers,
    detailedOffers: DetailedOffers,
    faq: Faq,
    contactForm: ContactForm,
    text: RichText,
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