function medicine1Get() {
    console.log("medicie 1 received");
}

function medicine2Get() {
    console.log("medicie 2 received");
}

setTimeout(medicine1Get, 1000)
setTimeout(medicine2Get, 2000)

// the above goes async (kind of parallel)
// the timers start in parallel
// the second timer doesnt wait for the first timer
// to finish.
// total - it takes 3seconds

// look at the callbackhell js file
// which will make the above one after the other
// and take 5 seconds