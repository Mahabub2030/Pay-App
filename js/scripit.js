document.getElementById('add-btn').addEventListener('click',function(event){
    event.preventDefault();
    console.log('btn');

// best learing prictise
    // const inputFild = parseFloat(document.getElementById('input-fild-amount').value);
    // const inpuPin = document.getElementById('input-fild-pin').value;
    // const balance = parseFloat(document.getElementById('curren-amount').innerText);

    // const newBalance = inputFild +balance;

    // document.getElementById('curren-amount').innerText = newBalance;


    // console.log(inputFild, inpuPin ,balance)

    const addMoney = getInputFildValueById('input-fild-amount');
    const inputPin = getInputFildValueById('input-fild-pin');
    console.log(addMoney,inputPin)
})