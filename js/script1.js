
function alertTextAreaCode() {
    let txt = document.getElementById("text-arr-1").value;
    if (txt != "") {
        alert(txt);
    } else {
    }
}

function setSample1() {
    let txt = document.getElementById("text-arr-1").value;
    document.getElementById("text-arr-1").value=`${txt} Помогииииитееееее !!!!!`;
}

function setSample2() {
    let txt = document.getElementById("text-arr-1").value;
    document.getElementById("text-arr-1").value=`${txt} АААААААААААААААА !!!`;
}

function setSample3() {
    let txt = document.getElementById("text-arr-1").value;
    document.getElementById("text-arr-1").value=`${txt} Как отсюда слезть ???`;
}

function clearTextArea() {
    document.getElementById("text-arr-1").value='';
}

