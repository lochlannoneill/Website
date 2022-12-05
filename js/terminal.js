// to add a new command
// add to either BIN_PRIVATE or BIN_PUBLIC
// add to either MAN_PRIVATE or MAN_PUBLIC
// add executeCommand()
// create a new execute() function for the new command

FLAG_PARTIAL = "hireme";
FLAG = "flag[" + FLAG_PARTIAL + "]";

//variable to store all the acceptable commands along with those that dont need arguments
const BIN_PRIVATE = ["lochlann", "mtu", "ctf", "markson", "bruce", "gordon", "daniels"];
const BIN_PUBLIC = ["help", "bin", "man", "print", "flag", "whoami", "pwd", "ls", "cd"];
const BIN = BIN_PRIVATE + BIN_PUBLIC;
const FILES = ["index", "contact", "secret"];

var MAN_PRIVATE = {
  lochlann: "command&emsp;-&emsp;lochlann<br>function&emsp;-&emsp;returns a description for the best Software Developer to have ever lived<br>argument&emsp;-&emsp;NOT REQUIRED<br>return type&emsp;-&emsp;String",
  mtu: "command&emsp;-&emsp;mtu<br>function&emsp;-&emsp;returns a description on Munster Technological University<br>argument&emsp;-&emsp;NOT REQUIRED<br>return type&emsp;-&emsp;String",
  flag: "command&emsp;-&emsp;flag&emsp;-&emsp;String (you cannot paste the flag into the terminal)<br>function&emsp;-&emsp;The user completes the CTF challenge if they enter the correct flag<br>argument&emsp;-&emsp;NOT REQUIRED<br>Be sure to use all the commands in <b><i>'bin'</i></b> to find the flag. You can do it!<br>return type&emsp;-&emsp;String",
  ctf: "command&emsp;-&emsp;ctf&emsp;-&emsp;String (you cannot paste the flag into the terminal)<br>function&emsp;-&emsp;The user completes the CTF challenge if they enter the correct flag<br>argument&emsp;-&emsp;NOT REQUIRED<br>Be sure to use all the commands in <b><i>'bin'</i></b> to find the flag. You can do it!<br>return type&emsp;-&emsp;String",
  markson: "command&emsp;-&emsp;markson<br>function&emsp;-&emsp;returns a description for Markson<br>argument&emsp;-&emsp;NOT REQUIRED<br>return type&emsp;-&emsp;String",
  bruce: "command&emsp;-&emsp;bruce<br>function&emsp;-&emsp;returns a description for Bruce<br>argument&emsp;-&emsp;NOT REQUIRED<br>return type&emsp;-&emsp;String",
  gordon: "command&emsp;-&emsp;gordon<br>function&emsp;-&emsp;returns a description for Gordon<br>argument&emsp;-&emsp;NOT REQUIRED<br>return type&emsp;-&emsp;String",
  daniels: "command&emsp;-&emsp;daniels<br>function&emsp;-&emsp;returns a description for Daniels<br>argument&emsp;-&emsp;NOT REQUIRED<br>return type&emsp;-&emsp;String"
};
var MAN_PUBLIC = {
  help: "command&emsp;-&emsp;help<br>function&emsp;-&emsp;provides the user with information on how to use the terminal<br>argument&emsp;-&emsp;NOT REQUIRED<br>return type&emsp;-&emsp;String",
  bin: "command&emsp;-&emsp;bin<br>function&emsp;-&emsp;returns a list of all acceptable commands.<br>argument&emsp;-&emsp;NOT REQUIRED<br>return type&emsp;-&emsp;String",
  man: "command&emsp;-&emsp;man<br>function&emsp;-&emsp;provides a description of a given command<br>argument&emsp;-&emsp;REQUIRED&emsp;-&emsp;Type String (must be an existing command, type <i>bin</i> to get acceptable commands)<br>return type&emsp;-&emsp;String",
  print: "command&emsp;-&emsp;print<br>function&emsp;-&emsp;allows the user to print their input to the terminal output.<br>argument&emsp;-&emsp;REQUIRED&emsp;-&emsp;String<br>return type&emsp;-&emsp;String",
  // echo: "command&emsp;-&emsp;echo<br>function&emsp;-&emsp;allows the user to echo their input to the terminal output.<br>ARGUMENT REQUIRED&emsp;-&emsp;The user is expected to supply an argument of type String<br>return type&emsp;-&emsp;String",
  whoami: "command&emsp;-&emsp;whoami<br>function&emsp;-&emsp;returns a description of the creator of the website, the awesome <b><i>Lochlann O Neill</i></b><br>argument&emsp;-&emsp;NOT REQUIRED<br>return type&emsp;-&emsp;String",
  pwd: "command&emsp;-&emsp;pwd<br>function&emsp;-&emsp;print name of current/working directory<br>argument&emsp;-&emsp;NOT REQUIRED<br>return type&emsp;-&emsp;String",
  ls:"command&emsp;-&emsp;ls<br>function&emsp;-&emsp;list website contents<br>argument&emsp;-&emsp;NOT REQUIRED<br>return type&emsp;-&emsp;String",
  // cd:"command&emsp;-&emsp;cd<br>function&emsp;-&emsp;change directory to supplied location<br>argument&emsp;-&emsp;REQUIRED&emsp;-&emsp;String (must be an existing webpage location)<br>return type&emsp;-&emsp;null<br>secret&emsp;-&emsp;try the command <b><i>'cd secret'</i></b>",
  cd:"command&emsp;-&emsp;cd<br>function&emsp;-&emsp;change directory to supplied location<br>argument&emsp;-&emsp;REQUIRED&emsp;-&emsp;String (must be an existing webpage location)<br>return type&emsp;-&emsp;null",
};
MAN = Object.assign({}, MAN_PRIVATE, MAN_PUBLIC);

