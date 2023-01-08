import Country from "./Country";

const Content = ({countries, setCountry}) => {
  if (countries.length > 10) {
    return (
      <p>
        Too many matches, specify another filter
      </p>
    );
  } else if ((countries.length > 2 && countries.length < 10) || countries.length === 0) {
    return (
      <ul>
        {
          countries.map(country => 
            <li key={country.ccn3}>
              {country.name.common}
              <button onClick={() => setCountry(country.name.common)}>
                show
              </button>
            </li>
          )
        }
      </ul>
    );
  } else {
    return (
      <Country country={countries[0]} />
    );
  }
}

export default Content;
