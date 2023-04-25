import { initStoryblok } from "../../storyblok";

initStoryblok();

// Load Data -> TODO remove, it's just a workaround
export async function load({ params }) {
    return loadData(params)
  }