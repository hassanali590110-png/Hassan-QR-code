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
