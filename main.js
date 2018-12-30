var wallet = [];

document.getElementById('run-btn').onclick = function() {
  var inputString = document.getElementById('text-field').value;
  var resultNumber = parseInt(inputString);
  wallet.push(resultNumber);
  console.log(wallet);  


  var maxNum = 0;
  var sum = 0;
  for (i = 0; i < wallet.length; i++) {
    sum = sum + wallet[i];
    if (maxNum < wallet[i]) {
      maxNum = wallet[i];
    }
  }
  console.log("Max coin: " + maxNum);
  console.log("Total in wallet: " + sum + " cents");
};
