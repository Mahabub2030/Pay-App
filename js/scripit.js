document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney = document.getElementById('input-amount').value;

    const addMoneyNumber = parseFloat(addMoney);
    const pinNumber = document.getElementById('input-pin').value;
    console.log(addMoneyNumber,pinNumber);

    if(pinNumber  === '1234'){
        console.log('you are succed')
        const balance = document.getElementById('current-balance').innerText;
        const balanceNumber = parseFloat(balance);

        const newbalance = balanceNumber + addMoneyNumber;

        document.getElementById('current-balance').innerText = newbalance;
    }
    else{
        alert('you pin is wrong ')
    }  
});

// cash out section start here

