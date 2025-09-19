const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.createUserProfile = functions.auth.user().onCreate((user) => {
 
});

exports.helloWorld = functions.https.onRequest((req, res) => {
  console.log("Hello!");
});
