
function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text/plain");
    var targetId = event.target.id;
    var targetElement = document.getElementById(targetId);
    var draggedElement = document.getElementById(data);
    if (targetElement.classList.contains("word")) {
        var tempText = targetElement.innerText;
        var tempId = targetElement.id;
        targetElement.innerText = draggedElement.innerText;
        targetElement.id = draggedElement.id;
        draggedElement.innerText = tempText;
        draggedElement.id = tempId;
    } else {
        event.target.appendChild(draggedElement);
    }
}

function verify() {

    const a = document.getElementById("word1").textContent;
    const b = document.getElementById("word2").textContent;
    const c = document.getElementById("word3").textContent;
    const a1 = document.getElementById("word11").textContent;
    const b1 = document.getElementById("word12").textContent;
    const c1 = document.getElementById("word13").textContent;
    const a2 = document.getElementById("word21").textContent;
    const b2 = document.getElementById("word22").textContent;
    const c2 = document.getElementById("word23").textContent;
    
    if( a == "ACCESSABILITY" || a == "POSITIVE_ENGAGEMENT" || a == "TRUST"){
        document.getElementById("word1").style.backgroundColor = "green";
    } else {
        document.getElementById("word1").style.backgroundColor = "orange";
    }
    if( b == "ACCESSABILITY" || b == "POSITIVE_ENGAGEMENT" || b == "TRUST"){
        document.getElementById("word2").style.backgroundColor = "green";
    } else {
        document.getElementById("word2").style.backgroundColor = "orange";
    }
    if( c == "ACCESSABILITY" || c == "POSITIVE_ENGAGEMENT" || c == "TRUST"){
        document.getElementById("word3").style.backgroundColor = "green";
    } else {
        document.getElementById("word3").style.backgroundColor = "orange";
    }
    if( a1 == "CUSTOMER_EXPERIENCE" || a1 == "SUSTAINABILITY" || a1 == "TALENT"){
        document.getElementById("word11").style.backgroundColor = "green";
    } else {
        document.getElementById("word11").style.backgroundColor = "orange";
    }
    if( b1 == "CUSTOMER_EXPERIENCE" || b1 == "SUSTAINABILITY" || b1 == "TALENT"){
        document.getElementById("word12").style.backgroundColor = "green";
    } else {
        document.getElementById("word12").style.backgroundColor = "orange";
    }
    if( c1 == "CUSTOMER_EXPERIENCE" || c1 == "SUSTAINABILITY" || c1 == "TALENT"){
        document.getElementById("word13").style.backgroundColor = "green";
    } else {
        document.getElementById("word13").style.backgroundColor = "orange";
    }
    if( a2 == "LEADERSHIP" || a2 == "QUALITY" || a2 == "RESULTS"){
        document.getElementById("word21").style.backgroundColor = "green";
    } else {
        document.getElementById("word21").style.backgroundColor = "orange";
    }
    if( b2 == "LEADERSHIP" || b2 == "QUALITY" || b2 == "RESULTS"){
        document.getElementById("word22").style.backgroundColor = "green";
    } else {
        document.getElementById("word22").style.backgroundColor = "orange";
    }
    if( c2 == "LEADERSHIP" || c2 == "QUALITY" || c2 == "RESULTS"){
        document.getElementById("word23").style.backgroundColor = "green";
    } else {
        document.getElementById("word23").style.backgroundColor = "orange";
    }
}