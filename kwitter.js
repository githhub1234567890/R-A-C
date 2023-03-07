function Verification(){
  Name = document.getElementById("user_name").value;
  password = document.getElementById("password").value;

  if (Name == "Pheonix" && password == "123456"){
      addUser("Pheonix Instinct")
      window.location="kwitter_room.html"
  }else if (Name == "Trigger" && password == "341353"){
      addUser("Trigger Instinct")
      window.location="kwitter_room.html"
  } else{
    window.location="Ban.html"
  }
 // if (('not')( Name == "Pheonix" && password == "123456")('or')('not')(Name == "Trigger" && password == "341353"));{
 //   window.location="Ban.html"
 // }
}
  
function addUser(name) {
  
    localStorage.setItem("user_name", name);
    
  }