const container = document.querySelector(".container"),
qrInput = container.querySelector(".form input"),
generatorBtn = container.querySelector(".form button");
qrImage = container.querySelector(".qr-code img");


// default qr Code;
let qrValue = "create your qrcode";
qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;


generatorBtn.addEventListener("click", () =>{
    let qrValue = qrInput.value;
    if(!qrValue) return;
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

})
