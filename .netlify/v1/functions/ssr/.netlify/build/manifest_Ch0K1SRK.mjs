import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_B65VCn2I.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/sid/personal/portfolio_v2/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/index.DtLaoTin.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/sid/personal/portfolio_v2/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Ch0K1SRK.mjs","@astrojs/react/client.js":"_astro/client.AZ5pWStA.js","/home/sid/personal/portfolio_v2/node_modules/@vidstack/react/prod/chunks/vidstack-R_ot4AhB.js":"_astro/vidstack-R_ot4AhB.CxSekXJ1.js","/home/sid/personal/portfolio_v2/node_modules/@vidstack/react/prod/chunks/vidstack-BN7_0WI-.js":"_astro/vidstack-BN7_0WI-.CLuRBx06.js","/home/sid/personal/portfolio_v2/node_modules/@vidstack/react/prod/chunks/vidstack-BqgQkvb4.js":"_astro/vidstack-BqgQkvb4.CyMQlyrU.js","/home/sid/personal/portfolio_v2/node_modules/@vidstack/react/prod/chunks/vidstack-krOAtKMi.js":"_astro/vidstack-krOAtKMi.2f5gzOW6.js","/home/sid/personal/portfolio_v2/node_modules/@vidstack/react/prod/chunks/vidstack-DHmfHold.js":"_astro/vidstack-DHmfHold.j5V25tio.js","/home/sid/personal/portfolio_v2/node_modules/@vidstack/react/prod/chunks/vidstack-Dm1xEU9Q.js":"_astro/vidstack-Dm1xEU9Q.DDN5V1NO.js","/home/sid/personal/portfolio_v2/node_modules/@vidstack/react/prod/chunks/vidstack-CQQ1xKSy.js":"_astro/vidstack-CQQ1xKSy.BU-EQC9k.js","/home/sid/personal/portfolio_v2/node_modules/@vidstack/react/node_modules/media-captions/dist/prod/srt-parser.js":"_astro/srt-parser.BG-nSFMA.js","/home/sid/personal/portfolio_v2/node_modules/@vidstack/react/node_modules/media-captions/dist/prod/ssa-parser.js":"_astro/ssa-parser.CS9EZnMi.js","/home/sid/personal/portfolio_v2/node_modules/@vidstack/react/node_modules/media-captions/dist/prod/errors.js":"_astro/errors.DMxJHuBC.js","/home/sid/personal/portfolio_v2/node_modules/@vidstack/react/prod/chunks/vidstack-BeT6vBOi.js":"_astro/vidstack-BeT6vBOi.Bgr5PQFd.js","/home/sid/personal/portfolio_v2/src/components/video-player.tsx":"_astro/video-player.EsiNNwO4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/index.DtLaoTin.css","/favicon.png","/favicon.svg","/_astro/client.AZ5pWStA.js","/_astro/errors.DMxJHuBC.js","/_astro/index.DaVVpCaC.css","/_astro/index.ppAWL3zK.js","/_astro/prod.Bk-9bjjk.js","/_astro/srt-parser.BG-nSFMA.js","/_astro/ssa-parser.CS9EZnMi.js","/_astro/video-player.BSCkM8je.js","/_astro/video-player.EsiNNwO4.js","/_astro/vidstack-BN7_0WI-.CLuRBx06.js","/_astro/vidstack-BeT6vBOi.Bgr5PQFd.js","/_astro/vidstack-BqgQkvb4.CyMQlyrU.js","/_astro/vidstack-CQQ1xKSy.BU-EQC9k.js","/_astro/vidstack-DHmfHold.j5V25tio.js","/_astro/vidstack-Dm1xEU9Q.DDN5V1NO.js","/_astro/vidstack-FldwQc2Q.BQTL1wjP.js","/_astro/vidstack-R_ot4AhB.CxSekXJ1.js","/_astro/vidstack-krOAtKMi.2f5gzOW6.js","/assets/dotted.svg","/assets/pngwing.com.png","/fonts/InstrumentSerif-Regular.ttf","/fonts/JetBrainsMono-Italic[wght].ttf","/fonts/JetBrainsMono[wght].ttf","/fonts/Satoshi-Bold.ttf","/fonts/Satoshi-Medium.ttf","/fonts/Satoshi-Variable.woff2","/images/image-1.png","/images/image-2.png","/images/image-3.png","/images/image-4.png","/images/image-5.jpg","/images/image-6.jpg","/images/image-7.webp","/images/image-8.webp"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"td8NQ+pGf/RL3dR1b7bG6LWXZumxE5m2AS3ZbPnVfD8=","experimentalEnvGetSecretEnabled":false});

export { manifest };
