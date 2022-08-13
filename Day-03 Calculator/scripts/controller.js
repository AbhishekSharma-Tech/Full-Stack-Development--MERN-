const allBtns = ["AC", "%", "DEL", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+", "00", "0", ".", "="];
for(let i=0; i<allBtns.length; i = i+1){
    const allBtn = document.createElement('button');
    if(isNaN(allBtns[i]) && allBtns[i] != "."){
        if(allBtns[i] == "AC"){
            allBtn.className = "btn btn-danger all-clear";
            allBtn.innerText = allBtns[i];
        }
        else if(allBtns[i] == "DEL"){
            allBtn.className = "btn btn-warning delete";
            allBtn.innerText = allBtns[i];
        }
        else if(allBtns[i] == "="){
            allBtn.className = "btn btn-success equals";
            allBtn.innerText = allBtns[i];
        }
        else {
            allBtn.className = "btn btn-info numOp";
            allBtn.innerText = allBtns[i];
        }
    }
    else {
        allBtn.className = "btn btn-secondary numOp";
        allBtn.innerText = allBtns[i];
    }
    document.querySelector(".calculator-grid").appendChild(allBtn);
}


const numberButtons = document.querySelectorAll('.numOp')
const operationButtons = document.querySelectorAll('.operation')
const equalsButton = document.querySelector('.equals')            
const deleteButton = document.querySelector('.delete')            
const allClearButton = document.querySelector('.all-clear')     
const previousOperandTextElement = document.querySelector('.previous-operand')    
const currentOperandTextElement = document.querySelector('.current-operand')      
  

const calculator = new Claculator(previousOperandTextElement, currentOperandTextElement)


numberButtons.forEach(button => {       
    button.addEventListener('click', () => {        
        calculator.appendNumber(button.innerText)       
        calculator.updateDisplay()      
    })
})


equalsButton.addEventListener('click', button => {
    calculator.compute()        
    calculator.updateDisplay()
})



allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})



deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})
