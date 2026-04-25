

function fidgetClick() {
    let counter = document.getElementById("counter").innerHTML
    let newCounter
    let time = document.getElementById("time").innerHTML

    if (document.getElementById("counter").innerHTML == "0") {
        document.getElementById("time").innerHTML = "time";
    } else {
        document.getElementById("time").innerHTML = "times";
        }
    newCounter = parseInt(counter) + 1;
    document.getElementById("counter").innerHTML = newCounter;
}

function resetClicker() {
    document.getElementById("counter").innerHTML = "0";
    document.getElementById("time").innerHTML = "times";
}