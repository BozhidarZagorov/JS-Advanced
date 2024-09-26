function subtract() {
    // const firstNum=document.querySelector('#firstNumber')
    // const SecondNum=document.querySelector('#secondNumber')
    const [firstNum,SecondNum]=document.querySelectorAll('#wrapper input[type="text"]')

    const resultEl=document.querySelector('#result')

    resultEl.textContent=Number(firstNum.value) - Number(SecondNum.value)
}