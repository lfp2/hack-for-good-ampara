const admin = require('firebase-admin')
const firebaseFile = require('./firebase.json')

const firebaseConfig = admin.initializeApp({
  credential: admin.credential.cert(firebaseFile),
  databaseURL: 'https://hack-for-good-hug.firebaseio.com/'
})

module.exports = firebaseConfig
