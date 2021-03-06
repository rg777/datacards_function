import * as functions from 'firebase-functions';
import * as wdk from 'wikidata-sdk';
import * as rp from "request-promise";
const cors = require('cors')({origin: true});

export const wikidata = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    //response.status(200).send({test: 'Testing functions'});
  });

 console.log("this works");

 const sparql = `
 SELECT ?person ?personLabel ?image  ?childLabel ?birthplaceLabel ?dob ?spouseLabel
 WHERE{

 ?person wdt:P27 wd:Q668.
 ?person wdt:P106 wd:Q33999.
 ?person wdt:P569 ?dob.
 ?person wdt:P18 ?image.
 ?person wdt:P19 ?birthplace.
 OPTIONAL{?person wdt:P40 ?child.}
 OPTIONAL{?person wdt:P26 ?spouse.}

 SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }

 }
 `

const sparql2 = `
SELECT ?countrynameLabel ?populationLabel ?GDPpercapita ?Growthrate ?area
WHERE{


?countryname wdt:P31 wd:Q6256.
?countryname wdt:P1082 ?population.
?countryname wdt:P2132 ?GDPpercapita.
?countryname wdt:P2219 ?Growthrate.
?countryname wdt:P2046 ?area.

SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }

}
`


 const url = wdk.sparqlQuery(sparql)
 console.log(url);

 let options = {
     uri: url,
     json: true // Automatically parses the JSON string in the response
 };

 rp(options)
     .then(function (obj) {
         // Process html...
         let type=obj.results.bindings;

         console.log('res has %d repos', type.length);
         response.send(type[Math.floor(Math.random() * type.length)]);
     })
     .catch(function (err) {
         // Crawling failed...
     });


});
