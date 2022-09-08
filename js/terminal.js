
//variable to store all the acceptable commands along with those that dont need arguments
const BIN_PRIVATE = ["lochlann", "mtu", "markson", "bruce", "gordon", "daniels"];
const BIN_PUBLIC = ["help", "bin", "man", "print", "echo", "whoami", "pwd", "ls", "cd"];
const BIN = BIN_PRIVATE + BIN_PUBLIC;
const FILES = ["index", "projects", "contact", "secret"];

var MAN_PRIVATE = {
  lochlann: "command&emsp;-&emsp;lochlann<br>function&emsp;-&emsp;Returns a description for the best Software Developer to have ever lived<br>argument&emsp;-&emsp;NOT REQUIRED",
  mtu: "command&emsp;-&emsp;mtu<br>function&emsp;-&emsp;Returns a description on Munster Technological University<br>argument&emsp;-&emsp;NOT REQUIRED",
  markson: "command&emsp;-&emsp;markson<br>function&emsp;-&emsp;Returns a description for Markson<br>argument&emsp;-&emsp;NOT REQUIRED",
  bruce: "command&emsp;-&emsp;bruce<br>function&emsp;-&emsp;Returns a description for Bruce<br>argument&emsp;-&emsp;NOT REQUIRED",
  gordon: "command&emsp;-&emsp;gordon<br>function&emsp;-&emsp;Returns a description for Gordon<br>argument&emsp;-&emsp;NOT REQUIRED",
  daniels: "command&emsp;-&emsp;daniels<br>function&emsp;-&emsp;Returns a description for Daniels<br>argument&emsp;-&emsp;NOT REQUIRED"
}
var MAN_PUBLIC = {
  help: "command&emsp;-&emsp;help<br>function&emsp;-&emsp;provides the user with information on how to use the terminal<br>argument&emsp;-&emsp;NOT REQUIRED",
  bin: "command&emsp;-&emsp;bin<br>function&emsp;-&emsp;returns a list of all acceptable commands.<br>argument&emsp;-&emsp;NOT REQUIRED",
  man: "command&emsp;-&emsp;man<br>function&emsp;-&emsp;provides a description of a given command<br>argument&emsp;-&emsp;REQUIRED&emsp;-&emsp;Type String (must be an existing command, type <i>bin</i> to get acceptable commands)",
  print: "command&emsp;-&emsp;print<br>function&emsp;-&emsp;allows the user to print their input to the terminal output.<br>argument&emsp;-&emsp;REQUIRED&emsp;-&emsp;String",
  echo: "command&emsp;-&emsp;echo<br>function&emsp;-&emsp;allows the user to echo their input to the terminal output.<br>ARGUMENT REQUIRED&emsp;-&emsp;The user is expected to supply an argument of type String",
  whoami: "command&emsp;-&emsp;whoami<br>function&emsp;-&emsp;Returns a description of the creator of the website, the awesome <b><i>Lochlann O Neill</i></b><br>argument&emsp;-&emsp;NOT REQUIRED",
  pwd: "command&emsp;-&emsp;pwd<br>function&emsp;-&emsp;print name of current/working directory<br>argument&emsp;-&emsp;NOT REQUIRED",
  ls:"command&emsp;-&emsp;ls<br>function&emsp;-&emsp;list website contents<br>argument&emsp;-&emsp;NOT REQUIRED",
  cd:"command&emsp;-&emsp;cd<br>function&emsp;-&emsp;change directory to supplied location<br>argument&emsp;-&emsp;REQUIRED&emsp;-&emsp;String (must be an existing webpage location)<br>secret&emsp;-&emsp;try the command '<b><i>cd secret</i></b>'",
}
MAN = Object.assign({}, MAN_PRIVATE, MAN_PUBLIC);

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
    document.getElementById("terminal-response").innerHTML = ("Keyword '" + keyword + "' not found. If you are stuck, type <b><i>'help'</i></b>");
  }
}

// todo maybe something like if (keyword === 'echo') return executeEcho(command);
function executeKeyword(keyword, command) {
  //secrets
  if (keyword === 'mtu') return "I love this college, I'm glad I came here to study.";
  if (keyword === 'markson') return "Markson stop stalking me please.";
  if (keyword === 'lochlann') return "The greatest software developer in my house.<br>It would be a complete shame if I wasn't hired asap."
  if (keyword === 'bruce') return "Cha dood."
  if (keyword === 'gordon') return "No gingers allowed."
  if (keyword === 'daniels') return "You should get his music downloader."
  //actual commands
  if (keyword === 'help') return executeHelp();
  if (keyword === 'bin') return executeBin();
  if (keyword === 'man') return executeMan(command);
  if (keyword === 'print') return executePrint(command);
  if (keyword === 'echo') return executePrint(command);
  if (keyword === 'whoami') return executeWhoAmI();
  if (keyword === 'cd') return executeCd(command.toLowerCase());
  if (keyword === 'ls') return executeLs();
  if (keyword === 'pwd') return executePwd();
  return 'Unprecedented Error';
}

function getKeywordPurpose(keyword) {
}

function executeHelp() {
  return "Try the keyword '<b><i>bin</i></b>' to get some acceptable keywords.<br>Some keywords require a command, such as '<b><i>cd contact</i></b>'.<br>Every command has a manual. To learn how to use a command, you may check its manual. Try the command '<b><i>man cd</i></b>'.<br>Try to guess some <b>hidden commands</b> or complete the <b>Capture The Flag (CTF)</b> game within my terminal. :)";
}

function executeMan(command) {
  if (command in MAN) {
    return MAN[command]
  }
  return "No manual entry for '<b><i>" + command + "</i></b>'.";
}


function executePrint(command) {
  return command
}

function executeWhoAmI() {
  return "Hello, I'm <b><i>Lochlann O Neill</i></b> :)<br>As a student of Software Development, I'm currently undergoing my final year at MTU.<br>Once finished with my degree, I hope to continue my journey focusing on either Cybersecurity or Web Development."
}

function executeCd(location) {
  if (FILES.includes(location)) {
    if (location == 'home') location = 'index';
    window.location.href = location + ".html";
    return "200 - OK ... File Relocation: " + location + ".html";
  }
    return "404 - File not found: '<b><i>" + location + ".html</i></b>'<br>Type <b><i>ls</i></b> to get acceptable files";
}

function executeLs() {
  return "[" + FILES.join(', ') + "]"
}

function executeBin() {
  return "[" + BIN_PUBLIC.join(', ') + "]"
}

function executePwd() {
  return "index";
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