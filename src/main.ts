import './style.css'
const stranka=
`<section id="section1">
<div class="container">
  <h1 class="header">CURRENCY EXCHANGE</h1>
  <div class="main">
   <div class="Amount">
    <label for="amount">Amount</label>
    <input type="text" inputmode="decimal" class="input-amount" id="amount" value="1.00">
   </div>
   <div class="Currency1">
    <label for="from">From</label>
    <input type="text" class="input-currency1" id="from">
   </div>
   <div class="Currency2">
   <label for="to">To</label>
    <input type="text" class="input-currency2" id="to">
   </div>
  </div>
  <input class="convert-button" type="button" onclick="alert('Vaša hodnota je:')" value="Convert">
  <div class="rates">
   <h1 class="rates1">Live Exchange Rates</h1>
  </div>
  


</div>
</section>`
document.getElementById("app").innerHTML=stranka
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e8b9f75854msh2a9bfb072f3aff8p10b824jsn16a8f43c6852',
		'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
	}
};

fetch('https://currency-exchange.p.rapidapi.com/listquotes', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));