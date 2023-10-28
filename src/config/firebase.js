import firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBGLPOLNThvSLp__thrbLkBqazp-JqaVMY',
  authDomain: 'react-files-manager.firebaseapp.com',
  projectId: 'react-files-manager',
  storageBucket: 'react-files-manager.appspot.com',
  messagingSenderId: '859840253189',
  appId: '1:859840253189:web:4b40233922e49d3db1fb6c',
}

const fire = firebase.initializeApp(firebaseConfig)
