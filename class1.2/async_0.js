
let counter = 1;
let counter2 = 1;

// keep printing value of counter
function printCounter() {
    console.clear();
    console.log(counter);
    counter = counter + 1;
}

// calls printCounter every second (1000 in ms)
setInterval(printCounter, 1000);

// the above is async
// the code will reach here and start calculating
// counter2
for (var i = 0; i < 1000; i++) {
    counter2 = counter2 + 1;
}
console.log(counter2);

// if we set the couner2 value from 100 to 1billion
// the js will eat up the cycle calculating counter2
// and printCounter will not get called.
// once counter2 is done with, then printCounter finally
// will get called