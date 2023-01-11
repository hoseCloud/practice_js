const clock = document.querySelector("#clock");

function clocking() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    const seconds = new Date().getSeconds();

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

clocking();
setInterval(clocking, 1000);