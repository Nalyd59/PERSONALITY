function select_img(value) {
    if (value === 'Johnson') {
        document.getElementById('ok1').style.visibility = "visible";
        document.getElementById('p1').style.visibility = "visible";
        document.getElementById('p1').style.left = "140px";
    }else if(value === 'Diesel'){
        document.getElementById('ok2').style.visibility = "visible";
        document.getElementById('p2').style.visibility = "visible";
        document.getElementById('p2').style.left = "140px";
    }else if(value === 'Imen'){
        document.getElementById('ok3').style.visibility = "visible";
        document.getElementById('p3').style.visibility = "visible";
        document.getElementById('p3').style.left = "140px";
    }else if(value === 'Jessica'){
        document.getElementById('ok4').style.visibility = "visible";
        document.getElementById('p4').style.visibility = "visible";
        document.getElementById('p4').style.left = "140px";
    }else if(value === 'Zita'){
        document.getElementById('ok5').style.visibility = "visible";
        document.getElementById('p5').style.visibility = "visible";
        document.getElementById('p5').style.left = "140px";
    }
}
