import './style.css';
import { Client, Locale } from 'appwrite';

const client = new Client();
client.setEndpoint('https://demo.appwrite.io/v1').setProject('63fe5270c843bb736f0e');

const getCountries = async () => {
	const locale = new Locale(client);
	const { countries } = await locale.listCountries();
	const countriesElem = document.querySelector('ul');
	countriesElem.innerHTML = '';

	countries.map((c) => {
		const li = document.createElement('li');
		li.innerHTML = c.name;
		countriesElem.append(li);
	});
};

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Appwriters!</h1>
    <button id="countries" type="button">Get Countries</button>
    <ul></ul>
  </div>
`;

document.querySelector('#countries').addEventListener('click', () => getCountries());
