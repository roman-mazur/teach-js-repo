var wallet = {
  coins: [],
  banknots: [],
  sum: function() {
    var sum = 0;
    for (i = 0; i < this.coins.length; i++) {
      sum += this.coins[i];
    }
    for (i = 0; i < this.banknots.length; i++) {
      sum += this.banknots[i] * 100;
    }
    return sum;
  }
};

var checkCoinArray = [1, 2, 5, 10, 25, 50, 100];

var checkBanknotArray = [1, 2, 5, 10, 20, 50, 100, 200, 500];

var checkNominal = function(value, checkArray) {
  for (i = 0; i < checkArray.length; i++) {
    if (value == checkArray[i]) {
      return true;
    }
  } 
  return false;
};

document.getElementById('add-btn-coin').onclick = function() {
  var inputString = document.getElementById('text-field-coin').value;
  var inputNumber = parseInt(inputString);

  if (!checkNominal(inputNumber, checkCoinArray)) {
    console.error("Невірний номінал");
    return;
  } else {
    console.log("Номінал вірний");
  }

  wallet.coins.push(inputNumber);
  console.log(wallet);

  console.log("Total in wallet: " + wallet.sum() + " cents");
};

document.getElementById('add-btn-banknot').onclick = function() {
  var inputString = document.getElementById('text-field-banknot').value;
  var inputNumber = parseInt(inputString);


  if (!checkNominal(inputNumber, checkBanknotArray)) {
    console.error("Невірний номінал");
    return;
  } else {
    console.log("Номінал вірний");
  }

  wallet.banknots.push(inputNumber);
  console.log(wallet);  

  console.log("Total in wallet: " + wallet.sum() + " cents");
};