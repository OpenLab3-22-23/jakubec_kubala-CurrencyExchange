import './style.css'

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