function executeCommandLine() {
  var commandline = document.getElementById('commandline').innerHTML;
  console.log("commandline: " + commandline);
  document.getElementById("commandline").innerHTML = "";
  document.getElementById("commandline").focus();
  
  //get the command from the first word
  command = commandline.split(' ')[0];
  console.log("command: " + command);
  
  //verify if the command is valid and execute using supplied argument
  var validCommand = isValidCommand(command);
  console.log("acceptable: " + validCommand);
  if (validCommand) {
    var response = (executeCommand(command, removeFirstWord(commandline)))
    console.log("response: " + response);
    document.getElementById("terminal-response").innerHTML = response;
  } else {
    // document.getElementById("terminal-response").innerHTML = ("Command '" + command + "' not found. Type <b><i>'help'</i></b> if you're stuck.");
    document.getElementById("terminal-response").innerHTML = ("Command '" + command + "' not found. If you are stuck, type <b><i>'help'</i></b>");
  };
};

function executeCommand(command, argument) {
  //secrets
  if (command === FLAG || command === FLAG_PARTIAL) return executeFlagFound(FLAG);
  if (command === 'mtu') return "I love this college, I'm glad I came here to study.";
  if (command === 'markson') return "Markson stop stalking me please.";
  if (command === 'lochlann') return "The greatest software developer in my house.<br>It would be a complete shame if I wasn't hired asap.";
  if (command === 'bruce') return "Cha dood.";
  if (command === 'gordon') return "No gingers allowed.";
  if (command === 'daniels') return "You should get his music downloader.";
  //actual commands
  if (command === 'help') return executeHelp();
  if (command === 'bin') return executeBin();
  if (command === 'man') return executeMan(argument);
  if (command === 'print' || command === 'echo') return executePrint(argument);
  // if (command === 'echo') return executePrint(argument);
  if (command === 'flag' || command === 'ctf') return executeFlag();
  if (command === 'whoami') return executeWhoAmI();
  if (command === 'cd') return executeCd(argument.toLowerCase());
  if (command === 'ls') return executeLs();
  if (command === 'pwd') return executePwd();
  return 'Unprecedented Error';
};

//return boolean if command is/not valid
function isValidCommand(command) {
  if (BIN.includes(command)) return true;
  if (command === FLAG || command === FLAG_PARTIAL) return true;
  return false;
}

//todo - what if print has no following argument???
//split commandline input and return argument only
function removeFirstWord(str) {
  if (str.trim().indexOf(' ') != -1) return str.substr(str.indexOf(" ") + 1);
  return str;
}

function executeFlagFound(flag) {
  return "<b><i>" + flag + "</i></b><br>You found the flag!<br>You are now a Master Cybersecurity Analyst<br>P.S If you haven't decided yet . . . <b><i>hire me</b></i> :)";
};

function executeHelp() {
  return "Try the command <b><i>'bin'</i></b> to get some acceptable commands.<br>Some commands require an argument, such as <b><i>'cd contact'</i></b>.<br>To learn how to use a command, you may check it's manual. Try the command <b><i>'man cd'</i></b>.<br>Try to guess some <b><i>hidden commands</i></b> or complete the <b><i>Capture The Flag (CTF)</i></b> game by finding the <b><i>'flag'</i></b>.";
};

function executeMan(command) {
  if (command in MAN) {
    return MAN[command];
  }
  return "No manual entry for <b><i>'" + command + "'</i></b>.";
};

function executePrint(argument) {
  return argument;
};

function executeFlag() {
  return "Explore the terminal to find the flag.<br>Use the commands found in <b><i/>'bin'</i></b> to find it.<br>Once you find the flag, type it into the terminal to complete the CTF game.<br><b><i>WARNING</i></b> - Pasting the flag into the terminal results in an error, type it manually";
};

function executeWhoAmI() {
  return "Hello, I'm <b><i>Lochlann O Neill</i></b> :)<br>As a student of Software Development, I'm currently undergoing my final year at MTU.<br>Once finished with my degree, I hope to continue my journey focusing on either Cybersecurity or Web Development.";
};

function executeCd(location) {
  if (location == 'home') location = 'index';
  if (FILES.includes(location)) {
    window.location.href = location + ".html";
    return "200 - OK ... File Relocation: " + location + ".html";
  };
    return "404 - File not found: <b><i>'" + location + ".html'</i></b><br>Type <b><i>ls</i></b> to get acceptable files";
};

function executeLs() {
  return "[" + FILES.join(', ') + "]";
};

function executeBin() {
  return "[" + BIN_PUBLIC.join(', ') + "]";
};

function executePwd() {
  return "index";
};

//stops the user from applying <br> tags to the command when pressing enter. execute early
$("#commandline[contenteditable]").keypress(function (evt) {
  var keycode = evt.charCode || evt.keyCode;
  if (keycode  == 13) { //Enter key's keycode
    executeCommandLine()
    return false;
  };
});
