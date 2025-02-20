/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderSlot, b as createAstro, a as addAttribute, e as renderComponent, f as renderHead } from '../chunks/astro/server_DOXUvxiN.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { PlyrLayout, plyrLayoutIcons } from '@vidstack/react/player/layouts/plyr';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$ShadedBox = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ShadedBox;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> ${label && renderTemplate`<div class="-mb-1 flex flex-col space-y-1.5 p-6 py-0"> <h3 class="text-base font-normal leading-none tracking-tight"> <span class="relative z-10 -mx-2 bg-white px-2"> ${label} </span> </h3> </div>`} <div class="about-me-box relative border-2 border-border-contrast p-3 md:p-6 "> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/home/siddarth/portfolio_v2/src/components/ui/shaded-box.astro", void 0);

const $$Astro$2 = createAstro();
const $$Box = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Box;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> ${label && renderTemplate`<div class="-mb-1 flex flex-col space-y-1.5 p-6 py-0"> <h3 class="text-base font-normal leading-none tracking-tight"> <span class="label-heading-box relative z-10 -mx-2 px-2"> ${label} </span> </h3> </div>`} <div class="label-box-fill relative border-2 border-border-contrast p-3 md:p-6"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/home/siddarth/portfolio_v2/src/components/ui/box.astro", void 0);

const $$Astro$1 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank">${renderSlot($$result, $$slots["default"])}</a>`;
}, "/home/siddarth/portfolio_v2/src/components/ui/link.astro", void 0);

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <p class="font-bold text-lg">Siddarth Gundu</p> <span> ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810" }, { "default": ($$result2) => renderTemplate`GitHub` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://x.com/Siddarth_0910" }, { "default": ($$result2) => renderTemplate`Twitter` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://www.linkedin.com/in/siddarth2810" }, { "default": ($$result2) => renderTemplate`LinkedIn` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://drive.google.com/file/d/11mnH_UQCk6lnqWUe3gSx07-pY0rmRZd4/view?usp=sharing" }, { "default": ($$result2) => renderTemplate`Resume` })} </span> <p class="pt-4">
Hi there! I'm a software developer from Hyderabad, India. I spend a significant amount of time coding and playing with computers.<br> <br>
I enjoy attending tech conferences and geeking out on tech in general.
</p> <div class="pt-4 flex flex-col gap-2 text-sm"> <div>
I contribute to Open Source in my free time: <span> ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/search?q=is%3Apr+author%3Asiddarth2810+org%3Ainternetarchive+org%3Agitpod-io+org%3ANixOS&type=pullrequests" }, { "default": ($$result2) => renderTemplate`PRs` })} </span> </div> <div>
I write tech blogs at <span> ${renderComponent($$result, "Link", $$Link, { "href": "https://dev.to/siddarth2810/" }, { "default": ($$result2) => renderTemplate`Dev.to` })} </span> </div> </div> </div>`;
}, "/home/siddarth/portfolio_v2/src/components/about-me.astro", void 0);

function VideoPlayer({
  title,
  src
}) {
  return /* @__PURE__ */ jsxs(MediaPlayer, { title, src, children: [
    /* @__PURE__ */ jsx(MediaProvider, {}),
    /* @__PURE__ */ jsx(PlyrLayout, { icons: plyrLayoutIcons })
  ] });
}

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-6"> <div class="flex flex-col gap-2"> <p> ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810/blast-box" }, { "default": ($$result2) => renderTemplate`Blast-Box` })} </p> <p class="text-sm">
A real-time multiplayer shooting game inspired from the game diep.io.
</p> <p class="text-muted text-sm">
Tech used: uWebSockets, p5.js, azure
</p> <p class="text-muted text-sm">
Links: ${renderComponent($$result, "Link", $$Link, { "href": "https://www.youtube.com/watch?v=pZu6XvT-ILk" }, { "default": ($$result2) => renderTemplate`Video` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810/blast-box" }, { "default": ($$result2) => renderTemplate`GitHub` })} </p><div> ${renderComponent($$result, "VideoPlayer", VideoPlayer, { "title": "blast-box", "src": "https://www.youtube.com/watch?v=pZu6XvT-ILk", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/siddarth/portfolio_v2/src/components/video-player.tsx", "client:component-export": "default" })} </div>  </div> <div class="flex flex-col gap-2"> <p> ${renderComponent($$result, "Link", $$Link, { "href": "https://devfolio.co/projects/yaash-yet-another-ai-shell-192b" }, { "default": ($$result2) => renderTemplate`NAASH (Not another AI shell)` })} </p> <p class="text-sm">
An AI powered shell to make your terminal workflow even faster.
</p> <p class="text-muted text-sm">Tech used: TypeScript, CLI , OpenAI API, GeminiAPI</p> <p class="text-muted text-sm">
Links: ${renderComponent($$result, "Link", $$Link, { "href": "https://www.youtube.com/watch?v=6xZ1Gxxiu1U" }, { "default": ($$result2) => renderTemplate`Video` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810/team-gap" }, { "default": ($$result2) => renderTemplate`GitHub` })} </p> <div> ${renderComponent($$result, "VideoPlayer", VideoPlayer, { "title": "NAASH", "src": "https://www.youtube.com/watch?v=6xZ1Gxxiu1U", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/siddarth/portfolio_v2/src/components/video-player.tsx", "client:component-export": "default" })} </div> </div> <div class="flex flex-col gap-2"> <p> ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810/rust-compiler" }, { "default": ($$result2) => renderTemplate`Compiler` })} </p> <p class="text-sm">
Compiles .teeny files into C, and then uses GCC to compile the C code into executables.
</p> <p class="text-muted text-sm">Tech used: rust, gcc, bash, linux</p> <p class="text-muted text-sm">
Links: ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810/rust-compiler" }, { "default": ($$result2) => renderTemplate`GitHub` })} </p> </div> </section>`;
}, "/home/siddarth/portfolio_v2/src/components/projects.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-6"> <div class="flex flex-col gap-2"> <p class="flex items-center gap-2"> ${renderComponent($$result, "Link", $$Link, { "href": "https://www.makerglobal.in/" }, { "default": ($$result2) => renderTemplate`Maker Global` })} <span class="text-muted text-xs inline-block">- 2023 Aug, 8 months</span> </p> <p class="text-muted text-sm">software intern</p> <p class="text-sm">
Mostly worked on Front-End, writing APIs and creating responsive websites.
</p> </div> </section>`;
}, "/home/siddarth/portfolio_v2/src/components/experience.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Siddarth Gundu</title>${renderHead()}</head> <body> <main class="font-jetbrains mx-auto max-w-[800px] overflow-x-hidden px-6 py-24 md:overflow-x-visible"> <div> ${renderComponent($$result, "ShadedBox", $$ShadedBox, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ` })} <div class="pt-16"> ${renderComponent($$result, "Box", $$Box, { "label": "Experience" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Experience", $$Experience, {})} ` })} </div> <div class="pt-16"> ${renderComponent($$result, "Box", $$Box, { "label": "Projects" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Projects", $$Projects, {})}` })} </div> </div> </main> </body></html>`;
}, "/home/siddarth/portfolio_v2/src/pages/index.astro", void 0);

const $$file = "/home/siddarth/portfolio_v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
