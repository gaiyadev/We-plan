import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDq6i9G_KJzibxx-Sd2JzdiBp0I4RgBt5w",
    authDomain: "we-plan-1ad08.firebaseapp.com",
    databaseURL: "https://we-plan-1ad08.firebaseio.com",
    projectId: "we-plan-1ad08",
    storageBucket: "we-plan-1ad08.appspot.com",
    messagingSenderId: "1010447008407",
    appId: "1:1010447008407:web:c435e5464eff4926e35fd2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });


export default firebase;
