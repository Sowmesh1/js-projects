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
const Display=document.getElementById("Display");
let operand1="";
let operand2="";
let operator="";

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
     inputDisplay.innerText="";
     Display.innerText="";
});

equals.addEventListener("click",()=>{
console.log(operand1);
console.log(operand2);
let num1 = Number(operand2);
let num2 = Number(operand1);
if(operator=="+"){
let result = num1+num2;
console.log(result);
Display.append(result);
}
else if(operator=="-"){
    let result = num1-num2;
console.log(result);
Display.append(result);
}

else if(operator=="X"){
    let result = num1*num2;
console.log(result);
Display.append(result);
}

else if(operator=="/"){
    if(num2==0){
        Display.append("Cannot divide by Zero");
    }
    else{
    let result =num1/num2;
console.log(result);
Display.append(result);
    }
}
else if(operator=="^"){
    let result = num1^num2;
console.log(result);
Display.append(result);
}

});

plus.addEventListener("click", ()=>{
operator="+";
operand2=operand1;
operand1=0;
inputDisplay.append("+");
})

minus.addEventListener("click", ()=>{
operator="-";
operand2=operand1;
operand1=0;
inputDisplay.append("-");
})
mult.addEventListener("click", ()=>{
operator="X";
operand2=operand1;
operand1=0;
inputDisplay.append("X");
})
division.addEventListener("click", ()=>{
operator="/";
operand2=operand1;
operand1=0;
inputDisplay.append("/");
})
power.addEventListener("click", ()=>{
operator="^";
operand2=operand1;
operand1=0;
inputDisplay.append("^");
})