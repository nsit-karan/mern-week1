const fs = require('fs')

// file contents need to be stored here
contents = ""

// Sample code to simulate some logic which needs cpu cycles
function sumM(m) {
    let sum = 0
    for (let i = 0; i < m; i++) {
        sum += i
    }
    console.log(sum)
}

sumM(100000);

// callback triggered when file is read
function fileIsRead(err, file_content) {
    contents = file_content;
    console.log("File read and assigned correctly, contents are : " + contents);
}

fs.readFile("targetnos.txt", 'utf-8', fileIsRead);

// contents might/might not be assigned yet since readFile takes some time
// the code itself isnt correct here - contents shouldn't be accessed till
// its initialized. Need to figure out whats the best enterprise way to
// write such code
console.log('continuing on with the code , contents are : ' + contents);
sumM(100000);


/* Output
 * ---------------------- 
 * mern-week1 % node threads_incorrect.js
 * 4999950000
 * continuing on with the code , contents are :
 * 4999950000
 * File read and assigned correctly, contents are : 1000
 * mern-week1 %
 * 
 */

