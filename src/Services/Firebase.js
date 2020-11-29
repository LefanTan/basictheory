import firebase from 'firebase/app'
import 'firebase/database'

const config={
    apiKey: "AIzaSyADAWhnUsK6O8h_QkXOZq2BJAQyMIGyNBo",
    authDomain: "basictheory-9d452.firebaseapp.com",
    databaseURL: "https://basictheory-9d452.firebaseio.com"
}
firebase.initializeApp(config)

export const db = firebase.database();
