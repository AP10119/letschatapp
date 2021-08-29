var firebaseConfig = {
      apiKey: "AIzaSyC9POPz5MAbjBVQGF-wLZytm_s59QcESEI",
      authDomain: "lets-chat-5717c.firebaseapp.com",
      databaseURL: "https://lets-chat-5717c-default-rtdb.firebaseio.com",
      projectId: "lets-chat-5717c",
      storageBucket: "lets-chat-5717c.appspot.com",
      messagingSenderId: "675011568398",
      appId: "1:675011568398:web:37ae21f9dd2415934e2d5f",
      measurementId: "G-PZXY9D6GGW"
    };
    var room_name;
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    
var username=localStorage.getItem(username)
console.log(username)
document.getElementById("user_welcome").innerHTML = "Welcome"+username;
function addroom(){
      room_name=document.getElementById("roomname").value;
      console.log("roomname"+room_name);
      localStorage.setItem("room_name",room_name)
      firebase.database().ref("/").child(room_name).update({
          purpose:"addingroom"
      })
      window.location =("kwitter_page.html");
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names); 
      row= "<div class = 'room_name' id="+Room_names+" onclick='Redirect(this.id)'>#"+Room_names+"</div><hr>"; 
      document.getElementById("output").innerHTML+=row; 
      //End code
      });
    });
  }
getData();

function Redirect(name){
  localStorage.setItem("room_name",name);
  window.location =("kwitter_page.html");
}
function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location=("index.html")
}
