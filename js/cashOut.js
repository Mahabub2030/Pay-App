document
  .getElementById("cashOut-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = getInputFieldIdValueById("input-fild-cashOut");
    const cashoutPinNumber = getInputFieldIdValueById("input-fild-cashOutPin");

    console.log("cash out btn clieked", cashOut, cashoutPinNumber);

    if (cashoutPinNumber === 123456) {
      const balance = getTextInputValueById("curren-amount");
      const TotalBalance = balance - cashOut;
      document.getElementById("curren-amount").innerText = TotalBalance;
      console.log(balance);
    } else {
      alert("No Have Money");
    }
  });

