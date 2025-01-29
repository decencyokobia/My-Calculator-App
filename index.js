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
    display.value = "";
}

const timer = document.getElementById('timer');

timer.addEventListener('click', function myFunction(){
   this.innerHTML = Date();
})


function percentage(){
    display.value *= 1 / 100;
}

function square(){
    display.value *= display.value;
}

function pie(){
    display.value *= 3.14;
}