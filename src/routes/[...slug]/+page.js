import { storyblokInit, apiPlugin, useStoryblokApi } from "@storyblok/svelte";

import Heading from '../../components/Heading.svelte';
import Page from '../../components/Page.svelte';
import Image from '../../components/Image.svelte';
import Quote from '../../components/Quote.svelte';
import Offers from '../../components/Offers.svelte';
import DetailedOffers from '../../components/DetailedOffers.svelte';
import Faq from '../../components/Faq.svelte';

storyblokInit({
  accessToken: "gFB8E36ZBQndTil6oKKGTQtt",
  use: [apiPlugin],
  components: {
    heading: Heading,
    page: Page,
    image: Image,
    quote: Quote,
    offers: Offers,
    detailedOffers: DetailedOffers,
    faq: Faq,
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
    version: "draft",
  });
 
  return {
    story: data.story
  }
}