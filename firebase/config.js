import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCHsu78HT44Pi7WeC8YKEnW_7AjCTrXSB0',
  authDomain: 'fitessapp.firebaseapp.com',
  databaseURL: 'https://fitessapp.firebaseio.com',
  projectId: 'fitessapp',
  storageBucket: 'fitessapp.appspot.com',
  messagingSenderId: '760933564544',
  appId: '1:760933564544:ios:8596547c6b18a231ef2665',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };
