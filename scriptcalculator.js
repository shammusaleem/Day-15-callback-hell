document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const memoryKey = 'calculatorMemory';

    // Initialize memory if not already set
    if (!localStorage.getItem(memoryKey)) {
        localStorage.setItem(memoryKey, '0');
    }

    // Function to append a number to the display
    window.appendNumber = function(number) {
        display.value += number;
    }

    // Function to append an operator to the display
    window.appendOperator = function(operator) {
        display.value += operator;
    }

    // Function to clear the display
    window.clearDisplay = function() {
        display.value = '';
    }

    // Function to calculate the result
    window.calculateResult = function() {
        try {
            display.value = eval(display.value);
        } catch {
            alert("Invalid Expression");
        }
    }

    // Function to clear memory
    window.memoryClear = function() {
        localStorage.setItem(memoryKey, '0');
    }

    // Function to add to memory
    window.memoryAdd = function() {
        let memoryValue = parseFloat(localStorage.getItem(memoryKey));
        let currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            memoryValue += currentValue;
            localStorage.setItem(memoryKey, memoryValue.toString());
        }
        clearDisplay();
    }

    // Function to subtract from memory
    window.memorySubtract = function() {
        let memoryValue = parseFloat(localStorage.getItem(memoryKey));
        let currentValue = parseFloat(display.value);
        if (!isNaN(currentValue)) {
            memoryValue -= currentValue;
            localStorage.setItem(memoryKey, memoryValue.toString());
        }
        clearDisplay();
    }

    // Event listener for keyboard input
    document.addEventListener('keydown', function(event) {
        const key = event.key;
        if (/[0-9]/.test(key)) {
            appendNumber(key);
        } else if (/[+\-*/]/.test(key)) {
            appendOperator(key);
        } else if (key === 'Enter') {
            calculateResult();
        } else if (key === 'Escape') {
            clearDisplay();
        } else {
            alert("Only numbers and basic operators are allowed");
        }
    });
});
