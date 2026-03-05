const num1=document.getElementById("1");
const num2=document.getElementById("2");
const num3=document.getElementById("3");
const num4=document.getElementById("4");
const num5=document.getElementById("5");
const num6=document.getElementById("6");
const num7=document.getElementById("7");
const num8=document.getElementById("8");
const num9=document.getElementById("9");
const num0=document.getElementById("zero");
const mult=document.getElementById("mult");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const division=document.getElementById("division");
const power=document.getElementById("power");
const clear=document.getElementById("clear");
const point=document.getElementById("point");
const equals=document.getElementById("equals");

const inputDisplay=document.getElementById("inputDisplay");
const Display=document.getElementById("Dispaly");
let operand1=0;
let operand2;
let operator;

num1.addEventListener("click",()=>{
    inputDisplay.append(1);
    operand1+="1";
});


num2.addEventListener("click",()=>{
    inputDisplay.append("2");
    operand1+="2";
});

num3.addEventListener("click",()=>{
    inputDisplay.append("3");
    operand1+="3";
});

num4.addEventListener("click",()=>{
    inputDisplay.append("4");
    operand1+="4";
});

num5.addEventListener("click",()=>{
    inputDisplay.append("5");
    operand1+="5";
});

num6.addEventListener("click",()=>{
    inputDisplay.append("6");
    operand1+="6";
});

num7.addEventListener("click",()=>{
    inputDisplay.append("7");
    operand1+="7";
});

num8.addEventListener("click",()=>{
    inputDisplay.append("8");
    operand1+="8";
});

num9.addEventListener("click",()=>{
    inputDisplay.append("9");
    operand1+="9";
});

num0.addEventListener("click",()=>{
    inputDisplay.append("0");
    operand1+="0";
});

clear.addEventListener("click",()=>{
     operand1=0;
     inputDisplay.remove();
});

equals.addEventListener("click",()=>{
console.log(operand1);
})