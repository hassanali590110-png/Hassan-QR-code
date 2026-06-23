function generateQR() {

    let text = document.getElementById("qrText").value;

    let qrBox = document.getElementById("qrcode");


    if (text.trim() === "") {

        alert("Please enter text or link");

        return;

    }


    // Old QR remove

    qrBox.innerHTML = "";


    // Create New QR

    new QRCode(qrBox, {

        text: text,

        width: 200,

        height: 200

    });


}



function clearQR() {

    document.getElementById("qrText").value = "";

    document.getElementById("qrcode").innerHTML = "";

}



function downloadQR() {

    let qrImage = document.querySelector("#qrcode img");


    if (qrImage) {

        let a = document.createElement("a");

        a.href = qrImage.src;

        a.download = "Hassan-QR-Code.png";

        a.click();

    }

    else {

        alert("Please generate QR first");

    }

}



function copyLink() {

    let text = document.getElementById("qrText").value;


    if (text.trim() === "") {

        alert("Nothing to copy");

        return;

    }


    navigator.clipboard.writeText(text);


    alert("Link copied successfully!");

}
function toggleMode() {

```
document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){
    localStorage.setItem("theme","light");
} else {
    localStorage.setItem("theme","dark");
}
```

}

window.onload = function(){

```
let theme = localStorage.getItem("theme");

if(theme === "light"){
    document.body.classList.add("light-mode");
}

showHistory();
```

};

function saveHistory(text){

```
let history = JSON.parse(localStorage.getItem("qrHistory")) || [];

history.unshift(text);

history = history.slice(0,5);

localStorage.setItem("qrHistory", JSON.stringify(history));

showHistory();
```

}

function showHistory(){

```
let list = document.getElementById("history");

if(!list) return;

list.innerHTML = "";

let history = JSON.parse(localStorage.getItem("qrHistory")) || [];

history.forEach(item => {

    let li = document.createElement("li");

    li.textContent = item;

    list.appendChild(li);

});
```

}
