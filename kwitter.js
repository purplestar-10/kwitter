//ADD YOUR FIREBASE LINKS
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
  function addUser() {
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
});
}