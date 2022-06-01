import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// import { seedDatabase } from '../seed';

// we need to somehow seed the databse

// we need a config here
const config = {
  apiKey: 'AIzaSyA7Jx5-izdHmwnOafO6SBulnM4yZVt3SYw',
  authDomain: 'netflix-8591c.firebaseapp.com',
  databaseURL: 'https://netflix-8591c.firebaseio.com',
  projectId: 'netflix-8591c',
  storageBucket: 'netflix-8591c.appspot.com',
  messagingSenderId: '812645111426',
  appId: '1:812645111426:web:bf3d0d7e0e4f9cd737469b',
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
