//variable to store all the acceptable commands along with those that dont need arguments
const BIN_HIDDEN_EASTEREGGS = ["help", "print", "echo", "cd", "ls", "bin"];
const BIN = ["lochlann", "help", "print", "echo", "cd", "ls", "bin", "mtu", "markson"];
const SINGLES = ["lochlann", "help", "ls", "bin", "mtu", "markson"];

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
  if (commandType === 'lochlann') return "The greatest software developer in my house. Would be a shame if I wasn't hired asap."
  if (commandType === 'help') return "Try some commands such as [print, cd, ls, bin] ...among others. Try to find some of them. :)";
  if (commandType === 'print') return commandWithoutType;
  if (commandType === 'echo') return commandWithoutType;
  if (commandType === 'cd') return commandWithoutType.toLowerCase() + ".html";
  if (commandType === 'ls') return "Why do you want to look at my files? They're private!";
  if (commandType === 'bin') return "[" + BIN_HIDDEN_EASTEREGGS.join(', ') + "]";
  if (commandType === 'mtu') return "I love this college, I'm glad I came here to study";
  if (commandType === 'markson') return "Markson stop stalking me please";
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

//stops the user from applying <br> tags to the command when pressing enter. execute early
$("#command[contenteditable]").keypress(function (evt) {
  var keycode = evt.charCode || evt.keyCode;
  if (keycode  == 13) { //Enter key's keycode
    executeCommand()
    return false;
  }
});