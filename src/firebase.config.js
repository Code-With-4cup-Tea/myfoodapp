import{getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBbEe2FOPDNuIGwRhnICnpc3ZCbLGJd4KA",
  authDomain: "bhuka-sher.firebaseapp.com",
  databaseURL: "https://bhuka-sher-default-rtdb.firebaseio.com",
  projectId: "bhuka-sher",
  storageBucket: "bhuka-sher.appspot.com",
  messagingSenderId: "678065401045",
  appId: "1:678065401045:web:9ed94eedb6dc30fa0f465c"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
//app store if app open than return open app other wise open new app

const firestore = getFirestore(app);

const storage = getStorage(app);

export {app,firestore,storage}

