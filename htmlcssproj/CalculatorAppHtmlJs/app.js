const inputValue = document.getElementById("inputValue");
const buttons = document.querySelectorAll("button");
let currentValue = "";

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const value = event.target.value;
        if (value === 'CE') {
            inputValue.value = '';
            currentValue = '';
        }
        else if (value === "=") {
            try {
                const result = math.evaluate(inputValue.value);
                inputValue.value = result;
                currentValue = result.toString();
            }
            catch (error) {
                inputValue.value = 'Error'
                currentValue = '';
            }
        }

        else {
            checkInput(value)
        }
    })


})

const checkInput = (value)=> {
    if (currentValue === "" && value === "0") {
        return;
    }

    if (currentValue === "0" && value === "0") {
        currentValue = value;
    }
    else {
        currentValue += value;
    }
    inputValue.value = currentValue;
}

//save the result
//remove a leading zero if a non zero digit is entered
//append the value to current input
//update the input field
