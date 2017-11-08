//var firebase = require("firebase");
//// Initialize Firebase
//var config = {
//    apiKey: "AIzaSyA_NK_kBO7DABY-7InCTNK9pNNITHnrlCE",
//    authDomain: "multi-inventory.firebaseapp.com",
//    databaseURL: "https://multi-inventory.firebaseio.com",
//    projectId: "multi-inventory",
//    storageBucket: "multi-inventory.appspot.com",
//};
//firebase.initializeApp(config);
//var database = firebase.database();
//
//function handleLogout() {
//    firebase.auth().signOut().then(function() {
//        window.location = 'index.html';
//    }).catch(function(error) {
//        console.log(error);
//    });
//}
//
///* Read data from database */
//function readUser(userId) {
//    var userRef = firebase.database().ref('users/' + userId);
//    var nameRef = userRef.child('name');
//    nameRef.once("value").then(function(snapshot) {
//        console.log(snapshot.val());
//        document.getElementById('username').innerHTML = snapshot.val();
//    });
//}
//
// /* --- LOGIN FUNCTION --- */
//function toggleSignIn() {
//    if(firebase.auth().currentUser) {
//        // [START signout]
//        firebase.auth().signOut();
//        // [END signout]
//    } else {
//        var email = document.getElementById('txtEmail').value;
//        var password = document.getElementById('txtPassword').value;
//        if (email.length < 4) {
//            alert('Please enter a valid email address.');
//            return;
//        }
//        if (password.length < 4) {
//            alert('Please enter a password.');
//            return;
//        }
//
//        // Sign in with email and password.
//        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//           // Handle errors here.
//            var errorCode = error.code;
//            var errorMessage = error.message;
//
//            if (errorCode === 'auth/wrong-password') {
//                alert('Wrong password.');
//            } else {
//                alert(errorMessage);
//            }
//            console.log(error);
//        });
//
//        firebase.auth().onAuthStateChanged(function(user) {
//        /* if user has already logged in or signed in, automaticaly redirect to home */
//        if (user) {
//            window.location = 'home.html';
//        } 
//    });
//    }
//}
//
//function initApp() {
//    firebase.auth().onAuthStateChanged(function(user) {
//        if (user) {
//            readUser(user.uid);
//            var userRef = database.ref('users/' + user.uid).child('role');
//            userRef.once('value', function(snapshot) {
//                console.log(snapshot.val());
//
//                if(snapshot.val() == 'user') {                                
//                    //document.getElementsByClassName('userRole').remove();
//                    var elements = document.getElementsByClassName('userRole');
//                    while(elements.length > 0) {
//                        elements[0].parentNode.removeChild(elements[0]);
//                    }
//                }
//            });
//            return;
//        }
//        /*else {
//            window.location = 'index.html';
//            alert('Error, you must log in first.');
//        }*/
//    });
//
//    document.getElementById('btnLogout').addEventListener('click', handleLogout, false);
//    document.getElementById('btnLogin').addEventListener('click', toggleSignIn, false);
//}
//
//window.onload = function() {
//    initApp();
//};