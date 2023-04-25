import { initStoryblok } from "../../storyblok";
import loadData from "../../../storyblok";

initStoryblok();

// Load Data
export async function load({ params }) {
    return loadData(params)
  }