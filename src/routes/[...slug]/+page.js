import { storyblokInit, apiPlugin, useStoryblokApi } from "@storyblok/svelte";

import Heading from '../../components/Heading.svelte';
import Page from '../../components/Page.svelte';
import Image from '../../components/Image.svelte';
import Section from '../../components/Section.svelte';
import Paragraph from '../../components/Paragraph.svelte';
import Quote from '../../components/Quote.svelte';
import SubHeading from '../../components/SubHeading.svelte';
import Offers from '../../components/Offers.svelte';

storyblokInit({
  accessToken: "gFB8E36ZBQndTil6oKKGTQtt",
  use: [apiPlugin],
  components: {
    heading: Heading,
    page: Page,
    image: Image,
    section: Section,
    paragraph: Paragraph,
    quote: Quote,
    subHeading: SubHeading,
    offers: Offers,
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