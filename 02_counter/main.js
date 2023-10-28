let counterElement = document.getElementById("counterValue");

function onDecrease(){
    let previousValue = counterElement.textContent;
    let updatedValue = parseInt(previousValue)-1;
    if(updatedValue >0){
        counterElement.style.color = "green";
    }
    else if(updatedValue <0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color = "black";
    }
    counterElement.textContent = updatedValue;
}

function onIncrease(){
    let previousValue = counterElement.textContent;
    let updatedValue = parseInt(previousValue)+1;
    if(updatedValue >0){
        counterElement.style.color = "green";
    }
    else if(updatedValue <0){
        counterElement.style.color = "red";
    }
    else{
        counterElement.style.color = "black";
    }
    counterElement.textContent = updatedValue;
}

function onReset(){
    let value = 0;
    counterElement.textContent = value;
    counterElement.style.color = "black";
}