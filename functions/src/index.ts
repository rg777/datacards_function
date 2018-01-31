import * as functions from 'firebase-functions';
import { wikidata } from './wikidata';
export { wikidata };
// // Start writing Firebase Functions
// // https://firebase.google.com/functions/write-firebase-functions
//


export const helloWorld = functions.https.onRequest((request, response) => {

 response.send('Hello from Firebase!\n\n');
 console.log("this works");
});
