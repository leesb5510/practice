let currencyRatio = {
  USD: {
    KRW: 1330.2,
    USD: 1,
    EU: 0.9,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00075,
    EU: 0.00067,
    unit: "원",
  },
  EU: {
    KRW: 1485.44,
    USD: 1.12,
    EU: 1,
    unit: "유로",
  },
};
const unitWords = ["", "만", "억", "조", "경"];
const splitUnit = 10000;
let toButton = document.getElementById("to-button");
let fromButton = document.getElementById("from-button");
let fromCurrency = "USD";
let toCurrency = "USD";
// currencyRatio.USD.unit;
// currencyRatio["KRW"]["EU"];

document.querySelectorAll("#from-currency-list li").forEach((item) => {
  item.addEventListener("click", function () {
    fromCurrency = this.id;
    document.getElementById("from-button").textContent = this.textContent;
    convert("from");
  });
});

document.querySelectorAll("#to-currency-list li").forEach((item) => {
  item.addEventListener("click", function () {
    toCurrency = this.id;
    document.getElementById("to-button").textContent = this.textContent;
    convert("from");
  });
});

function convert(type) {
  let amount = 0;
  if (type == "from") {
    amount = document.getElementById("fromAmount").value;
    let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency];
    document.getElementById("toAmount").value = convertedAmount;
    renderKoreanNumber(amount, convertedAmount);
  } else {
    amount = document.getElementById("toAmount").value;
    let convertedAmount = amount * currencyRatio[toCurrency][fromCurrency];
    document.getElementById("fromAmount").value = convertedAmount;
    renderKoreanNumber(convertedAmount, amount);
  }
}

function renderKoreanNumber(from, to) {
  document.getElementById("fromNumToKorea").textContent =
    readNum(from) + currencyRatio[fromCurrency].unit;
  document.getElementById("toNumToKorea").textContent =
    readNum(to) + currencyRatio[toCurrency].unit;
}

function readNum(num) {
  let resultString = "";
  let resultArray = [];
  for (let i = 0; i < unitWords.length; i++) {
    let unitResult =
      (num % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }
  for (let i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString = String(resultArray[i]) + unitWords[i] + resultString;
  }
  return resultString;
}
