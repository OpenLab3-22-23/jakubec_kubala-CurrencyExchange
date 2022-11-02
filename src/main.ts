import './style.css'

const stranka=
`
<div class="container">
<center>
  <h1>Currency Exchange</h1>
  <div class="box">
    <div class="top_box">
      <input type="number" name="" id="num" class="inputs" />
      <select name="currency" class="currency"></select>
    </div>
    <div class="bottom_box">
      <input type="text" name="" id="ans" class="inputs" disabled />
      <select name="currency" class="currency"></select>
    </div>
  </div>
  <div id="conversion-rate"></div>
  <button class="btn" id="btn">Convert</button>
</center>
</div>
`
document.getElementById("app").innerHTML=stranka

const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");
const conv = document.getElementById("conversion-rate");
const unit = 1;

fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

function display(data) {
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}

btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = num.value;

  if (currency1 !== currency2 && value !== "") {
    // if (currency1 !== currency2) {
    convert(currency1, currency2, value);
  } else {
    if (currency1 === currency2) {
      alert("Please choose a different currency");
      console.log(value);
    } else if (value === "") {
      alert("Please enter value to convert");
    }
  }
});

function convert(currency1, currency2, value) {
  const host = "api.frankfurter.app";
  if (value === "0") {
    ans.value = "0";
    fetch(
      `https://${host}/latest?amount=${unit}&from=${currency1}&to=${currency2}`
    )
      .then((v) => v.json())
      .then((v) => {
        conv.innerHTML =
          "Conversion rate: 1 " +
          currency1 +
          " = " +
          Object.values(v.rates)[0] +
          " " +
          currency2;
      });
  } else {
    fetch(
      `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
    )
      .then((val) => val.json())
      .then((val) => {
        // console.log(val);
        // console.log(Object.values(val.rates)[0]);
        ans.value = Object.values(val.rates)[0];
        fetch(
          `https://${host}/latest?amount=${unit}&from=${currency1}&to=${currency2}`
        )
          .then((v) => v.json())
          .then((v) => {
            conv.innerHTML =
              "Conversion rate: 1 " +
              currency1 +
              " = " +
              Object.values(v.rates)[0] +
              currency2;
          });
      });
  }
}
