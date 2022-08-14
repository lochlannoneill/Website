//variable to store all the acceptable commands along with those that dont need arguments
const BIN_EASTEREGGS = ["lochlann", "mtu", "markson", "bruce", "whoami"];
const BIN_NOEASTEREGGS = ["help", "whoami", "echo", "ls", "cd", "pwd", "bin"];
const BIN = BIN_EASTEREGGS + BIN_NOEASTEREGGS;
const FILES = ["index.html", "projects.html", "contact.html"];
// const SINGLES = ["lochlann", "help", "ls", "bin", "mtu", "markson", "pwd", "bruce"];

function executeCommandLine() {
  var commandline = document.getElementById('commandline').innerHTML;
  console.log("commandline: " + commandline);
  document.getElementById("commandline").innerHTML = "";
  document.getElementById("commandline").focus();
  
  //get the keyword from the first word
  keyword = commandline.split(' ')[0];
  console.log("keyword: " + keyword);
  
  //verify if the keyword is valid and execute
  var validKeyword = isValidKeyword(keyword);
  console.log("acceptable: " + validKeyword);
  if (validKeyword) {
    var success = (executeKeyword(keyword, removeFirstWord(commandline)))
    console.log("success: " + success);
    document.getElementById("terminal-response").innerHTML = success;
  } else {
    document.getElementById("terminal-response").innerHTML = ("Keyword '" + keyword + "' not found. Type 'help' if you're stuck.");
  }
}

// todo maybe something like if (keyword === 'echo') return executeEcho(command);
function executeKeyword(keyword, command) {
  //eastereggs
  if (keyword === 'mtu') return "I love this college, I'm glad I came here to study";
  if (keyword === 'markson') return "Markson stop stalking me please";
  if (keyword === 'whoami') return "Hello, my name is Lochlann O Neill.<br>I'm currently studying software development at MTU."
  if (keyword === 'lochlann') return "The greatest software developer in my house. Would be a complete shame if I wasn't hired asap."
  if (keyword === 'bruce') return "Cha dood"
  //actual commands
  if (keyword === 'help') return "Try keywords such as 'bin' or try to find some hidden keywords. :)";
  if (keyword === 'print') return command;
  if (keyword === 'echo') return command;
  if (keyword === 'cd') return command; //todo
  if (keyword === 'ls') return "[" + FILES.join(', ') + "]";
  if (keyword === 'bin') return "[" + BIN_NOEASTEREGGS.join(', ') + "]";
  if (keyword === 'pwd') return 'index.html'
}

function getKeywordPurpose(keyword) {

}

//return boolean if command is valid
function isValidKeyword(keyword) {
  if (BIN.includes(keyword)) return true;
  return false;
}

//todo - what if echo has no following command
//return string without first word
function removeFirstWord(str) {
  if (str.trim().indexOf(' ') != -1) return str.substr(str.indexOf(" ") + 1);
  return str;
}

//stops the user from applying <br> tags to the command when pressing enter. execute early
$("#commandline[contenteditable]").keypress(function (evt) {
  var keycode = evt.charCode || evt.keyCode;
  if (keycode  == 13) { //Enter key's keycode
    executeCommandLine()
    return false;
  }
});