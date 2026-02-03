var messageSpace = document.getElementById("welcomeMessage");
messageSpace.innerHTML = "<h1>You've connected to the JavaScript!<h1>";

function getFormInput(){
  const NAME = document.getElementById("input");
  let userName = NAME.value;
  messageSpace.innerHTML = "<h1> Your name is " + userName + " </p>"
}

function firebaseInput(){
  firebaseInput.database().ref('/').set(
    {
      messsage: 'Hello'
    }
  )
}