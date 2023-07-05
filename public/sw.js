if (!self.define) {
  let e,
    s = {};
  const a = (a, c) => (
    (a = new URL(a + '.js', c).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script');
          (e.src = a), (e.onload = s), document.head.appendChild(e);
        } else (e = a), importScripts(a), s();
      }).then(() => {
        let e = s[a];
        if (!e) throw new Error(`Module ${a} didn’t register its module`);
        return e;
      })
  );
  self.define = (c, n) => {
    const i = e || ('document' in self ? document.currentScript.src : '') || location.href;
    if (s[i]) return;
    let t = {};
    const r = (e) => a(e, i),
      f = { module: { uri: i }, exports: t, require: r };
    s[i] = Promise.all(c.map((e) => f[e] || r(e))).then((e) => (n(...e), t));
  };
}
define(['./workbox-588899ac'], function (e) {
  'use strict';
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        { url: '/_next/static/chunks/606-c3a9ddaf53a44740.js', revision: 'c3a9ddaf53a44740' },
        { url: '/_next/static/chunks/654-9ea13ad32799b74c.js', revision: '9ea13ad32799b74c' },
        { url: '/_next/static/chunks/857-b47e4468e46433a5.js', revision: 'b47e4468e46433a5' },
        { url: '/_next/static/chunks/ee8b1517-64ebf5cb9f250c81.js', revision: '64ebf5cb9f250c81' },
        { url: '/_next/static/chunks/framework-114634acb84f8baa.js', revision: '114634acb84f8baa' },
        { url: '/_next/static/chunks/main-1172270af657421f.js', revision: '1172270af657421f' },
        { url: '/_next/static/chunks/pages/404-d7df9914c413641a.js', revision: 'd7df9914c413641a' },
        { url: '/_next/static/chunks/pages/_app-e97cc363783632c6.js', revision: 'e97cc363783632c6' },
        { url: '/_next/static/chunks/pages/_error-8353112a01355ec2.js', revision: '8353112a01355ec2' },
        { url: '/_next/static/chunks/pages/dolar-australiano-e2fedd2336bcc05a.js', revision: 'e2fedd2336bcc05a' },
        { url: '/_next/static/chunks/pages/dolar-canadense-98378eae907813f6.js', revision: '98378eae907813f6' },
        { url: '/_next/static/chunks/pages/dolar-hongkong-aeedb6ce7c0c23e9.js', revision: 'aeedb6ce7c0c23e9' },
        { url: '/_next/static/chunks/pages/dolar-taiwanes-d170cad49113e9a5.js', revision: 'd170cad49113e9a5' },
        { url: '/_next/static/chunks/pages/euro-de1e362a04d8027f.js', revision: 'de1e362a04d8027f' },
        { url: '/_next/static/chunks/pages/franco-suico-2f6a47956ff4fc7b.js', revision: '2f6a47956ff4fc7b' },
        { url: '/_next/static/chunks/pages/iene-japones-16fca831e375c6fc.js', revision: '16fca831e375c6fc' },
        { url: '/_next/static/chunks/pages/index-1e277cc5e7985f66.js', revision: '1e277cc5e7985f66' },
        { url: '/_next/static/chunks/pages/libra-67914cfb5bbdde69.js', revision: '67914cfb5bbdde69' },
        { url: '/_next/static/chunks/pages/peso-argentino-3e2c6b862082ccd9.js', revision: '3e2c6b862082ccd9' },
        { url: '/_next/static/chunks/pages/peso-mexicano-78b6d8f1073ff93f.js', revision: '78b6d8f1073ff93f' },
        { url: '/_next/static/chunks/pages/politicas-0ad76fc33e08b32f.js', revision: '0ad76fc33e08b32f' },
        { url: '/_next/static/chunks/pages/rublo-russo-df138a252ac6a5e5.js', revision: 'df138a252ac6a5e5' },
        { url: '/_next/static/chunks/pages/sobre-f9a46449da7fc3ce.js', revision: 'f9a46449da7fc3ce' },
        { url: '/_next/static/chunks/pages/termos-a9c2d985922ec8ec.js', revision: 'a9c2d985922ec8ec' },
        { url: '/_next/static/chunks/pages/yuan-chines-f6c0c522789e499a.js', revision: 'f6c0c522789e499a' },
        { url: '/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js', revision: '837c0df77fd5009c9e46d446188ecfd0' },
        { url: '/_next/static/chunks/webpack-ee7e63bc15b31913.js', revision: 'ee7e63bc15b31913' },
        { url: '/_next/static/css/45d012fb73c08e41.css', revision: '45d012fb73c08e41' },
        { url: '/_next/static/css/f8650b4d4cccb712.css', revision: 'f8650b4d4cccb712' },
        { url: '/_next/static/wGM4S36Jafc17T0dSVfEj/_buildManifest.js', revision: '080fe217474f9b7ffa957aa4b5997a89' },
        { url: '/_next/static/wGM4S36Jafc17T0dSVfEj/_ssgManifest.js', revision: 'b6652df95db52feb4daf4eca35380933' },
        { url: '/favicon-32x32.png', revision: '03530180bcb102ab6e33ffffa99074e8' },
        { url: '/flags/ar.svg', revision: 'f150864294964a34430648efbd001982' },
        { url: '/flags/au.svg', revision: '0af6624d4b0ca5e2348e094d3fe0a4bb' },
        { url: '/flags/br.svg', revision: '155348d0d5ca941fc05473797fa203b8' },
        { url: '/flags/ca.svg', revision: 'f3277db42e8a0498c5f23b58c4d681fe' },
        { url: '/flags/ch.svg', revision: '269ddab4d19b9c60a6459c09ddfd48c9' },
        { url: '/flags/cn.svg', revision: '01b1e16506941b544ede62b2d65fdbad' },
        { url: '/flags/eu.svg', revision: '510ca6da0d406bf2e66dce7733deff41' },
        { url: '/flags/gb.svg', revision: 'fcfef6780b36bef537381474df9d0be9' },
        { url: '/flags/hk.svg', revision: 'c1b9d3ff90e0b148a8d61ab9ef5f682c' },
        { url: '/flags/jp.svg', revision: '1dbf51e247c6c40000c51a1070515fe9' },
        { url: '/flags/mx.svg', revision: 'd326007cf87dba95a56cb4a25b408558' },
        { url: '/flags/ru.svg', revision: 'ab61f31edf4ad95b5ae00aff3be99197' },
        { url: '/flags/tw.svg', revision: 'ecdb8344f97cbe2640def79cb5715b7a' },
        { url: '/flags/us.svg', revision: 'bfaaeb1ca82bf9541f20aa098f3e7cf2' },
        { url: '/icone-midia.png', revision: 'da3601526cdb681297cb98e2b0552216' },
        { url: '/icone.svg', revision: 'ccb4d6d2e0c7a5007fa3acaa020ac7a5' },
        { url: '/icons/icon-192x192.png', revision: '85174e6fb1a1137785c9cc58e96c39b0' },
        { url: '/icons/icon-256x256.png', revision: 'df1e2ca1812ae375bff0e24dcc36ecf0' },
        { url: '/icons/icon-384x384.png', revision: '3a3a33e0c66093ce32ba266561505793' },
        { url: '/icons/icon-512x512.png', revision: '0de9c4ff87dbc0263c0a2202ef8aaaa0' },
        { url: '/manifest.json', revision: '3f66e5c7af48139442769ffd24447038' },
        { url: '/robots.txt', revision: '9a02c65f0af8835850ae941207fa758f' },
        { url: '/screenshots/screenshot.png', revision: 'ea7ef1c0d466dc891af66e5e45c7292b' },
        { url: '/sitemap.xml', revision: 'ea4eaabceabe11375d3d8173bbc19409' },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: async ({ request: e, response: s, event: a, state: c }) =>
              s && 'opaqueredirect' === s.type
                ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                : s,
          },
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [new e.RangeRequestsPlugin(), new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith('/api/auth/') && !!s.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith('/api/');
      },
      new e.NetworkFirst({
        cacheName: 'others',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET',
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET',
    );
});
