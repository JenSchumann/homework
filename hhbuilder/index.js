// your code goes here ...
// console.log('hhbuilder talking through js');

//task 1: Validate data entry (age is required and > 0, relationship is required)
const validateDataEntry = () => {
  const n = document.forms["builderForm"]["age"].parseInt();
  if(n <= 0) {
    alert("Invalid age. Please complete form appropriately.");
    return false;
  }
}
validateDataEntry();
