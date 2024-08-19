const countEl = document.getElementById("count");
let count = 0;
function increaseBtn(){
    count = count + 1;
    countEl.innerHTML = count;
}

function decreaseBtn(){
    count = count - 1;
    countEl.innerHTML = count;
}