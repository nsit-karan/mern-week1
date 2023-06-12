var users = ["ron", "hermione", "harry"];
console.log(users);

// iterate over elements of the array
console.log("Elements present in the array ");
for (var i = 0; i < users.length; i++) {
    console.log(users[i]);
}

// array of objects
var users = [
    {name: "ron", age: 21},
    {name: "harry", age: 22}
];

// iterate over this array
for (var i = 0; i < users.length; i++) {
    console.log(users[i].name + "'s age is " + users[i].age);
}

// function and dump all users
function printAllUsers(users) {
    for (var i = 0; i < users.length; i++) {
        const toLog = users[i].name + "'s age is " + users[i].age;
        console.log(toLog)
    }
}

printAllUsers(users);
