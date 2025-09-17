export function getMsg() {
    firebase
        .firestore()
        .collection('jh-chat')
        .onSnapshot(changes => {
            changes.docChanges().forEach((change) => {
                console.log('change: ', change)
                if (change.type == 'added') {
                    let pTag = document.createElement('p');
                    console.log(`Here Message : ${change.doc.id}`);
                    pTag.innerText = `Message : ${change.doc.data().message}`;
                    let chatContainer = document.getElementById('chat');
                    chatContainer.appendChild(pTag);
                }
            })
        })
}