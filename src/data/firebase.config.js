import { initializeApp } from 'firebase/app';
import { collection, getFirestore } from 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_AUTHDOMAIN,
  databaseURL: process.env.REACT_DATABASE_URL,
  projectId: 'react-redux-job-listing',
  storageBucket: process.env.REACT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_MEASUREMENT_ID,
};

// initialize Firebase
export const app = initializeApp(firebaseConfig);

// initialize service
export const db = getFirestore(app);

// collection
export const jobsCol = collection(db, 'jobs');
