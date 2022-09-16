import { storyblokInit, apiPlugin, useStoryblokApi } from "@storyblok/svelte";
import Feature from '../../components/Feature.svelte';
import Grid from '../../components/Grid.svelte';
import Page from '../../components/Page.svelte';
import Teaser from '../../components/Teaser.svelte';

export const prerender = true;

storyblokInit({
  accessToken: "gFB8E36ZBQndTil6oKKGTQtt",
  use: [apiPlugin],
  components: {
    feature: Feature,
    grid: Grid,
    page: Page,
    teaser: Teaser,
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