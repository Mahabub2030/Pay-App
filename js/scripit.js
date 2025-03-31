document.getElementById("add-btn").addEventListener('click', function (event) {
    event.preventDefault()  
    
    const addMoney = document.getElementById("input-fild-amount").value;
    const addMoneyNumber = parseFloat(addMoney)
    const pinNumber = document.getElementById("input-fild-pin").value;
    console.log(addMoneyNumber,pinNumber)
    
    if (pinNumber === '123456') {
        const TotalAmount = document.getElementById("curren-amount").innerText;
        const TotalAmountNUmber = parseFloat(TotalAmount)
    
        const newBalance = addMoneyNumber + TotalAmountNUmber
        document.getElementById("curren-amount").innerText = newBalance;
        
    } else {
        alert('Your passwrod is wrong')
    }
});
