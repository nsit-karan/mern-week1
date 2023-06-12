

// standard star patter
// each row prints stars where
// no of starts in that row == row-index
function createPattern(rows) {
    for (var i = 0; i < rows; i++) {
        var rowString = "";
        for (var j = 0; j < i+1; j++) {
            rowString = rowString + "*";
        }
        console.log(rowString);
    }
}
createPattern(5);

console.log("Print double the no of stars now");
// each row should have row-index*2
function starryPattern(rows) {
    for (var i = 0; i < rows; i++) {
        var rowString = "";
        for (var j = 0; j < (i+1); j++) {
            rowString = rowString + "**";
        }
        console.log(rowString);
    }
}
starryPattern(5);

// Let's modularize the above code

