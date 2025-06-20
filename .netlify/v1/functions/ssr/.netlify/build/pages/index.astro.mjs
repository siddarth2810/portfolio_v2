/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, d as renderSlot, r as renderTemplate, b as addAttribute, e as renderComponent, f as renderHead } from '../chunks/astro/server_B65VCn2I.mjs';
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
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> ${label && renderTemplate`<div class="-mb-1 flex flex-col space-y-1.5 p-6 py-0"> <h3 class="text-base font-normal leading-none tracking-tight"> <span class="relative z-10 -mx-2 bg-white px-2"> ${label} </span> </h3> </div>`} <div class="about-me-box relative p-3 md:p-6 "> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/home/sid/personal/portfolio_v2/src/components/ui/shaded-box.astro", void 0);

const $$Astro$2 = createAstro();
const $$Box = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Box;
  const { label } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col"> ${label && renderTemplate`<div class="-mb-1 flex flex-col space-y-1.5 p-6 py-0"> <h3 class="text-base font-normal leading-none tracking-tight"> <span class="font-bold label-heading-box relative z-10 -mx-2 px-2"> ${label} </span> </h3> </div>`} <div class="label-box-fill relative p-3 md:p-6"> ${renderSlot($$result, $$slots["default"])} </div> </div>`;
}, "/home/sid/personal/portfolio_v2/src/components/ui/box.astro", void 0);

