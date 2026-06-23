function generateQR(){

    let text=document.getElementById("qrText").value;

    let color=document.getElementById("qrColor").value;

    let qrBox=document.getElementById("qrcode");

    if(text.trim()===""){
        alert("Please enter text or link");
        return;
    }

    qrBox.innerHTML="";

    new QRCode(qrBox,{
        text:text,
        width:220,
        height:220,
        colorDark:color,
        colorLight:"#ffffff"
    });

    saveHistory(text);
}

function clearQR(){

    document.getElementById("qrText").value="";

    document.getElementById("qrcode").innerHTML="";
}

function downloadQR(){

    let img=document.querySelector("#qrcode img");

    if(img){

        let a=document.createElement("a");

        a.href=img.src;

        a.download="Hassan-QR-Code.png";

        a.click();

    }else{

        alert("Generate QR First");
    }
}

function copyLink(){

    let text=document.getElementById("qrText").value;

    if(text===""){
        alert("Nothing to copy");
        return;
    }

    navigator.clipboard.writeText(text);

    alert("Link Copied!");
}

function toggleMode(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        localStorage.setItem("theme","light");
    }else{
        localStorage.setItem("theme","dark");
    }
}

function saveHistory(text){

    let history=JSON.parse(localStorage.getItem("qrHistory")) || [];

    history.unshift(text);

    history=history.slice(0,5);

    localStorage.setItem("qrHistory",JSON.stringify(history));

    showHistory();
}

function showHistory(){

    let list=document.getElementById("history");

    list.innerHTML="";

    let history=JSON.parse(localStorage.getItem("qrHistory")) || [];

    history.forEach(item=>{

        let li=document.createElement("li");

        li.textContent=item;

        list.appendChild(li);
    });
}

window.onload=function(){

    let theme=localStorage.getItem("theme");

    if(theme==="light"){
        document.body.classList.add("light-mode");
    }

    showHistory();
}
