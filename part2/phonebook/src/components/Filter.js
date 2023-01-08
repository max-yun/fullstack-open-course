const Filter = ({searchContact, handleSearchChange}) => {
  return (
    <div>filter shown with 
      <input 
        value={searchContact} 
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Filter;
