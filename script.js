let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");
let img5 = document.getElementById("img5");

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");

function myfunction(element) {

    if (element.getAttribute("id") === "img1" || element.getAttribute("id") === "btn1") {

        img1.classList.toggle("active");
        img1.querySelector(".on").classList.toggle("active");
        img2.querySelector(".on").classList.remove("active");
        img3.querySelector(".on").classList.remove("active");
        img4.querySelector(".on").classList.remove("active");
        img5.querySelector(".on").classList.remove("active");
        document.getElementById("li1").classList.toggle("active");
        document.getElementById("li2").classList.remove("active");
        document.getElementById("li3").classList.remove("active");
        document.getElementById("li4").classList.remove("active");
        document.getElementById("li5").classList.remove("active");
        document.getElementById("cursor").classList.remove("france");
        document.getElementById("cursor").classList.add("california");

    } else if (element.getAttribute("id") === "img2" || element.getAttribute("id") === "btn2") {

        img2.classList.toggle("active");
        img2.querySelector(".on").classList.toggle("active");
        img1.querySelector(".on").classList.remove("active");
        img3.querySelector(".on").classList.remove("active");
        img4.querySelector(".on").classList.remove("active");
        img5.querySelector(".on").classList.remove("active");
        document.getElementById("li2").classList.toggle("active");
        document.getElementById("li1").classList.remove("active");
        document.getElementById("li3").classList.remove("active");
        document.getElementById("li4").classList.remove("active");
        document.getElementById("li5").classList.remove("active");
        document.getElementById("cursor").classList.remove("france");
        document.getElementById("cursor").classList.add("california");

    }
    else if (element.getAttribute("id") === "img3" || element.getAttribute("id") === "btn3") {

        img3.classList.toggle("active");
        img3.querySelector(".on").classList.toggle("active");
        img2.querySelector(".on").classList.remove("active");
        img1.querySelector(".on").classList.remove("active");
        img4.querySelector(".on").classList.remove("active");
        img5.querySelector(".on").classList.remove("active");
        document.getElementById("li3").classList.toggle("active");
        document.getElementById("li2").classList.remove("active");
        document.getElementById("li1").classList.remove("active");
        document.getElementById("li4").classList.remove("active");
        document.getElementById("li5").classList.remove("active");
        document.getElementById("li5").classList.remove();
        document.getElementById("cursor").classList.remove("california");
        document.getElementById("cursor").classList.add("france");

    }
    else if (element.getAttribute("id") === "img4" || element.getAttribute("id") === "btn4") {

        img4.classList.toggle("active");
        img4.querySelector(".on").classList.toggle("active");
        img2.querySelector(".on").classList.remove("active");
        img3.querySelector(".on").classList.remove("active");
        img1.querySelector(".on").classList.remove("active");
        img5.querySelector(".on").classList.remove("active");
        document.getElementById("li4").classList.toggle("active");
        document.getElementById("li2").classList.remove("active");
        document.getElementById("li3").classList.remove("active");
        document.getElementById("li1").classList.remove("active");
        document.getElementById("li5").classList.remove("active");
        document.getElementById("cursor").classList.remove("france");
        document.getElementById("cursor").classList.add("california");

    }
    else if (element.getAttribute("id") === "img5" || element.getAttribute("id") === "btn5") {

        img5.classList.toggle("active");
        img5.querySelector(".on").classList.toggle("active");
        img2.querySelector(".on").classList.remove("active");
        img3.querySelector(".on").classList.remove("active");
        img4.querySelector(".on").classList.remove("active");
        img1.querySelector(".on").classList.remove("active");
        document.getElementById("li5").classList.toggle("active");
        document.getElementById("li2").classList.remove("active");
        document.getElementById("li3").classList.remove("active");
        document.getElementById("li4").classList.remove("active");
        document.getElementById("li1").classList.remove("active");
        document.getElementById("cursor").classList.remove("california");
        document.getElementById("cursor").classList.add("france");

    }
}

img1.addEventListener("click", () => { myfunction(img1) });

btn1.addEventListener("click", () => { myfunction(img1) });

img2.addEventListener("click", () => { myfunction(img2) });

btn2.addEventListener("click", () => { myfunction(img2) });

img3.addEventListener("click", () => { myfunction(img3) });

btn3.addEventListener("click", () => { myfunction(img3) });

img4.addEventListener("click", () => { myfunction(img4) });

btn4.addEventListener("click", () => { myfunction(img4) });

img5.addEventListener("click", () => { myfunction(img5) });

btn5.addEventListener("click", () => { myfunction(img5) });