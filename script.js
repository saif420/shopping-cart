document.getElementById("phone-plus-button").addEventListener("click",function(){
    const phoneValue = document.getElementById("phone-value").nodeValue;
    phoneValue = parseInt(phoneValue);
    phoneValue++
    document.getElementById("phone-value").value = phoneValue;

    const price = document.getElementById("price-button").innerText;
    price = parseInt(price);
    price = price + 1219;
    document.getElementById("price-button").value = price;

    const subBtn = document.getElementById("sub-btn").innerText;
    subBtn = parseInt(subBtn);
    subBtn = subBtn + 1219;
    document.getElementById("sub-btn").innerText = subBtn;

    const totalBtn = document.getElementById("total-btn").innerText;
    totalBtn = parseInt(totalBtn);
    totalBtn = totalBtn + 1219;
    document.getElementById("total-btn").innerText = totalBtn;
})