//Calculator functionality
// previousOperand = stores the last number
// currentOperand = stores the current number
// previousOperator = stores the previous operator
// currentOperator = stores the current operator
// 
// execute = triggers the execution
// all clear = clears all stored values
// 
// operatorClicked?
// is it repeated? ignore repeated click.
// if not repeated, save the currentOperator.
// check if current and previous operands exist, compute the previous expression and store in memory -> previousOperand
// clear currentOperand
// previousOperator = currentOperator
// clear currentOperator
// 
// keyClicked?
// is it first key and value is zero? - do nothing
// is it decimal? does the currentValue already have a decimal? if not, append key to current value
// 
// execute:
// if currentValue is cleared, display previousValue
// else display currentValue, previousOperator, previousValue
// clear currentValue, previousOperator
// set previousValue = output
// 
// all clear:
// clear currentValue, previousValue, currentOperator, previousOperator
// console.log("Hello World!")

document.querySelectorAll('.operand').addEventListener('click', event => {
  const {target} = event
  const {value} = target
  calculator.fetchOperandKey(value)
})

document.querySelectorAll('.operator').addEventListener('click', event => {
  const {target} = event
  const {value} = target
  calculator.fetchOperatorKey(value)
})

document.querySelector('.equals').addEventListener('click', event => {
  calculator.calculate()
})

const calculator = {
  currentOperand : '',
  previousOperand : '0',
  currentOperator : '',
  previousOperator : '',



  fetchOperandKey(value) {
    if (value === '.' && this.currentOperand === '') {
      return
    }
    if (this.currentOperand === '' && value === '0') {
    } else if(this.currentOperand === '0') {
    }
    this.currentOperand += value
  },
  fetchOperatorKey(value) {},
  calculate() {},
  displayOutput(outputString) {},
  clearAll() {}
}




// document.querySelector('.calculatorButtons').addEventListener('click', event => {
//   //console.log(event)
//   const {target} = event
//   //console.log(target)
//   if(target.matches('button')) {
//     const {value} = target
//     // console.log(value)
//     calculator.grabInput(value)
//   } else {
//     return
//   }
// })
// 
// const calculator = {
//   displayString: '',
//   prevTotal: null,
//   hasDecimal: false,
// 
// 
// 
//   grabInput(value) {
//     switch (value) {
//       case '=':
//         //display calculated value
//         this.calculateExpression(this.displayString)
//         break
//       case '.':
//         //handle decimal operation
//         if (this.hasDecimal) {
//           return
//         } else if (this.displayString === '0') {
//           this.hasDecimal = true
//           this.addText('.')
//         } else {
//           this.hasDecimal = true
//           this.addText(value)
//         }
//         break
//       case 'AC':
//         //Clear all display values and past stored values
//         this.clearAll()
//         break
//       default:
//         //add text to the display
//         this.addText(value)
//         break
//     }
//   },
// 
//   addText(inButton) {
//     if (this.displayString === '0') {
//       // this.displayString = ''
//       if (inButton === '0') {
//         return
//       }
//     } else if (this.prevTotal !== null) {
//       this.displayString = this.prevTotal
//       this.displayString = '0'
//     }
//     if( isNaN(+inButton) && isNaN(+(this.displayString.slice(-1)))) {
//       return
//     }
//     if(inButton === '+' || inButton === '-' || inButton === '*' || inButton === '/' ) {
//       this.hasDecimal = false
// //      if (this.displayString === '0' || this.displayString === '') {
// //        return
// //      }
//     }
//     this.displayString += inButton
//     this.displayOutput(this.displayString)
//   },  
// 
//   displayOutput(valueToBeDisplayed) {
//     document.querySelector('.textDisplay').innerText = valueToBeDisplayed
//   },
// 
//   calculateExpression(expression) {
//     let sanitizedExpression = this.checkLastDecimal(expression)
//     // let sanitizedExpression = expression
//     let result = Function("return " + sanitizedExpression)()
//     if (!Number.isInteger(result)) {
//       result = result.toPrecision(8)
//     }
//     this.displayOutput(result)
//     this.displayString = result.toString()
//   },
// 
//   checkLastDecimal (expression) {
//     if(expression.slice(-1) === '.') {
//       expression += '0'
//     }
//     return expression
//   },
// 
//   clearAll() {
//     this.prevTotal = null
//     this.displayString = ''
//     this.hasDecimal = false
//     this.displayOutput(this.displayString)
//   }
// }