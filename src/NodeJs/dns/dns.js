const dns = require("dns");

dns.lookup("pluralsight.com", (err, address) => {
  console.log("pluralsight address ===> ", address);
});

dns.reverse("54.201.247.181", (err, hostNames) => {
  console.log(hostNames);
});
