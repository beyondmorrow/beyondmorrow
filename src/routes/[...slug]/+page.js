import { initStoryblok } from "../../storyblok";
import loadData from "../../storyblok" //remove workaround

initStoryblok();

// Load Data -> TODO remove, it's just a workaround
export async function load({ params }) {
    return loadData(params)
  }