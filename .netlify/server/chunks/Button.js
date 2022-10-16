import { c as create_ssr_component, f as add_attribute, e as escape } from "./index.js";
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link = "/contact" } = $$props;
  let { text = "Buchen" } = $$props;
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  return `<button><a class="${"rounded-sm drop-shadow-md inline-block w-full md:w-auto py-3 px-8 text-center text-white font-bold bg-beyondpurple-900 hover:bg-beyondpurple-800 transition duration-200"}"${add_attribute("href", link, 0)}>${escape(text)}</a></button>`;
});
export {
  Button as B
};
