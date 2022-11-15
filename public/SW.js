console.log("==== sw running =====", self);

self.addEventListener("install", (event) => {
  console.log("&&& install event in service worker &&&", event);
});
self.addEventListener("activate", (event) => {
  console.log("&&& activate  event in service worker &&&", event);
});
self.addEventListener("fetch", (event) => {
  console.log("&&& fetch event in service worker &&&", event);
});
self.addEventListener("message", (event) => {
  console.log("&&& message  event in service worker &&&", event);
});
