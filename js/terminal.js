const BIN = ["help", "print", "echo", "cd", "ls"];
const SINGLES = ["ls"];

function executeCommand() {
  var command = document.getElementById('command').innerHTML;
  console.log("command: " + command);
  document.getElementById("command").innerHTML = "";
  document.getElementById("command").focus();
  
  //get the command type from the first word
  commandType = command.split(' ')[0];
  console.log("commandType: " + commandType);
  
  //verify if the command is legit and execute
  var verification = verifyCommand(commandType);
  console.log("acceptable: " + verification);
  if (verification) {
    var success = (executeAppropriateCommand(commandType, removeFirstWord(command)))
    console.log("success: " + success);
    document.getElementById("terminal-response").innerHTML = success;
  } else {
    document.getElementById("terminal-response").innerHTML = ("Command '" + commandType + "' not found. Type 'help' if you're stuck.");
  }
  
}

function executeAppropriateCommand(commandType, commandWithoutType) {
  if (commandType === 'help') return "Try some of these commands: [" + BASH.join(', ') + "]";
  if (commandType === 'print') return commandWithoutType;
  if (commandType === 'echo') return commandWithoutType;
  if (commandType === 'cd') return commandWithoutType.toLowerCase() + ".html";
  if (commandType === 'ls') return "Why do you want to look at my files? They're private!"
}

//return boolean if command is valid
function verifyCommand(commandType) {
  if (BIN.includes(commandType)) return true;
  return false;
}

//return string without first word
function removeFirstWord(str) {
  if (str.trim().indexOf(' ') != -1) return str.substr(str.indexOf(" ") + 1);
  return str;
}
