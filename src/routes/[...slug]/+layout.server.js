import { initStoryblok } from "../../modules/storyblok";
import loadData from "../../modules/storyblok"

// SSG
export const prerender = true;

// Init Storyblok
initStoryblok();

// Load Data
export async function load({ params }) {
  return loadData(params)
}