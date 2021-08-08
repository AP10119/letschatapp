var firebaseConfig = {
      apiKey: "AIzaSyDodp-9xqGhEnGF6d5Dbzb9SCVm4K1rX1E",
      authDomain: "kwitter-efcfe.firebaseapp.com",
      projectId: "kwitter-efcfe",
      storageBucket: "kwitter-efcfe.appspot.com",
      messagingSenderId: "11402879634",
      appId: "1:11402879634:web:e8c2489cd0a5d13d1a3c4b",
      measurementId: "G-K1Z7HHS9MN"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
var username=localStorage.getItem(username)
console.log(username)
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
