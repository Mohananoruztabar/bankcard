const cardInputs = document.querySelector('.card-number-input');
const cardNumberBox = document.querySelector('.card-number-box');
const cardName = document.querySelector('.card-holder-name');
const cardHolderInput = document.querySelector('.card-holder-input');
const expMonthBox = document.querySelector('.exp-month');
const monthInput = document.querySelector('.month-input');
const expYearBox = document.querySelector('.exp-year');
const yearInput = document.querySelector('.year-input');
const cvvInput = document.querySelector('.cvv-input')
const myF = document.querySelector('.front')
const myB = document.querySelector('.back')
const cvvBox = document.querySelector('.cvv-box');

cardInputs.oninput =()=>{
    cardNumberBox.innerText = cardInputs.value
}
cardHolderInput.oninput =()=>{
    cardName.innerText = cardHolderInput.value
}
monthInput.oninput =()=>{
    expMonthBox.innerText = monthInput.value
}
cvvInput.addEventListener('mouseenter', ()=>{
    myF.style.transform = 'perspective(1000px)rotateY(-180deg)';
    myB.style.transform = 'perspective(1000px)rotateY(0deg)';
})
cvvInput.addEventListener('mouseleave', ()=>{
    myF.style.transform = 'perspective(1000px)rotateY(0deg)';
    myB.style.transform = 'perspective(1000px)rotateY(180deg)';
})
cvvInput.oninput =() =>{
    cvvBox.innerText = cvvInput.value
}

