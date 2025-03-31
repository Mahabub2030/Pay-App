document
  .getElementById("cashOut-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = getInputFieldIdValueById("input-fild-cashOut");
    const cashoutPinNumber = getInputFieldIdValueById("input-fild-cashOutPin");

      console.log("cash out btn clieked", cashOut, cashoutPinNumber);
      if (isNaN(cashOut)) {
          alert('falid cahsOut')
          return
      }

    if (cashoutPinNumber === 12345) {
        const balance = getTextInputValueById("curren-amount");
        if (cashOut > balance) {
            alert('No have money')
            return
        }
        

      const TotalBalance = balance - cashOut;
      document.getElementById("curren-amount").innerText = TotalBalance;
        console.log(balance);

        //   add to transtion histroy
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class = "text-2xl font-bold">cash Out</h4>
        <p>${cashOut} withraw. New Balance ${TotalBalance} </p>
        `;
        document.getElementById("transaction-content").appendChild(div);
        


    } else {
      alert("No Have Money");
    }
  });

