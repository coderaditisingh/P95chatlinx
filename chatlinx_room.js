var firebaseConfig = {
      apiKey: "AIzaSyCXsng3BlSXFRHxDlyH9HQVcJSEDXSsE48",
      authDomain: "kwitter-44505.firebaseapp.com",
      databaseURL: "https://kwitter-44505-default-rtdb.firebaseio.com",
      projectId: "kwitter-44505",
      storageBucket: "kwitter-44505.appspot.com",
      messagingSenderId: "1081332916084",
      appId: "1:1081332916084:web:1cab020edd1b514ca19621"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
   //ADD YOUR FIREBASE LINKS
   user_name=localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML="welcome "+user_name+ " !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
    console.log("Room_names "+Room_names);
    row = '<div class="room_name" id='+Room_names+' onclick="redirectToRoomName(this.id)" >#'+Room_names+'</div><hr>';
    document.getElementById("output").innerHTML+=row;
     //End code
      });});}
getData();

function add_room()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
      });
  localStorage.setItem("room_name",room_name);

  window.location="chatlinx_page.html";
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name",room_name);
window.location="chatlinx_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="chatlinx.html";    
}
      


