//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyDIDeSEsw4u6bEt9SRjWeOFjpJbP7_YbRM",
      authDomain: "kwitter-14b32.firebaseapp.com",
      databaseURL: "https://kwitter-14b32-default-rtdb.firebaseio.com",
      projectId: "kwitter-14b32",
      storageBucket: "kwitter-14b32.appspot.com",
      messagingSenderId: "1093812192555",
      appId: "1:1093812192555:web:24f706b11fc9902eb7716e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code



//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}