
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAcFGLb014EW9UdLFrRsIBnGHLZDv3XXoE",
      authDomain: "kwitter-webapp-7de7a.firebaseapp.com",
      databaseURL: "https://kwitter-webapp-7de7a.firebaseio.com",
      projectId: "kwitter-webapp-7de7a",
      storageBucket: "kwitter-webapp-7de7a.appspot.com",
      messagingSenderId: "50722073691",
      appId: "1:50722073691:web:aa5dfdb77b12e10f59237e"
    };
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    console.log("user_name -" + user_name);
   document.getElementById("user_name").innerHTML = "Welcome "+ "Sumasri" + "!";
   
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row="<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name,name");
      window.location="kwitter_page.html"
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
}
