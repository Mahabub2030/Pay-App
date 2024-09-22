document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    

    // const addMoney = document.getElementById('input-amount').value;
    // const addMoneyNumber = parseFloat(addMoney);
    // const pinNumber = document.getElementById('input-pin').value;
    // console.log(addMoneyNumber,pinNumber);
    // if(pinNumber  === '1234'){
    //     console.log('you are succed')
    //     const balance = document.getElementById('current-balance').innerText;
    //     const balanceNumber = parseFloat(balance);

    //     const newbalance = balanceNumber + addMoneyNumber;

    //     document.getElementById('current-balance').innerText = newbalance;
    // }
    // else{
    //     alert('you pin is wrong ')
    // }  
});

// cash out section start here

document.getElementById('btn-casout-money').addEventListener('click', function(event) {
    event.preventDefault()

    const csasOutMoney = document.getElementById('input-amount-cashout').value;
    const cashOutNumber = parseFloat(csasOutMoney);
    const pinNumber = document.getElementById('input-pin-cashout').value;

    console.log(csasOutMoney, pinNumber)

    if(pinNumber === '4567'){
        console.log('Your Sucseed')

        const balance = document.getElementById('current-balance').innerText;
        const balanceNumber = parseFloat(balance);
        const CurrenBalance = balanceNumber - cashOutNumber;

        document.getElementById('current-balance').innerText = CurrenBalance;

    }
    else{
        alert('Warning Your Falid')
    }

});

// feuther section start here

// document.getElementById('btn-cashout-money').addEventListener('click', function(e){
//     e.preventDefault()
//     console.log("btn-add-balance ckile")
//     document.getElementById('cashout-form').classList.remove('hidden');
//     document.getElementById('add-money-from').classList.add('hidden');
// });


// document.getElementById('btn-balance-add').addEventListener('click', function() {
//     document.getElementById('add-money-from').classList.remove('hidden');
//     document.getElementById('cashout-form').classList.add('hidden');
// });




