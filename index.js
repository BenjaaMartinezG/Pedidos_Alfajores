var firebaseConfig = {
    apiKey: "AIzaSyD__v-cPWWlS4BCO6N423GsUFZOkMWH4x4",
    authDomain: "orbital-avatar-263719.firebaseapp.com",
    databaseURL: "https://orbital-avatar-263719.firebaseio.com",
    projectId: "orbital-avatar-263719",
    storageBucket: "orbital-avatar-263719.appspot.com",
    messagingSenderId: "352853487196",
    appId: "1:352853487196:web:d4f2c554de9b63cfc68099"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 function insert(){
      //obtiene lso elementos de los input 
      var name = document.getElementById("name").value;
      var quantity = document.getElementById("quantity").value;
      var typebox = document.getElementById("typebox").value;
      var date = getParameters("date").value;
      var delivery = getParameters("delivery").value;
      var direction = getParameters("direction").value;

      console.log(name);
      console.log(quantity);
      console.log(typebox);
      console.log(date);
      console.log(delivery);
      console.log(direction);
  }