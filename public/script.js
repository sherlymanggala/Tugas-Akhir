/*  
###
### Handles the sign in button press.
###
*/

function toggleSignIn() {
    if (firebase.auth.currentUser) {
        // Start Signout
        firebase.auth().signOut();
    }
    else {
        var email = document.getElementById('txtEmail').value;
        var password = document.getElementById('txtPassword').value;
        if (email.length < 4) {
            alert('Please enter an email address.');
            return;
        }
        if (password.length < 4) {
            alert('Please enter a password.');
            return;
        }
        
        // Sign in with email and password
        // Start auth with email
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle errors here
            var errorCode = error.code;
            var errorMessage = error.message;
            
            //start exclude
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            }
            else {
                alert(errorMessage);
            }
            console.log(error);
            document.getElementById('quickstart-sign-in').disabled = false;
            //end exclude
        });
        //end auth with email
    }
    document.getElementById('quickstart-sign-in').disabled = true;
}

/*
###
### Handles the sign up button press.
###
*/
function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass1').value;
    var passTemp = document.getElementById('pass2').value;
    if (passTemp != password) {
        alert('Your password doesn\'t match.');
        return;
    }
    if(email.length < 4) {
        alert('Please enter a valid email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    
    //Sign in with email and pass.
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        //Handle error here
        var errorCode = error.code;
        var errorMessage = error.message;
        
        //start exclude
        if (errorCode == 'auth/weak-password') {
            alert('The password is too weak.');
        }
        else {
            alert(errorMessage);
        }
        console.log(error);
        //end exclude
    });
}

/*

initApp handles setting up UI event listener and registering Firebase auth listeners

*/
function initApp() {
    //Listening for auth state changes.
    //start auth state listener
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
           // User is signed in
           var email = user.email;
           var uid = user.uid;
           var providerData = user.providerData;
           
           document.getElementById('btnLogin').textContent = 'Log out';
        }
    });
}

window.onload = function() {
    initApp();
};