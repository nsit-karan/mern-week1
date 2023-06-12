function medicine1Get() {
    return new Promise(function(resolve) {
        setTimeout(resolve, 1000);
    })
}

medicine1Get().then(function())