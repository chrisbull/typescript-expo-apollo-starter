import firebase from 'firebase'

import Config from '../../../config'

export function initializeFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(Config.FIREBASE)
  }
}
