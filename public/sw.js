if (!self.define) {
  let e,
    s = {};
  const a = (a, n) => (
    (a = new URL(a + ".js", n).href),
    s[a] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, c) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let t = {};
    const r = (e) => a(e, i),
      f = { module: { uri: i }, exports: t, require: r };
    s[i] = Promise.all(n.map((e) => f[e] || r(e))).then((e) => (c(...e), t));
  };
}
define(["./workbox-588899ac"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/8bS4U4jA4hn6PsQjkny2o/_buildManifest.js",
          revision: "6ef9b80c3463fdfcd2af0f4c1e2f890f",
        },
        {
          url: "/_next/static/8bS4U4jA4hn6PsQjkny2o/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/606-67b37a427bc0ea63.js",
          revision: "67b37a427bc0ea63",
        },
        {
          url: "/_next/static/chunks/857-b47e4468e46433a5.js",
          revision: "b47e4468e46433a5",
        },
        {
          url: "/_next/static/chunks/9-22e803a709e5c106.js",
          revision: "22e803a709e5c106",
        },
        {
          url: "/_next/static/chunks/ee8b1517-f3aa26d8ab772f1d.js",
          revision: "f3aa26d8ab772f1d",
        },
        {
          url: "/_next/static/chunks/framework-114634acb84f8baa.js",
          revision: "114634acb84f8baa",
        },
        {
          url: "/_next/static/chunks/main-1172270af657421f.js",
          revision: "1172270af657421f",
        },
        {
          url: "/_next/static/chunks/pages/404-b9ad6f1e973f4e56.js",
          revision: "b9ad6f1e973f4e56",
        },
        {
          url: "/_next/static/chunks/pages/_app-5d5ee4ec2862f3b6.js",
          revision: "5d5ee4ec2862f3b6",
        },
        {
          url: "/_next/static/chunks/pages/_error-8353112a01355ec2.js",
          revision: "8353112a01355ec2",
        },
        {
          url: "/_next/static/chunks/pages/dolar-australiano-09ac9ea041ae2d59.js",
          revision: "09ac9ea041ae2d59",
        },
        {
          url: "/_next/static/chunks/pages/dolar-canadense-ee75d5a8e902c976.js",
          revision: "ee75d5a8e902c976",
        },
        {
          url: "/_next/static/chunks/pages/dolar-hongkong-31aea6ff3fe197f1.js",
          revision: "31aea6ff3fe197f1",
        },
        {
          url: "/_next/static/chunks/pages/dolar-taiwanes-8692c741a67e0d55.js",
          revision: "8692c741a67e0d55",
        },
        {
          url: "/_next/static/chunks/pages/euro-7370e7cb175913f4.js",
          revision: "7370e7cb175913f4",
        },
        {
          url: "/_next/static/chunks/pages/franco-suico-2d6b581704ea70bd.js",
          revision: "2d6b581704ea70bd",
        },
        {
          url: "/_next/static/chunks/pages/iene-japones-6e8d9f91837f6a4d.js",
          revision: "6e8d9f91837f6a4d",
        },
        {
          url: "/_next/static/chunks/pages/index-71102d4f6f60a08c.js",
          revision: "71102d4f6f60a08c",
        },
        {
          url: "/_next/static/chunks/pages/libra-1159b2a1cbf1b8f5.js",
          revision: "1159b2a1cbf1b8f5",
        },
        {
          url: "/_next/static/chunks/pages/peso-argentino-b814f4fff102c758.js",
          revision: "b814f4fff102c758",
        },
        {
          url: "/_next/static/chunks/pages/peso-mexicano-1eb8750dcb23c841.js",
          revision: "1eb8750dcb23c841",
        },
        {
          url: "/_next/static/chunks/pages/politicas-665df7d959e5f6a0.js",
          revision: "665df7d959e5f6a0",
        },
        {
          url: "/_next/static/chunks/pages/rublo-russo-da44218d1ca13e10.js",
          revision: "da44218d1ca13e10",
        },
        {
          url: "/_next/static/chunks/pages/sobre-160a65b3da7cdeb7.js",
          revision: "160a65b3da7cdeb7",
        },
        {
          url: "/_next/static/chunks/pages/termos-9b50ed0c8ebd2dbd.js",
          revision: "9b50ed0c8ebd2dbd",
        },
        {
          url: "/_next/static/chunks/pages/yuan-chines-c998ce748e5cba67.js",
          revision: "c998ce748e5cba67",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-ee7e63bc15b31913.js",
          revision: "ee7e63bc15b31913",
        },
        {
          url: "/_next/static/css/2619a095402cb7e6.css",
          revision: "2619a095402cb7e6",
        },
        {
          url: "/_next/static/css/3f4cef345f51937b.css",
          revision: "3f4cef345f51937b",
        },
        {
          url: "/favicon-32x32.png",
          revision: "03530180bcb102ab6e33ffffa99074e8",
        },
        { url: "/flags/ar.svg", revision: "f150864294964a34430648efbd001982" },
        { url: "/flags/au.svg", revision: "0af6624d4b0ca5e2348e094d3fe0a4bb" },
        { url: "/flags/br.svg", revision: "155348d0d5ca941fc05473797fa203b8" },
        { url: "/flags/ca.svg", revision: "f3277db42e8a0498c5f23b58c4d681fe" },
        { url: "/flags/ch.svg", revision: "269ddab4d19b9c60a6459c09ddfd48c9" },
        { url: "/flags/cn.svg", revision: "01b1e16506941b544ede62b2d65fdbad" },
        { url: "/flags/eu.svg", revision: "510ca6da0d406bf2e66dce7733deff41" },
        { url: "/flags/gb.svg", revision: "fcfef6780b36bef537381474df9d0be9" },
        { url: "/flags/hk.svg", revision: "c1b9d3ff90e0b148a8d61ab9ef5f682c" },
        { url: "/flags/jp.svg", revision: "1dbf51e247c6c40000c51a1070515fe9" },
        { url: "/flags/mx.svg", revision: "d326007cf87dba95a56cb4a25b408558" },
        { url: "/flags/ru.svg", revision: "ab61f31edf4ad95b5ae00aff3be99197" },
        { url: "/flags/tw.svg", revision: "ecdb8344f97cbe2640def79cb5715b7a" },
        { url: "/flags/us.svg", revision: "bfaaeb1ca82bf9541f20aa098f3e7cf2" },
        {
          url: "/icone-midia.png",
          revision: "da3601526cdb681297cb98e2b0552216",
        },
        { url: "/icone.svg", revision: "ccb4d6d2e0c7a5007fa3acaa020ac7a5" },
        {
          url: "/icons/icon-192x192.png",
          revision: "85174e6fb1a1137785c9cc58e96c39b0",
        },
        {
          url: "/icons/icon-256x256.png",
          revision: "df1e2ca1812ae375bff0e24dcc36ecf0",
        },
        {
          url: "/icons/icon-384x384.png",
          revision: "3a3a33e0c66093ce32ba266561505793",
        },
        {
          url: "/icons/icon-512x512.png",
          revision: "0de9c4ff87dbc0263c0a2202ef8aaaa0",
        },
        { url: "/manifest.json", revision: "3f66e5c7af48139442769ffd24447038" },
        { url: "/robots.txt", revision: "9a02c65f0af8835850ae941207fa758f" },
        {
          url: "/screenshots/Captura de tela de 2023-04-30 15-15-45.png",
          revision: "be8f6cc6c7eb454976c827ab428eb39e",
        },
        { url: "/sitemap.xml", revision: "ea4eaabceabe11375d3d8173bbc19409" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: a,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
