//document.getElementById("count-el").innerText = 5;
let countel = document.getElementById("count-el");
let count = 0;
let saveel = document.getElementById("save-el");

function increment() {
    count = count + 1;
    countel.innerText = count;
}

function save() {
    let save = count;
    saveel.innerText += save + "-";
    countel.innerText = 0;
    count = 0;
}

function clearel() {
    saveel.innerText = "Previous entries:";
    countel.innerText = 0;
    count = 0;
}