const $$Astro$1 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Link;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} target="_blank">${renderSlot($$result, $$slots["default"])}</a>`;
}, "/home/sid/personal/portfolio_v2/src/components/ui/link.astro", void 0);

const $$AboutMe = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <p class="font-bold text-lg">Siddarth Gundu</p> <span> ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810" }, { "default": ($$result2) => renderTemplate`GitHub` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://x.com/Siddarth_0910" }, { "default": ($$result2) => renderTemplate`Twitter` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://www.linkedin.com/in/siddarth2810" }, { "default": ($$result2) => renderTemplate`LinkedIn` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://drive.google.com/file/d/1kPI5UyNzn2rmwXqVJryC27CKo0obgcs9/view?usp=sharing" }, { "default": ($$result2) => renderTemplate`Resume` })} </span> <p class="pt-4">
Hi there! I'm a software developer from Hyderabad, India. I spend a significant amount of time coding and playing with computers.<br> <br>
I enjoy attending tech conferences and geeking out on tech in general.
</p> <div class="pt-4 flex flex-col gap-2 text-sm"> <div>
I write tech blogs at <span> ${renderComponent($$result, "Link", $$Link, { "href": "https://dev.to/siddarth2810/" }, { "default": ($$result2) => renderTemplate`Dev.to` })} </span> </div> </div> </div>`;
}, "/home/sid/personal/portfolio_v2/src/components/about-me.astro", void 0);

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
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-6"> <div class="flex flex-col gap-2"> <p> ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810/AskMyDoc_v2" }, { "default": ($$result2) => renderTemplate`AskMyDoc` })} </p> <p class="text-sm">
A full-stack AI-driven PDF QA assistant that interprets user queries and retrieves contextually relevant
answers
</p> <p class="text-muted text-sm">
Tech used: LangChain, FAISS, Next.js, FAST API, Gen AI.
</p> <p class="text-muted text-sm">
Links: ${renderComponent($$result, "Link", $$Link, { "href": "https://youtu.be/2bEsCRoJWOI?si=uVRSxyemsxSgAnMe" }, { "default": ($$result2) => renderTemplate`Video` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810/AskMyDoc_v2" }, { "default": ($$result2) => renderTemplate`GitHub` })} </p><div> ${renderComponent($$result, "VideoPlayer", VideoPlayer, { "title": "blast-box", "src": "https://youtu.be/2bEsCRoJWOI?si=uVRSxyemsxSgAnMe", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/sid/personal/portfolio_v2/src/components/video-player.tsx", "client:component-export": "default" })} </div>  </div> <div class="flex flex-col gap-2"> <p> ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810/blast-box" }, { "default": ($$result2) => renderTemplate`Blast-Box` })} </p> <p class="text-sm">
A real-time multiplayer shooting game inspired from the game diep.io.
</p> <p class="text-muted text-sm">
Tech used: uWebSockets, p5.js, azure
</p> <p class="text-muted text-sm">
Links: ${renderComponent($$result, "Link", $$Link, { "href": "https://www.youtube.com/watch?v=pZu6XvT-ILk" }, { "default": ($$result2) => renderTemplate`Video` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810/blast-box" }, { "default": ($$result2) => renderTemplate`GitHub` })} </p><div> ${renderComponent($$result, "VideoPlayer", VideoPlayer, { "title": "blast-box", "src": "https://www.youtube.com/watch?v=pZu6XvT-ILk", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/sid/personal/portfolio_v2/src/components/video-player.tsx", "client:component-export": "default" })} </div>  </div> <div class="flex flex-col gap-2"> <p> ${renderComponent($$result, "Link", $$Link, { "href": "https://devfolio.co/projects/yaash-yet-another-ai-shell-192b" }, { "default": ($$result2) => renderTemplate`NAASH (Not another AI shell)` })} </p> <p class="text-sm">
An AI powered shell to make your terminal workflow even faster.
</p> <p class="text-sm">
Participated as a team and won ${renderComponent($$result, "Link", $$Link, { "href": "https://devfolio.co/projects/yaash-yet-another-ai-shell-192b" }, { "default": ($$result2) => renderTemplate`HackThisFall 2024 Virtual` })} and received a prize of $1000 USD.
</p> <p class="text-muted text-sm">Tech used: TypeScript, CLI , OpenAI API, GeminiAPI</p> <p class="text-muted text-sm">
Links: ${renderComponent($$result, "Link", $$Link, { "href": "https://www.youtube.com/watch?v=6xZ1Gxxiu1U" }, { "default": ($$result2) => renderTemplate`Video` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810/team-gap" }, { "default": ($$result2) => renderTemplate`GitHub` })} </p> <div> ${renderComponent($$result, "VideoPlayer", VideoPlayer, { "title": "NAASH", "src": "https://www.youtube.com/watch?v=6xZ1Gxxiu1U", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/sid/personal/portfolio_v2/src/components/video-player.tsx", "client:component-export": "default" })} </div> </div> <div class="flex flex-col gap-2"> <p> ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810/SnippetsSafe" }, { "default": ($$result2) => renderTemplate`Snippets Safe` })} </p> <p class="text-sm">
Easy tool designed to efficient store and organize code snippets
</p> <p class="text-sm">
Participated as a team and won ${renderComponent($$result, "Link", $$Link, { "href": "https://frosthacks.devpost.com/" }, { "default": ($$result2) => renderTemplate`Frost Hacks 2024 In-Person Hackathon` })} and received a prize of 12,000 INR.
</p> <p class="text-muted text-sm">
Tech used: react, mongodb, hugging face
</p> <p class="text-muted text-sm">
Links: ${renderComponent($$result, "Link", $$Link, { "href": "https://youtu.be/dL4a-QIyANA?si=PqqRtYx1Mvape71M" }, { "default": ($$result2) => renderTemplate`Video` })} ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810/SnippetsSafe" }, { "default": ($$result2) => renderTemplate`GitHub` })} </p><div> ${renderComponent($$result, "VideoPlayer", VideoPlayer, { "title": "Snippet safe", "src": "https://youtu.be/dL4a-QIyANA?si=PqqRtYx1Mvape71M", "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/sid/personal/portfolio_v2/src/components/video-player.tsx", "client:component-export": "default" })} </div>  </div> <div class="flex flex-col gap-2"> <p> ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810/rust-compiler" }, { "default": ($$result2) => renderTemplate`Compiler` })} </p> <p class="text-sm">
Compiles .teeny files into C, and then uses GCC to compile the C code into executables.
</p> <p class="text-muted text-sm">Tech used: rust, gcc, bash, linux</p> <p class="text-muted text-sm">
Links: ${renderComponent($$result, "Link", $$Link, { "href": "https://github.com/siddarth2810/rust-compiler" }, { "default": ($$result2) => renderTemplate`GitHub` })} </p> </div> </section>`;
}, "/home/sid/personal/portfolio_v2/src/components/projects.astro", void 0);

const $$Experience = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-6"> <div class="flex flex-col gap-2"> <p class="flex items-center gap-2"> ${renderComponent($$result, "Link", $$Link, { "href": "https://www.makerglobal.in/" }, { "default": ($$result2) => renderTemplate`The Linux Foundation` })} <span class="text-muted text-xs inline-block">- 2025 May, 3 months</span> </p> <p class="text-muted text-sm">Linux Kernel Mentee</p> <p class="text-sm">
Contributed patches to the mainline Linux kernel.
</p> </div> <div class="flex flex-col gap-2"> <p class="flex items-center gap-2"> ${renderComponent($$result, "Link", $$Link, { "href": "https://www.makerglobal.in/" }, { "default": ($$result2) => renderTemplate`Maker Global` })} <span class="text-muted text-xs inline-block">- 2023 Aug, 8 months</span> </p> <p class="text-muted text-sm">software development intern</p> <p class="text-sm">
Mostly worked on Front-End, writing APIs and <br>
creating responsive websites.
</p> <p class="text-sm">
Implemented  secure authentication using Bcrypt and JWT
</p> </div> </section>`;
}, "/home/sid/personal/portfolio_v2/src/components/experience.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Siddarth Gundu</title>${renderHead()}</head> <body> <main class="font-jetbrains mx-auto max-w-[800px] overflow-x-hidden px-6 py-24 md:overflow-x-visible"> <div> ${renderComponent($$result, "ShadedBox", $$ShadedBox, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "AboutMe", $$AboutMe, {})} ` })} <div class="pt-16"> ${renderComponent($$result, "Box", $$Box, { "label": "Experience" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Experience", $$Experience, {})} ` })} </div> <div class="pt-16"> ${renderComponent($$result, "Box", $$Box, { "label": "Projects" }, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Projects", $$Projects, {})}` })} </div> </div> </main> </body></html>`;
}, "/home/sid/personal/portfolio_v2/src/pages/index.astro", void 0);

const $$file = "/home/sid/personal/portfolio_v2/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
