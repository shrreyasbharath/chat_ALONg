//YOUR FIREBASE LINKS

const firebaseConfig = {
      apiKey: "AIzaSyBgQ_JgM62d4omO96YVRHRKv5nJsWcXYu8",
      authDomain: "classtest-b7cc2.firebaseapp.com",
      databaseURL: "https://classtest-b7cc2-default-rtdb.firebaseio.com",
      projectId: "classtest-b7cc2",
      storageBucket: "classtest-b7cc2.appspot.com",
      messagingSenderId: "915153025337",
      appId: "1:915153025337:web:196c48ed2259a3fab7d0e8",
      measurementId: "G-7KFWXKF46H"
    };

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         
//Start code
console.log(firebase_message_id);
console.log(firebase_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like']
name_with_tag = "<h4>" + name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message </h4>";
like_button = "<button class='btn btn-warning' id="+firebase_message_id" value ="+ like +" onclick='updateLike(this.id)'> "
span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up>'Like: " + like +"</span><button><hr>";

row =name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerhtml += row;

//End code
      } });  }); }
getData();

function updateLike(message_id)
{
      console.log("clicked on like button - " + message_id);
      button_id = message_id;
      like = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1
      console.log("updated_likes");

      firebase.database().ref(room_name).child(message_id).update
      (like : updated_likes);
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}