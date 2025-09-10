export function updateMsg(docId, name, text) {
    firebase.firestore().collection('mz-chat').doc(docId).update({ name, text })
}