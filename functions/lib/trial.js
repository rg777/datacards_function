"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise");
let url = "https://query.wikidata.org/sparql?format=json&query=%0A%20SELECT%20%3Fperson%20%3FpersonLabel%20%3Fimage%20%20%28group_concat%28%3Fchild%29%20as%20%3FchildLabel%29%20%28group_concat%28DISTINCT%20%3Fbirthplace%29%20as%20%3FbirthplaceLabel%29%0A%20%28group_concat%28DISTINCT%20%3Fdob%29%20as%20%3Fdob%29%0A%20WHERE%7B%0A%0A%20%3Fperson%20wdt%3AP27%20wd%3AQ668.%0A%20%3Fperson%20wdt%3AP106%20wd%3AQ33999.%0A%20%3Fperson%20wdt%3AP569%20%3Fdob.%0A%20%3Fperson%20wdt%3AP18%20%3Fimage.%0A%20%3Fperson%20wdt%3AP19%20%3Fbirthplace.%0A%20%3Fperson%20wdt%3AP40%20%3Fchild.%0A%0A%20SERVICE%20wikibase%3Alabel%20%7B%20bd%3AserviceParam%20wikibase%3Alanguage%20%22%5BAUTO_LANGUAGE%5D%2Cen%22.%20%7D%0A%0A%20%7D%0A%20group%20by%20%3Fperson%20%3FpersonLabel%20%3Fimage%0A%20";
rp(url)
    .then(function (htmlString) {
    // Process html...
    console.log('type', type, of, htmlString);
    console.log('User has %d repos', htmlString);
    response.send(htmlString);
})
    .catch(function (err) {
    // Crawling failed...
});
//# sourceMappingURL=trial.js.map