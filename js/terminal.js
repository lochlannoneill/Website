//variable to store all the acceptable commands along with those that dont need arguments
const BIN_PRIVATE = ["lochlann", "mtu", "markson", "bruce", "gordon", "whoami"];
const BIN_PUBLIC = ["help", "bin", "print", "echo", "whoami", "pwd", "ls", "cd"];
const BIN = BIN_PRIVATE + BIN_PUBLIC;
const FILES = ["index", "projects", "contact"];

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
    // document.getElementById("terminal-response").innerHTML = ("Keyword '" + keyword + "' not found. Type <i>'help'</i> if you're stuck.");
    document.getElementById("terminal-response").innerHTML = ("Keyword '" + keyword + "' not found. If you are stuck, type <i>'help'</i>");
  }
}

// todo maybe something like if (keyword === 'echo') return executeEcho(command);
function executeKeyword(keyword, command) {
  //eastereggs
  if (keyword === 'mtu') return "I love this college, I'm glad I came here to study";
  if (keyword === 'markson') return "Markson stop stalking me please";
  if (keyword === 'lochlann') return "The greatest software developer in my house. Would be a complete shame if I wasn't hired asap."
  if (keyword === 'bruce') return "Cha dood"
  if (keyword === 'gordon') return "No gingers allowed"
  //actual commands
  if (keyword === 'help') return executeHelp();
  if (keyword === 'print') return executePrint(command);
  if (keyword === 'echo') return executePrint(command);
  if (keyword === 'whoami') return executeWhoAmI();
  if (keyword === 'cd') return executeCd(command.toLowerCase());
  if (keyword === 'ls') return executeLs();
  if (keyword === 'bin') return executeBin();
  if (keyword === 'pwd') return executePwd();
  return 'Unprecedented Error';
}

function getKeywordPurpose(keyword) {
}

function executeHelp() {
  return "Try the keyword <i>'bin'</i> to get some acceptable keywords<br>Some keywords require a command, such as 'cd Projects'<br>Try to guess some hidden commands. :)";
}

function executePrint(command) {
  return command
}

function executeWhoAmI() {
  return "Hello, I'm <i>Lochlann O Neill</i> :)<br>As a student of Software Development, I'm currently undergoing my final year at MTU.<br>Once finished with my degree, I hope to continue my journey focusing on either Cybersecurity or Web Development."
}

function executeCd(location) {
  if (FILES.includes(location)) {
    window.location.href = location + ".html";
    return "200 - File Relocation: " + location + ".html";
  }
    return "404 - File not found: " + location;
}

function executeLs() {
  return "[" + FILES.join(', ') + "]"
}

function executeBin() {
  return "[" + BIN_PUBLIC.join(', ') + "]"
}

function executePwd() {
  return "Home";
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