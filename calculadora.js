function calculate(type, valueType) {
  let numberDisplayed = document.getElementById('display')

  if (type === 'action') {
    if (valueType === 'ac') {
      numberDisplayed.value = ''
    } else if (valueType === 'del') {
      numberDisplayed.value = numberDisplayed.value.slice(0, -1)
      // str = numberDisplayed.value
      // str2 = str.slice(0, -1)
      // numberDisplayed.value = str2
    } else if (valueType === '=') {
      numberDisplayed.value = eval(numberDisplayed.value)
    } else {
      numberDisplayed.value += valueType
    }
  } else if (type === 'value') {
    numberDisplayed.value += valueType
  }
}
