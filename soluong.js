var amountElement = document.getElementById('amount');
var amount = amountElement.value;
// console.log(amountElement)
// xu ly handlePlus
document.children
function handlePlus(ele){
    var parent = ele.parentElement;
    amountElement = parent.querySelector('#amount')
    amount = amountElement.value;
    console.log(amount)
    amount++
    render(amount); // cap nhap
    totalPrice();
    
}
function handleMinus (ele){
    console.log('aadas')
    
    var parent = ele.parentElement;
    amountElement = parent.querySelector('#amount')
    amount = amountElement.value;
// console.log(amountElement)
    if(amount > 1){
        amount--;
    }
    console.log(amount)
    render(amount);
    totalPrice();
}
amountElement.addEventListener('input',() =>{
    amount = amountElement.value; // cap nhap du lieu ng nhap vao
    amount = parseInt(amount);
    amount = (isNaN(amount)|| amount==0)?1 :amount; // neu la text thi gia tri bang 1 nguoc lai gia tri
    render(amount);
    console.log(amount)
});
function render(amout) {
    amountElement.value = amount
}

function update() {
    
}