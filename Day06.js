//Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).


//a.Get all the countries from Asia continent /region using Filter method


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    var asiaCountries = data.filter(country => country.region === 'Asia');
    
    var asiaCountryNames = asiaCountries.map(country => country.name.common);
    
    console.log("Countries in Asia:", asiaCountryNames);
  })
.catch(error => console.log);

//b.Get all the countries with a population of less than 2 lakhs using Filter method

fetch('https://restcountries.com/v3.1/all')
.then(response => response.json())
.then(data => {
    var countriesWithLowPopulation = data.filter(country => country.population < 200000);
    console.log(countriesWithLowPopulation);
})
  .catch(error => console.error('Error fetching data:', error));

//c.Print the following details name, capital, flag, using forEach method

fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    data.forEach(country => {
      console.log("Name:", country.name.common);
      console.log("Capital:", country.capital);
      console.log("Flag:", country.flags.svg);
      console.log("--------------------");
    });
  })
  .catch(error => console.error('Error fetching data:', error));


  //d.Print the total population of countries using reduce method

  fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    var totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log("Total Population of Countries:", totalPopulation);
  })
  .catch(error => console.error('Error fetching data:', error));


//e.Print the country that uses US dollars as currency.


fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    var countryUsingUSD = data.find(country => country.currencies.hasOwnProperty('USD'));
    if (countryUsingUSD) {
      console.log("Country using US Dollars as currency:", countryUsingUSD.name.common);
    } else {
      console.log("No country found using US Dollars as currency.");
    }
  })
  .catch(error => console.error('Error fetching data:', error));




























