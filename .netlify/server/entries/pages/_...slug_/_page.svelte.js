import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import "@storyblok/js";
import { S as StoryblokComponent } from "../../../chunks/index2.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div>${data.story ? `${validate_component(StoryblokComponent, "StoryblokComponent").$$render($$result, { blok: data.story.content }, {}, {})}` : ``}</div>`;
});
export {
  Page as default
};
