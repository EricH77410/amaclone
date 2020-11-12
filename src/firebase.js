import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyCWDsulmMrn8OXy2MW-hWAQHDF-uHDaGiw',
  authDomain: 'amaclone-84887.firebaseapp.com',
  databaseURL: 'https://amaclone-84887.firebaseio.com',
  projectId: 'amaclone-84887',
  storageBucket: 'amaclone-84887.appspot.com',
  messagingSenderId: '534789994313',
  appId: '1:534789994313:web:c68fa67071bf5cf2104c98',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
