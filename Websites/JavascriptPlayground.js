// code goes here...
console.log('Hello world!');

throw new Error('CatchDeezNuts');

var recursive = 0;
var modulo;
// var display = document.getElementById("007jb").innerHTML;

function mathematicalFunction(display) {

    if(display == null){
        throw new Error("referenceError");
    }
    else {
        console.log("It works!");
    }

    recursive++;
    try {
        recursive += 1;
        modulo = recursive % 13;
        
        display = "" + (recursive / modulo);
        

    }catch(e){
        display = "Undefined";
    }
}