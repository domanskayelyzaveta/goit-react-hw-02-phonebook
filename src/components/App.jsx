import React, { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  onFilterChange = event => {
    const inputValue = event.target.value;
    this.setState({ filter: inputValue });
  };

  onDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    const constObj = {
      id: nanoid(),
      name: name,
      number: number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, constObj],
      name: '',
      number: '',
    }));
  };

  render() {
    const filteredContactsByName = this.state.contacts.filter(contact => {
      return (
        contact.name
          .toLowerCase()
          .includes(this.state.filter.trim().toLowerCase()) ||
        contact.number.includes(this.state.filter)
      );
    });

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <ContactsForm
            label="Name"
            className="form-label"
            name="name"
            type="text"
            placeholder="Ivan"
            id={nanoid()}
            value={this.state.name}
            onChange={this.handleChange}
          />
          <ContactsForm
            label="Number"
            className="form-label"
            name="number"
            type="number"
            placeholder="000-00-00"
            id={nanoid()}
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button className="addContactBtn" type="submit">
            Add contact
          </button>
        </form>
        <Filter
          label="Name"
          name={this.state.name}
          number={this.state.number}
          type="text"
          onChange={this.onFilterChange}
        />
        <ContactList
          contacts={filteredContactsByName}
          onDeleteContact={this.onDeleteContact}
        />
      </div>
    );
  }
}
