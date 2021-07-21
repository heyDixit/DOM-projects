const counterNumber = document.querySelector('.counter-number');
const decrease = document.querySelector('.decrease');
const reset = document.querySelector('.reset');
const increase = document.querySelector('.increase');

let c=0;
decrease.addEventListener('click', function(){
    c-=1;
    counterNumber.innerHTML = c;
})
reset.addEventListener('click', function(){
    c=0;
    counterNumber.innerHTML = c;
})
increase.addEventListener('click', function(){
    c+=1;
    counterNumber.innerHTML = c;
})
