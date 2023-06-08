const inputBox = document.getElementById("input-box");
const lcr = document.getElementById("lc");

function addTask(){
    if(inputBox.value ===''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        lcr.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    restore();
}
lcr.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        restore();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        restore();
    }
}, false);
function restore(){
    localStorage.setItem("data",lcr.innerHTML);
}
function displayTask(){
    lcr.innerHTML= localStorage.getItem("data");
}
displayTask();