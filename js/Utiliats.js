// function getInputFieldIdValueById() {
//     console.log('will get value by id')

//     const addMoney = document.getElementById("input-fild-amount").value;
// }
// inoust fild
function getInputFieldIdValueById(id) {
  const inputValue = parseFloat(document.getElementById(id).value);
  return inputValue;
}
// text fild get valuse

function getTextInputValueById(id) {
    const textValue = parseFloat(document.getElementById(id).innerText);
    return textValue;
}

function showsSectionById(id) {
    document.getElementById("add-money-from").classList.add('hidden');
    document.getElementById("casout-from").classList.add('hidden');
    document.getElementById("transtion-id").classList.add('hidden');

    // show the section with the proved the id
    document.getElementById(id).classList.remove('hidden')
}