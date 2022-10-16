import { c as create_ssr_component, e as escape, d as each, f as add_attribute, v as validate_component, b as subscribe } from "../../../chunks/index.js";
import { p as page } from "../../../chunks/stores.js";
import { B as Button } from "../../../chunks/Button.js";
const app = "";
const Newsletter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"text-white w-full md:w-1/2 lg:w-1/4 px-4"}"><h5 class="${"text-xl font-bold mb-5 text-white"}">Newsletter</h5>
	<form name="${"newsletter"}" method="${"POST"}" action="${"/"}" data-netlify="${"true"}">${`<div class="${"flex items-center pl-3 pr-2 py-2 bg-white"}"><input class="${"xl:w-4/6 px-2 inline-block bg-transparent text-base outline-none text-black"}" type="${"email"}" name="${"email"}" placeholder="${"Deine E-Mail-Adresse"}" required>
				<button type="${"submit"}" class="${"ml-auto inline-block px-3 py-2 bg-black hover:bg-gray-900 font-bold transition duration-200"}">Anmelden</button></div>
            <p class="${"mt-2 text-xs"}">Mit dem Klick auf &#39;Anmelden&#39; stimmst du zu, dass ich deine Informationen im Rahmen meiner
                Datenschutzerkl\xE4rung verarbeite.
            </p>`}</form></div>`;
});
const footerHeadingLeft = "Hilfe";
const footerHeadingRight = "Mein Angebot";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const footerMenuLeft = [
    { name: "FAQ", link: "/faq" },
    {
      name: "Stundenplan",
      link: "/stundenplan"
    },
    { name: "Preise", link: "/preise" },
    { name: "Kontakt", link: "/contact" }
  ];
  const footerMenuRight = [
    { name: "Yoga", link: "/yoga" },
    { name: "Meditation", link: "/meditation" },
    {
      name: "Healing Arts",
      link: "/healing-arts"
    },
    {
      name: "Retreats & Events",
      link: "/retreats-events"
    }
  ];
  return `<section class="${"bg-black"}"><div class="${"container px-4 mx-auto"}"><div class="${"pt-24 pb-16"}"><div class="${"flex flex-wrap -mx-4 justify-between"}"><div class="${"w-full md:w-1/2 lg:w-1/4 px-4 mb-10 lg:mb-0 text-center"}"><a class="${"inline-block mb-6 invert m-auto"}" href="${"#"}"><img src="${"/logo/logo-image.png"}" alt="${""}" width="${"87"}"></a>
					<p class="${"leading-8 mb-6 text-white"}">We&#39;re all just walking each other home.</p>
					<div class="${"flex items-center"}"><a class="${"inline-block mr-4 invert"}" href="${"https://www.instagram.com/beyondmorrow_yoga/"}"><img src="${"/icons/instagram.svg"}" alt="${""}"></a>
						<a class="${"inline-block invert"}" href="${"https://www.facebook.com/beyondmorrow"}"><img src="${"/icons/facebook.svg"}" alt="${""}"></a></div></div>
				<div class="${"w-full md:w-1/2 lg:w-auto px-4 mb-10 lg:mb-0"}"><h5 class="${"text-xl font-bold mb-5 text-white"}">${escape(footerHeadingLeft)}</h5>
					<ul>${each(footerMenuLeft, (menuItem) => {
    return `<li class="${"mb-2"}"><a class="${"inline-block text-white hover:text-gray-200"}"${add_attribute("href", menuItem.link, 0)}>${escape(menuItem.name)}</a>
							</li>`;
  })}</ul></div>
				<div class="${"w-full md:w-1/2 lg:w-auto px-4 mb-10 lg:mb-0"}"><h5 class="${"text-xl font-bold mb-5 text-white"}">${escape(footerHeadingRight)}</h5>
					<ul>${each(footerMenuRight, (menuItem) => {
    return `<li class="${"mb-2"}"><a class="${"inline-block text-white hover:text-gray-200"}"${add_attribute("href", menuItem.link, 0)}>${escape(menuItem.name)}</a>
							</li>`;
  })}</ul></div>
				${validate_component(Newsletter, "Newsletter").$$render($$result, {}, {}, {})}</div></div></div>
	<div class="${"bg-gray-900"}"><div class="${"container px-4 mx-auto"}"><div class="${"py-5 text-center"}"><p class="${"text-gray-300"}">\xA9 Kerstin Kaufmann, Beyondmorrow e.U. 2022 All rights reserved.</p></div></div></div></section>`;
});
const Navigation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const navEntries = [
    { name: "\xDCber mich", link: "/about" },
    { name: "Yoga", link: "/yoga" },
    { name: "Meditation", link: "/meditation" },
    {
      name: "Healing Arts",
      link: "/healing-arts"
    },
    {
      name: "Retreats & Events",
      link: "/retreats-events"
    },
    { name: "Kontakt", link: "/contact" }
  ];
  $$unsubscribe_page();
  return `<section><nav class="${"py-10"}" data-config-="${""}"><div class="${"container px-4 mx-auto"}"><div class="${"flex items-center justify-between relative"}"><a class="${"inline-block"}" href="${"/"}"><img src="${"/logo/logo-text.png"}" alt="${"logo"}" class="${"w-40 sm:w-72"}"></a>
				<button class="${"lg:hidden navbar-burger"}"><img src="${"/icons/nav-burger.svg"}" alt="${"Men\xFC"}" class="${"w-7"}"></button>
				<div class="${"hidden lg:block ml-auto mr-14"}"><ul class="${"inline-flex"}">${each(navEntries, (entry) => {
    return `<li class="${"mr-8"}"><a class="${[
      "inline-block hover:text-gray-900 text-lg",
      $page.url.pathname === entry.link ? "text-beyondgrey" : ""
    ].join(" ").trim()}"${add_attribute("href", entry.link, 0)}>${escape(entry.name)}</a>
							</li>`;
  })}</ul></div>
				<div class="${"hidden lg:block"}">${validate_component(Button, "Button").$$render($$result, {}, {}, {})}</div></div></div></nav>

	
	${``}</section>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main>${validate_component(Navigation, "Navigation").$$render($$result, {}, {}, {})}
	${slots.default ? slots.default({}) : ``}
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Layout as default
};
