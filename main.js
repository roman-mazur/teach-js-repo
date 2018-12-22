document.getElementById('run-btn').onclick = function() {
  var inputString = document.getElementById('text-field').value;
  var resultNumber = parseInt(inputString);
  
  if (resultNumber % 2 == 0 && resultNumber % 3 == 0) {
    console.log("ділиться на 2 і на 3");
  } else if(resultNumber % 2 == 0) {
    console.log("even");
  } else {
    console.log("odd");
  }

  console.log(resultNumber);
};
