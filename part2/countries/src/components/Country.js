const Country = ({country}) => {
  const languagesArray = Object.values(country.languages);
  console.log(country);
  return (
    <>
      <h1>{country.name.common}</h1>
      <div>capital {country.capital[0]}</div>
      <div>area {country.area}</div>
      <h3>languages:</h3>
      <ul>
        {languagesArray.map((language, i) => <li key={language+i}>{language}</li>)}
      </ul>
      <img src={country.flags['png']} alt="Country flag" />
    </>
  );
}

export default Country;
