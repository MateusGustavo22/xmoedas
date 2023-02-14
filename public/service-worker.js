workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);

workbox.routing.registerRoute(
/.(?:png|gif|jpg|jpeg|svg)$/,
new workbox.strategies.CacheFirst({
cacheName: 'images',
plugins: [
new workbox.expiration.ExpirationPlugin({
maxEntries: 50,
maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
}),
],
})
);