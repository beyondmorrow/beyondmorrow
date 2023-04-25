import { initStoryblok } from "../../storyblok";
import loadData from "../../storyblok"

// SSG
export const prerender = true;

// Init Storyblok
initStoryblok();

// Load Data
export async function load({ params }) {
  return loadData(params)
}