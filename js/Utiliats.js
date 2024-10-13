
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const InputNumber = parseFloat(inputValue);


    console.log(inputValue, InputNumber)
    return InputNumber;
};

function getTextFieldValueById (id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}