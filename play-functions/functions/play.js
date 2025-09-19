// Gen 1 (classic) Cloud Functions imports
const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize the Admin SDK once for the whole file
admin.initializeApp();

exports.createProfile = functions.auth.user().onCreate((user) => {
  // ...
});

exports.date = functions.https.onRequest((req, res) => {
  // ...
});
