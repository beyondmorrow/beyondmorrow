import { S as StoryblokComponent, s as storyblokInit, u as useStoryblokApi } from "../../../chunks/index2.js";
import { c as create_ssr_component, e as escape, d as each, v as validate_component, f as add_attribute, b as subscribe } from "../../../chunks/index.js";
import { renderRichText, apiPlugin } from "@storyblok/js";
import { B as Button } from "../../../chunks/Button.js";
import { p as page } from "../../../chunks/stores.js";
const PUBLIC_STORYBLOK_TOKEN = "PlNc8KjM2Fs1Ne9po6F1uAtt";
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blok } = $$props;
  if ($$props.blok === void 0 && $$bindings.blok && blok !== void 0)
    $$bindings.blok(blok);
  return `<div class="${"w-full pt-20 pb-5 text-center"}"><div class="${"max-w-2xl mx-auto mb-16"}">${blok.size === "h1" ? `<h1 class="${"font-spectral text-5xl text-beyondpurple-900"}">${escape(blok.heading)}</h1>` : `${blok.size === "h2" ? `<h2 class="${"font-spectral text-3xl text-beyondpurple-900"}">${escape(blok.heading)}</h2>` : `${blok.size === "h3" ? `<h3 class="${"font-spectral text-xl text-beyondpurple-900"}">${escape(blok.heading)}</h3>` : ``}`}`}
		${blok.subheading ? `<p class="${"font-spectral italic text-2xl mt-3"}">${escape(blok.subheading)}</p>` : ``}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blok } = $$props;
  if ($$props.blok === void 0 && $$bindings.blok && blok !== void 0)
    $$bindings.blok(blok);
  return `<div class="${"px-6 container mx-auto"}">${each(blok.body, (blok2) => {
    return `${validate_component(StoryblokComponent, "StoryblokComponent").$$render($$result, { blok: blok2 }, {}, {})}`;
  })}</div>`;
});
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blok } = $$props;
  if ($$props.blok === void 0 && $$bindings.blok && blok !== void 0)
    $$bindings.blok(blok);
  return `<div class="${"w- p-12 rounded-[5px] text-center"}"><img class="${"block " + escape(blok.Width, true) + " mb-12 mx-auto"}"${add_attribute("src", blok.Image.filename, 0)}${add_attribute("alt", blok.Image.alt, 0)}></div>`;
});
const Quote = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex mb-6 bg-indigo-100 relative"}"><div class="${"absolute top-0 left-0 px-1 h-full bg-indigo-200"}"></div>
    <div class="${"pl-14 py-10 pr-10"}" contenteditable="${"false"}"><h2 class="${"text-4xl font-heading"}" contenteditable="${"false"}">\u201COn the other hand, perfection can also haunt some of us to the point of inaction.\u201D</h2></div></div>
  <p class="${"text-sm mb-6"}"><span>Danny Bailey, CEO &amp; Founder at</span>
    <a class="${"text-indigo-500 hover:text-indigo-600 underline hover:no-underline"}" href="${"#"}">Pstls</a></p>`;
});
function generateTextForAlternatives(alternative) {
  switch (alternative) {
    case "yoga":
      return "Yoga";
    case "meditation":
      return "Meditation";
    case "healing-arts":
      return "Healing Arts";
  }
}
const Offers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blok } = $$props;
  blok.size = "h1";
  if ($$props.blok === void 0 && $$bindings.blok && blok !== void 0)
    $$bindings.blok(blok);
  return `<div><section class="${"bg-beyondrose-100 pb-20"}"><div class="${"container px-4 mx-auto"}">${validate_component(Heading, "Heading").$$render($$result, { blok }, {}, {})}
			<div class="${"flex flex-wrap -mx-4 -mb-8 pl-5 pr-5"}">${each(blok.offers, (offer) => {
    return `<div class="${"w-full lg:w-1/2 px-4 mb-8"}"><a href="${"#" + escape(offer.link.anchor, true)}"><div class="${"py-12 px-6 lg:p-20 bg-white"}"><img class="${"mb-6"}"${add_attribute("src", offer.image.filename, 0)}${add_attribute("alt", offer.image.alt, 0)}>
								<h2 class="${"break-words text-3xl font-spectral font-semibold italic font-heading mb-4"}">${escape(offer.heading)}</h2>
								<div class="${"leading-8"}">${escape(offer.subheading)}
									<br>
									<p class="${"underline"}">Mehr erfahren</p></div>
							</div></a>
					</div>`;
  })}</div></div></section>

	<section class="${"container mx-auto text-center mt-16"}"><p class="${"font-spectral italic text-3xl"}">Lust auf etwas anderes? Entdecke <a class="${"font-bold"}" href="${"/" + escape(blok.alternatives[0], true)}">${escape(generateTextForAlternatives(blok.alternatives[0]))}</a>
			und
			<a class="${"font-bold"}"${add_attribute("href", blok.alternatives[1], 0)}>${escape(generateTextForAlternatives(blok.alternatives[1]))}</a>.
		</p></section></div>`;
});
const DetailedOffers = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blok } = $$props;
  let offerCount = 0;
  function countAndChangeTemplate() {
    offerCount++;
    return offerCount % 2 === 0;
  }
  if ($$props.blok === void 0 && $$bindings.blok && blok !== void 0)
    $$bindings.blok(blok);
  return `<div>${each(blok.detailedOffers, (offer) => {
    return `<section${add_attribute("id", offer.anchor, 0)} class="${"py-24"}"><div class="${"container px-4 mx-auto max-w-6xl"}"><div class="${"flex flex-wrap items-center"}">${countAndChangeTemplate() ? `<div class="${"w-full lg:w-2/3 px-4 mb-16 lg:mb-0"}"><div class="${"text-left"}"><h2 class="${"font-spectral text-4xl lg:text-5xl font-heading mb-9 text-beyondpurple-900"}">${escape(offer.heading)}</h2>
								<p class="${"leading-8 mb-14"}">${escape(offer.text)}</p>
								<h3 class="${"font-spectral italic text-2xl"}">${escape(offer.secondHeading)}</h3>
								<ul class="${"leading-8 list-disc pl-6"}">${each(offer.bulletPoints, (bulletPoint) => {
      return `<li>${escape(bulletPoint.text)}</li>`;
    })}</ul>
							</div></div>
						<div class="${"w-full lg:w-1/3 px-4"}"><div class="${"relative"}"><img class="${"block w-full relative"}"${add_attribute("src", offer.image.filename, 0)}${add_attribute("alt", offer.image.alt, 0)}></div>
						</div>` : `<div class="${"w-full lg:w-1/3 px-4"}"><div class="${"relative"}"><img class="${"block w-full relative"}"${add_attribute("src", offer.image.filename, 0)}${add_attribute("alt", offer.image.alt, 0)}>
							</div></div>
						<div class="${"w-full lg:w-2/3 px-4 mb-16 lg:mb-0"}"><div class="${"text-left"}"><h2 class="${"font-spectral text-4xl lg:text-5xl font-heading mb-9 text-beyondpurple-900"}">${escape(offer.heading)}</h2>
								<p class="${"leading-8 mb-14"}">${escape(offer.text)}</p>
								<h3 class="${"font-spectral italic text-2xl"}">${escape(offer.secondHeading)}</h3>
								<ul class="${"leading-8 list-disc pl-6"}">${each(offer.bulletPoints, (bulletPoint) => {
      return `<li>${escape(bulletPoint.text)}</li>`;
    })}
								</ul></div>
						</div>`}</div>
				<div class="${"mt-5 text-center"}">${validate_component(Button, "Button").$$render(
      $$result,
      {
        link: "/" + offer.callToActionLink.cached_url,
        text: offer.callToAction
      },
      {},
      {}
    )}
					<a class="${"ml-3 underline"}" href="${"/preise"}">Zu den Preisen</a>
				</div></div>
		</section>`;
  })}</div>`;
});
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blok } = $$props;
  blok.size = "h1";
  let expandedAnswers = [];
  function isAnswerExpanded(uid) {
    if (expandedAnswers.includes(uid)) {
      return true;
    }
    return false;
  }
  if ($$props.blok === void 0 && $$bindings.blok && blok !== void 0)
    $$bindings.blok(blok);
  return `<div><section><div class="${"container px-4 mx-auto"}"><div class="${"max-w-xl mx-auto mb-20 text-center"}">${validate_component(Heading, "Heading").$$render($$result, { blok }, {}, {})}</div>
			${each(blok.faqs, (question) => {
    return `<div class="${"px-6 md:px-12 pt-8 pb-2 bg-beyondrose-100 mb-5"}"><div class="${"flex -mx-4"}"><div class="${"w-3/4 lg:w-5/6 px-4"}"><h5 class="${"mb-6 text-xl font-spectral font-bold italic"}">${escape(question.question)}</h5>
								${isAnswerExpanded(question._uid) ? `<p class="${"leading-8 text-gray-800 text-lg pb-5"}">${escape(question.answer)}
									</p>` : ``}</div>
							<div class="${"flex-shrink-0 w-1/4 lg:w-1/6 px-4 text-right"}"><button class="${"inline-block"}">${isAnswerExpanded(question._uid) ? `<img src="${"/icons/arrow-up.svg"}" alt="${""}">` : `<img src="${"/icons/arrow-down.svg"}" alt="${""}">`}</button>
							</div></div>
					</div>`;
  })}
			<div class="${"bg-beyondrose-100"}"><div class="${"p-12 md:p-20"}"><div class="${"flex flex-wrap -mx-4"}"><div class="${"w-full font-spectral lg:w-4/6 px-4 mb-6 lg:mb-0 text-center lg:text-left"}"><h2 class="${"text-beyondpurple-800 text-3xl font-heading mb-2"}">${escape(blok.secondHeading)}</h2>
							<p class="${"italic"}">${escape(blok.secondSubheading)}</p></div>
						<div class="${"w-full lg:w-2/6 px-4 text-center lg:text-right"}">${validate_component(Button, "Button").$$render(
    $$result,
    {
      link: "/" + blok.buttonLink.cached_url,
      text: blok.buttonText
    },
    {},
    {}
  )}</div></div></div></div></div></section></div>`;
});
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { blok } = $$props;
  const answerHTML = renderRichText(blok.answer);
  const successfulContactForm = $page.url.searchParams.has("successful");
  if ($$props.blok === void 0 && $$bindings.blok && blok !== void 0)
    $$bindings.blok(blok);
  $$unsubscribe_page();
  return `<section class="${"relative mb-16"}"><div class="${"container px-4 mx-auto"}"><div class="${"flex flex-wrap -mx-4"}"><div class="${"w-full lg:w-1/2 px-4 lg:pl-24 relative"}"><div class="${"py-2 max-w-md xl:max-w-lg mx-auto relative"}"><p class="${"text-beyondpurple-900 font-spectral font-semibold italic"}">${escape(blok.question)}</p>
					<!-- HTML_TAG_START -->${answerHTML}<!-- HTML_TAG_END -->
					<div class="${"mt-16 flex flex-wrap -mx-4"}"><div class="${"w-full lg:w-1/2 px-4 mb-10"}"><p class="${"text-gray-500"}">E-Mail</p>
							<a class="${"inline-block text-black hover:underline"}" href="${"mailto:" + escape(blok.email, true)}">${escape(blok.email)}</a></div>
						<div class="${"w-full lg:w-1/2 px-4 mb-10"}"><p class="${"text-gray-500"}">Telefon</p>
							<a href="${"tel:" + escape(blok.phone, true)}">${escape(blok.phone)}</a></div></div>
					<div class="${"flex flex-wrap -mx-4"}"><div class="${"w-full lg:w-1/2 px-4 mb-10"}"><p class="${"text-gray-500 mb-2"}">Social Media</p>
							<a class="${"inline-block"}" target="${"blank"}" href="${"https://www.facebook.com/beyondmorrow"}"><img src="${"/icons/facebook.svg"}" alt="${""}"></a>
							<a class="${"inline-block"}" target="${"blank"}" href="${"https://www.instagram.com/beyondmorrow_yoga/"}"><img src="${"/icons/instagram.svg"}" alt="${""}"></a></div>
						<div class="${"w-full lg:w-1/2 px-4"}"><p class="${"text-gray-500"}">Yoga Studio</p>
							<p>${escape(blok.address)}</p></div></div></div></div>
			<div class="${"w-full lg:w-1/2 px-4"}"><div class="${"max-w-md mx-auto py-2"}">${successfulContactForm ? `<div class="${"p-14 text-center"}"><img class="${"m-auto mb-5"}" src="${"/icons/heart.svg"}" alt="${"heart"}">
							<p>${escape(blok.successMessage)}</p></div>` : `<form name="${"contact"}" method="${"POST"}" netlify action="${"/contact?successful"}"><input required name="${"name"}" class="${"block w-full py-2 px-4 mb-6 text-lg border-b border-gray-400 placeholder-beyondgrey outline-none"}" type="${"text"}" placeholder="${"Vorname"}">
							<input required name="${"surname"}" class="${"block w-full py-2 px-4 mb-6 text-lg border-b border-gray-400 placeholder-beyondgrey outline-none"}" type="${"text"}" placeholder="${"Nachname"}">
							<input required name="${"email"}" class="${"block w-full py-2 px-4 mb-6 text-lg border-b border-gray-400 placeholder-beyondgrey outline-none"}" type="${"email"}" placeholder="${"E-Mail-Adresse"}">
							<textarea required name="${"message"}" class="${"block w-full py-2 px-4 mb-6 text-lg border-b border-gray-400 placeholder-beyondgrey outline-none resize-none"}" cols="${"30"}" rows="${"10"}" placeholder="${"Deine Nachricht"}"></textarea>
							<button type="${"submit"}" class="${"rounded-sm drop-shadow-md inline-block w-full md:w-auto py-3 px-8 text-center text-white font-bold bg-beyondpurple-900 hover:bg-beyondpurple-800 transition duration-200"}">Absenden
							</button></form>`}</div></div></div></div></section>`;
});
storyblokInit({
  accessToken: PUBLIC_STORYBLOK_TOKEN,
  use: [apiPlugin],
  components: {
    heading: Heading,
    page: Page,
    image: Image,
    quote: Quote,
    offers: Offers,
    detailedOffers: DetailedOffers,
    faq: Faq,
    contactForm: ContactForm
  }
});
async function load({ params }) {
  const storyblokApi = useStoryblokApi();
  let slug = params.slug;
  let path = "cdn/stories/";
  if (slug) {
    path += slug;
  } else {
    path += "home";
  }
  const { data } = await storyblokApi.get(path, {
    version: "published"
  });
  return {
    story: data.story
  };
}
export {
  load
};
