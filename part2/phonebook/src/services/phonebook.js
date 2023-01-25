import axios from "axios";

const baseUrl = 'http://localhost:3001/api/persons';

const getContacts = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
}

const addContact = contact => {
  const request = axios.post(baseUrl, contact);
  return request.then(response => response.data);
}

const deleteContact = id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => response.data);
}

const updateNumber = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then(response => response.data);
}

export default { addContact, getContacts, deleteContact, updateNumber };
