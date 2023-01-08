import { useState, useEffect } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Notification from './components/Notification';
import phonebookService from './services/phonebook';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [searchContact, setSearchContact] = useState('');
  const [message, setMessage] = useState('');
  const contactsToShow = (searchContact === '') 
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchContact));

  useEffect(() => {
    phonebookService
      .getContacts()
      .then(contacts => {
        setPersons(contacts);
      });
  }, []);

  const addContact = (event) => {
    event.preventDefault();
    const existingPerson = persons.filter(person => person.name === newName);
    const personExists = existingPerson.length > 0;
    const id = personExists ? existingPerson[0].id : persons.length + 1;

    const contactObject = {
      name: newName,
      number: newNumber,
      id: id,
    }

    if (personExists) {
      if (window.confirm(`${existingPerson[0].name} is already added to the phonebook, replace the old number with a new one?`)) {
        phonebookService
          .updateNumber(id, contactObject).then(returnedPerson => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : returnedPerson));
            setMessage(`SUCCESS: Changed phone number of ${contactObject.name}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          })
          .catch(error => {
            setMessage(
              `ERROR: Information of ${contactObject.name} has already been removed from server`
            );
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
      }

      setNewName('');
      setNewNumber('');
      return;
    }

    phonebookService
      .addContact(contactObject)
      .then(returnedContact => {
        setPersons(persons.concat(returnedContact));
        setMessage(`SUCCESS: Added ${contactObject.name}`);
        setTimeout(() => {
          setMessage(null);
        }, 5000);
        setNewName('');
        setNewNumber('');
      })
      .catch(error => {
        setMessage(
          `ERROR: Information of ${contactObject.name} has already been removed from server`
        );
        setTimeout(() => {
          setMessage(null);
        }, 5000);
      })
  }
  
  const deleteContact = id => {
    phonebookService
      .deleteContact(id)
      .then(response => {
        setPersons(persons.filter(person => person.id !== id));
        console.log(response);
      })
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleSearchChange = (event) => {
    setSearchContact(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} />
      <Filter searchContact={searchContact} handleSearchChange={handleSearchChange}/>
      <h3>Add a new</h3>
      <PersonForm 
        addContact={addContact}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons persons={contactsToShow} deleteContact={deleteContact}/>
    </div>
  );
}

export default App;
