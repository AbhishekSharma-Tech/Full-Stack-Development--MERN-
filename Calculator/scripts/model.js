class Claculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()        
    }


    clear() {
        this.currentOperand = ''        
        this.previousOperand = ''        
    }

   
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)       
    }

    
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return     
        this.currentOperand = this.currentOperand.toString() + number.toString()        
    }

    
    compute() {
        let computation          
        const current = this.currentOperand
        
        computation = eval(current)  

        this.previousOperand = this.currentOperand
        this.currentOperand = computation        
    }


    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
    }
}
