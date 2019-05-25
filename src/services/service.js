import firebase from 'firebase'
import { firebaseConfig } from '../config/firebaseConfig'
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default {
    fetchMovies() {
        return firebase.database().ref('/movies').once('value');
    }
}