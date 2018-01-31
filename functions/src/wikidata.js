"use strict";
exports.__esModule = true;
var functions = require("firebase-functions");
var wdk = require("wikidata-sdk");
exports.wikidata = functions.https.onRequest(function (request, response) {
    console.log("this works");
    var authorQid = 'Q535';
    var sparql = "\n SELECT ?work ?date WHERE {\n   ?work wdt:P50 wd:" + authorQid + " .\n   OPTIONAL {\n     ?work wdt:P577 ?date .\n   }\n }\n ";
    var url = wdk.sparqlQuery(sparql);
    console.log(url);
    response.send(url);
});
