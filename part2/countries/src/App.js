import { useState, useEffect } from 'react';
import axios from 'axios';
import CountriesForm from './components/CountriesForm';
import Content from './components/Content';

function App() {
  const [searchCountry, setCountry] = useState('');
  const [countries, setCountries] = useState([]);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  }

  const countriesToShow = searchCountry !== ''
    ? countries.filter(country => country.name.common.toLowerCase().includes(searchCountry.toLowerCase()))
    : [];

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => {
        setCountries(response.data);
      })
  }, []);

  return (
    <>
      <CountriesForm searchCountry={searchCountry} handleCountryChange={handleCountryChange} />
      <Content countries={countriesToShow} setCountry={setCountry}/>
    </>
  );
}

export default App;
