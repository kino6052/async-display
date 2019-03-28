const test = document.createElement("div");
test.setAttribute("id", "test");
test.innerText = "Test";

let delay = 0;
const delayMatch = window.location.search.match(/(?<=delay=)\d+/g);
if (delayMatch && delayMatch[0]) {
    delay = Number(delayMatch[0]);
}

setTimeout(() => {
    document.getElementById("root").appendChild(test)
}, delay * 1000);