const fs = require('fs');

// sample code to simulate some logic which needs cpu cycles
function sumN(n) {
    let sum = 0;
    for (var i = 0; i<n; i++) {
        sum += i;
    }

    console.log(sum);
}

// logic which measures the time it takes for sumN to finish
// for decently-large values of 'n'
var startTime = new Date().getTime();
const a = sumN(100000000);
var endTime = new Date().getTime();
console.log((endTime - startTime) / 10000);

// Callback function invoked once the file is read
function fileIsRead(err, contents) {
    sumN(contents);
    console.log('File read and calculation done');
}

fs.readFile("targetnos.txt", 'utf8', fileIsRead);

// This will get logged since fileIsRead is async
// and will take its own sweet time
// console.log continues on and later we will see
// the file read message show up much much later
console.log('lets wait for file read to happen and sum calc - program over here');

// The output is something like:
// logs....
// final log about program ends - the last line
// log about file read getting over (callback invokved for fileIsRead)

/*
 * Output:
 * ---------
 * 4999999950000000
 * 0.0133
 * lets wait for file read to happen and sum calc - program over here
 * 499500
 * File read and calculation done
 * 
 */