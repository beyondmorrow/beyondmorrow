import { c as create_ssr_component, h as compute_rest_props, v as validate_component, m as missing_component } from "./index.js";
import { storyblokInit as storyblokInit$1 } from "@storyblok/js";
const StoryblokComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["blok"]);
  let component;
  let { blok } = $$props;
  if (blok) {
    component = getComponent(blok.component);
  } else {
    console.error("Please provide a 'blok' property to the StoryblokComponent");
  }
  if ($$props.blok === void 0 && $$bindings.blok && blok !== void 0)
    $$bindings.blok(blok);
  return `
${validate_component(component || missing_component, "svelte:component").$$render($$result, Object.assign({ blok }, $$restProps), {}, {})}`;
});
let storyblokApiInstance = null;
const useStoryblokApi = () => {
  if (!storyblokApiInstance) {
    console.log(
      `You can't use getStoryblokApi if you're not loading apiPlugin.`
    );
  }
  return storyblokApiInstance;
};
let componentsMap = null;
const storyblokInit = (options) => {
  const { storyblokApi } = storyblokInit$1(options);
  storyblokApiInstance = storyblokApi;
  componentsMap = options.components || {};
};
const getComponent = (componentName) => {
  const component = componentsMap[componentName];
  if (!component) {
    console.error(`You didn't load the ${componentName} component. Please load it in storyblokInit. For example:
storyblokInit({
    accessToken: "<your-token>",
    components: {
      "teaser": Teaser
    }
})
`);
  }
  return component;
};
export {
  StoryblokComponent as S,
  storyblokInit as s,
  useStoryblokApi as u
};
