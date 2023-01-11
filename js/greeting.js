const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const grettingMsg = document.querySelector("#greeting-msg");
const hiddenDiv = document.querySelector("div.hidden");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

let username = localStorage.getItem("username");

function onLoginSubmit(event) {
    event.preventDefault();

    username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    showContents();
    hideLoginForm();
    printGreetingMsg();
}
function showContents() {
    hiddenDiv.classList.remove(HIDDEN_CLASSNAME);
}
function printGreetingMsg() {
    const username = localStorage.getItem(USERNAME_KEY);
    grettingMsg.innerHTML = `Hello ${username}`;
}
function hideLoginForm() {
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

if(username !== null) {
    showContents();
    hideLoginForm();
    printGreetingMsg();
}
else {
    loginForm.addEventListener("submit", onLoginSubmit);
}