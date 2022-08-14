

function executeCommand() {
  var command = document.getElementById('command').innerHTML;
  document.getElementById("command").innerHTML = "";
  document.getElementById("command").focus();
  console.log("command: " + command);
  
  commandType = command.split(' ')[0];
  console.log("commandType: " + commandType);
  
  //verify if the command is legit
  var verification = verifyCommand(commandType);
  if (verification === true) {
    document.getElementById("terminal-response").innerHTML = (removeFirstWord(command));
    // executeAppropriateCommand(command);
  } else {
    document.getElementById("terminal-response").innerHTML = ("'" + commandType + "' is not a valid command type");
  }
  
  console.log("commandType: " + commandType);
  console.log("acceptable: " + verification);
}

function executeAppropriateCommand(commandType, command) {
  
}

//return boolean if command is valid
function verifyCommand(commandType) {
  if (commandType.includes("help", "print", "echo", "cd")) {
    return true;
  }
  return false;
}

//return string without first word
function removeFirstWord(str) {
  return str.substr(str.indexOf(" ") + 1);
}
