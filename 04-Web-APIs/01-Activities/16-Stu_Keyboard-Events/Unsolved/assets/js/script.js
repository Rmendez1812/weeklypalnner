function keydownAction(event) {
  // TODO: Complete keydown function
  var keyPress = event.keyPress;

  var keycode = event.code;

  document.querySelector('#status').innerHTML = "KEYDOWN Event";
  document.querySelector("#code").textcontent = keycode;
  document.querySelector(#key).textcontent = keyPress;
}

function keyupAction() {
  
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

document.addEventListener("keydown", keydownAction);

