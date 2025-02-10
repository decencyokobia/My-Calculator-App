const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function calculate(){

    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}

function clearDisplay(){
    display.value = display.value.slice(0, -1);
}

const mytime = document.getElementById('timer');
mytime.onclick = myFunction;

function myFunction(){
   setInterval(() => {
    mytime.innerHTML = Date();
    }, 1000);
};


function percentage(){
    display.value *= 1 / 100;
}

function square(){
    display.value *= display.value;
}

function squareRoot(){
    display.value = Math.sqrt(display.value);
}