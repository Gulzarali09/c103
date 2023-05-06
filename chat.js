var firebaseConfig = {
    apiKey: "AIzaSyCpYJMXo-bzHWq24Yx1OHbNM7yH_uQ-UFg",
    authDomain: "class100-29dfb.firebaseapp.com",
    databaseURL: "https://class100-29dfb-default-rtdb.firebaseio.com/",
    projectId: "class100-29dfb",
    storageBucket: "class100-29dfb.appspot.com",
    messagingSenderId: "435840654788",
    appId: "1:435840654788:web:a03eba6cde266eb46ed891"
    
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



