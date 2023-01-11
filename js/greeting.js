const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const grettingMsg = document.querySelector("#greeting-msg");

const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault();

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);

    showGreetingMsg();
    printGreetingMsg();
    hideLoginForm();
}
function showGreetingMsg() {
    grettingMsg.classList.remove(HIDDEN_CLASSNAME);
}
function printGreetingMsg() {
    const username = localStorage.getItem(USERNAME_KEY);
    grettingMsg.innerHTML = `Hello ${username}`;
}
function hideLoginForm() {
    loginForm.classList.add(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

