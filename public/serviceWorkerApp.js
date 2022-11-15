const APP = {
  SW: null,
  cacheName: "myCache",
  startCaching: () => {
    caches.open(APP.cacheName).then((cache) => {
      console.log(`==>  cache ${APP.cacheName} is opened `);

      const apiUrl = "https://jsonplaceholder.typicode.com/todos/1";
      cache.add(apiUrl); // fetch request + put

      const apiUrlString = "favicon.ico";
      cache.add(apiUrlString);

      const req = new Request(`https://dummyjson.com/products/1`);
      cache.add(req);

      cache.keys().then((requests) => {
        requests.forEach((req) => {
          console.log("req ==> ", req);
        });
      });
    });
  },
  deleteCaching: () => {},
  init() {
    if ("serviceWorker" in navigator) {
      // starting service worker
      navigator.serviceWorker
        .register("/SW.js", { scope: "/" })
        .then((res) => {
          APP.SW = res.installing || res.waiting || res.active;
          console.log("** service worker is registered **");
        })
        .catch((error) => {
          console.log("error in registering service worker => ", error.message);
        });

      // checking if service worker is there already
      if (navigator.serviceWorker.controller) {
        console.log(" ### service worker is already installed ###");
      }

      // listening for changes, this can pass the data from the service worker to the application
      navigator.serviceWorker.oncontrollerchange = (event) => {
        console.log(" == new service worker is activated  ==");
      };

      // unregister the service worker
      // navigator.serviceWorker
      //   .getRegistrations()
      //   .then((registrations) => {
      //     for (let reg of registrations) {
      //       reg
      //         .unregister()
      //         .then((uReg) => {
      //           console.log("unregistered service worker : ", uReg);
      //         })
      //         .catch((err) =>
      //           console.log("err in unRegistering Sw ", err.message)
      //         );
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(
      //       "error in removing service worker registrations => ",
      //       error.message
      //     );
      //   });

      //  bellow is caching
      APP.startCaching();

      document
        .querySelector("#welcome")
        .addEventListener("click", APP.deleteCaching());
    } else {
      console.log(" !!! service worker is not supported !!! ");
    }
  },
};

document.addEventListener("DOMContentLoaded", APP.init());
