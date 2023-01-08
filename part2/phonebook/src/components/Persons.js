const Person = ({person, deleteContact}) => {
  return (
    <li>
      {person.name} {person.number}
      <button onClick={() => deleteContact(person.id)}>delete</button>
    </li>
  );
}

const Persons = ({ persons, deleteContact }) => {
  return (
    <ul>
      {persons.map(person => <Person key={person.id} person={person} deleteContact={deleteContact} />)}
    </ul>
  );
}

export default Persons;
