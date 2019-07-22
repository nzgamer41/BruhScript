//This takes a .bruh file and converts it in real time to a JavaScript file, and requires NodeJS and line-reader.

var lineReader = require('line-reader');
var vm = require('vm');
var bruhFile = "";

if(process.argv.length != 3){
	console.log("Usage: node bruhToJs.js <.bruh file>");
	return;
}

console.log("bruhToJS Compiler v1\nCreated by Alex Cheer\n");
lineReader.eachLine(process.argv[2], function(line, last) {
  // do whatever you want with line...
	if(line.startsWith("bruh")){
		line = line.replace("bruh", "var");
		console.log("Translated line: " + line + "\n");
	}
	bruhFile += line + "\n";
  if(last){
    console.log("Executing...");
	vm.runInThisContext(bruhFile, 'myfile.vm');
  }
});



