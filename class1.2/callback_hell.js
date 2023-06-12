
function medicine2Get() {
    console.log("medicine 2 received")
}

function medicine1Get() {
    console.log("medicine 1 received");
    setTimeout(medicine2Get, 2000)
}

setTimeout(medicine1Get, 3000);