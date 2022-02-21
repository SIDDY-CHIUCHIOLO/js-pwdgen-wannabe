
const firstName = prompt("What is your name?")
document.getElementById("my-name").innerHTML = firstName;

const lastName = prompt("What is your last name?")
document.getElementById("my-last-name").innerHTML = lastName


const favoriteColor = prompt("What is your favourite colour?")
document.getElementById("my-favorite-color").innerHTML = favoriteColor


const password = firstName + lastName + favoriteColor;
console.log(password);
document.getElementById("my-password").innerHTML = password