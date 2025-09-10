export function deleteMsg(docId) {
    try {
        console.log("delete msg function");
        let delete_fun = firebase
            .firestore()
            .collection("chat")
            .doc(docId)
            .delete();
        if (delete_fun) {
            console.log(delete_fun);
        }
    } catch {
        console.log(Error);
    }
}