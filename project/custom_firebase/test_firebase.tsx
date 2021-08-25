// firebase
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';

import firebaseConfigData from '../firebase_secret.json';

export async function read_data(collection_name:string) {
    let result_data = null;
    await firebase.database().ref().child(collection_name).get().then((snapshot) => {
        if (snapshot.exists())  {
            result_data = snapshot.val();
        } else console.log("No data available");
    }).catch(error => console.error(error));

    return result_data;
}

export function write_data(collection_name:string, data:any) {
  firebase.database().ref(collection_name).set(data);
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfigData);
}
