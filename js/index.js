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

function getInputNumber(id) {
  return parseInt(document.getElementById(id).value);
}

function handleClick(nameId, selectArray, selectTarget) {
  var inputNumber = getInputNumber(nameId); 
  console.log("inputNumber = " + inputNumber);
  if (!checkNominal(inputNumber, selectArray)) {
    console.error("Невірний номінал");
    return;
  } else {
    console.log("Номінал вірний");
  }

  selectTarget.push(inputNumber);
  console.log(wallet);

  console.log("Total in wallet: " + wallet.sum() + " cents");
}

document.getElementById('add-btn-coin').onclick = function() {
  handleClick('text-field-coin', checkCoinArray, wallet.coins);
};

document.getElementById('add-btn-banknot').onclick = function() {
  handleClick('text-field-banknot', checkBanknotArray, wallet.banknots);
};
