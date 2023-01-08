const CountriesForm = ({searchCountry, handleCountryChange}) => {
  return (
    <form>
      <div>
        find countries
        <input 
          value={searchCountry}
          onChange={handleCountryChange}
        />
      </div>
    </form>
  );
}

export default CountriesForm;
