const fs = require('fs');

function sumN() {
    var counter = 0;

    for (var i = 0; i < 100000; i++) {
        counter = counter + 1;
    }
    
    console.log(counter);
    
}

function printToScreen() {
    console.log("Printing to screen");
}

// calls printToScreen after 3 secs
// async
setTimeout(printToScreen, 3*1000);

// sumN is invoked - doest have to wait for
// setTimeout to be called
sumN();