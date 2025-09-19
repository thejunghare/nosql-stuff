/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.helloWorldFromConsole = onRequest(() => {
  console.log("Hello!");
});

exports.hello = functions.firestore
  .document("chat/{docId}")
  .onWrite(async (change, context) => {
    const docRef = admin
      .firestore()
      .collection("chat")
      .doc(context.params.docId);
    await docRef.set({ message: "world!" });
    console.log("Write succeeded!");
  });

exports.hello = functions.firestore
  .document("chat/{docId}")
  .onWrite((change, context) => {
    const docRef = admin
      .firestore()
      .collection("chat")
      .doc(context.params.docId);
    return docRef.set({ message: "world!" }).then(() => {
      console.log("Write succeeded!");
    });
  });

exports.createUserProfile = functions.auth.user().onCreate(async (user) => {
  const docRef = admin.firestore().collection("users").doc(user.uid);

  const profileData = {
    uid: user.uid,
    email: user.email || "demo@gmail.com",
    displayName: user.displayName || "",
    photoURL: user.photoURL || "",
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
    role: "user",
  };

  await docRef.set(profileData);
  console.log(`Profile created for ${user.uid}`);
});
