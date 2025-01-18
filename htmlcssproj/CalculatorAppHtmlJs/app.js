const inputValue = document.getElementById("inputValue");
const buttons = document.querySelectorAll("button");

buttons.forEach((button)=>{
    button.addEventListener('click', (event)=>{
        const value = event.target.value;
        console.log(value);

        if(value === 'CE'){
            inputValue.value = '';
        }
        else if(value === "="){
            try{
        const result = math.evaluate(inputValue.value);
        inputValue.value =  result;
        }
        catch(error){
            inputValue.value = 'Error'
        }
    }
    
    else{
        inputValue.value += value;
    }
})


})

