// console.log("Hello World!")


// Accept user input
// Validate user input
// Display user input
// Compute the expression


document.querySelector('.calculatorButtons').addEventListener('click', event => {
  //console.log(event)
  const {target} = event
  //console.log(target)
  if(target.matches('button')) {
    const {value} = target
    // console.log(value)
    calculator.grabInput(value)
  } else {
    return
  }
})

const calculator = {
  displayString: '',
  prevTotal: null,
  hasDecimal: false,



  grabInput(value) {
    switch (value) {
      case '=':
        //display calculated value
        this.calculateExpression(this.displayString)
        break
      case '.':
        //handle decimal operation
        if (this.hasDecimal) {
          return
        } else if (this.displayString === '0') {
          this.hasDecimal = true
          this.addText('.')
        } else {
          this.hasDecimal = true
          this.addText(value)
        }
        break
      case 'AC':
        //Clear all display values and past stored values
        this.clearAll()
        break
      default:
        //add text to the display
        this.addText(value)
        break
    }
  },

  addText(inButton) {
    if (this.displayString === '0') {
      // this.displayString = ''
      if (inButton === '0') {
        return
      }
    } else if (this.prevTotal !== null) {
      this.displayString = this.prevTotal
      this.displayString = '0'
    }
    if( isNaN(+inButton) && isNaN(+(this.displayString.slice(-1)))) {
      return
    }
    if(inButton === '+' || inButton === '-' || inButton === '*' || inButton === '/' ) {
      this.hasDecimal = false
//      if (this.displayString === '0' || this.displayString === '') {
//        return
//      }
    }
    this.displayString += inButton
    this.displayOutput(this.displayString)
  },  

  displayOutput(valueToBeDisplayed) {
    document.querySelector('.textDisplay').innerText = valueToBeDisplayed
  },

  calculateExpression(expression) {
    let sanitizedExpression = this.checkLastDecimal(expression)
    // let sanitizedExpression = expression
    let result = Function("return " + sanitizedExpression)()
    if (!Number.isInteger(result)) {
      result = result.toPrecision(8)
    }
    this.displayOutput(result)
    this.displayString = result.toString()
  },

  checkLastDecimal (expression) {
    if(expression.slice(-1) === '.') {
      expression += '0'
    }
    return expression
  },

  clearAll() {
    this.prevTotal = null
    this.displayString = ''
    this.hasDecimal = false
    this.displayOutput(this.displayString)
  }
}