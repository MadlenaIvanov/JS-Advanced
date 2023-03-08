function subtract() {
    const firstNum = Number(document.getElementById('firstNumber').value);
    const secondNum = Number(document.getElementById('secondNumber').value);

    // console.log(firstNum);
    // console.log(secondNum);

    const result = Number(firstNum - secondNum);

    document.getElementById('result').textContent = result;
}