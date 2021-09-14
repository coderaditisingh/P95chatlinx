// FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCXsng3BlSXFRHxDlyH9HQVcJSEDXSsE48",
    authDomain: "kwitter-44505.firebaseapp.com",
    databaseURL: "https://kwitter-44505-default-rtdb.firebaseio.com",
    projectId: "kwitter-44505",
    storageBucket: "kwitter-44505.appspot.com",
    messagingSenderId: "1081332916084",
    appId: "1:1081332916084:web:1cab020edd1b514ca19621"
  };
  
  room_name=localStorage.getItem("room_name");
  user_name=localStorage.getItem("user_name");

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code


//End code
    } });  }); }
getData();

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="chatlinx_room.html";    
}

function sending()
{
    msg=document.getElementById("msg").value;

    firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
    document.getElementById("msg").value=" ";
}



