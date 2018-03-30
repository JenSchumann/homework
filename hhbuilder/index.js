// your code goes here ...
// console.log('hhbuilder talking through js');

//task 1: Validate data entry (age is required and > 0, relationship is required)


const validateDataEntry = () => {

  const n = document.getElementsByTagName("age");
  const target = document.querySelector('#builder-div');
  const div = document.createElement('div');
  const x = parseInt(n);

  if(x == "") {
    // const div = document.createElement('div');

    div.innerHTML = 'Error Age must be submitted.';
    target.parentNode.insertBefore( div, target.nextSibling );
    // alert('Error Age must be submitted.');
    return false;
  } else if
    (isNaN(x) || x <= 0) {
      // const div = document.createElement('div');
      div.innerHTML = 'Invalid age. Please complete form appropriately.';
      // target.parentNode.insertBefore( div, target.nextSibling );
      // alert('Invalid age. Please complete form appropriately.');
      return false;
  } else {
    // const div = document.createElement('div');
      div.innerHTML = 'Input OK';
      // target.parentNode.insertBefore( div, target.nextSibling );
      };
      // document.getElementById("demo").innerHTML = text;
  };

validateDataEntry();
