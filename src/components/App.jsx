import React, { Component } from 'react';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import './App.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <ContactsForm
            label="Name"
            name="name"
            type="text"
            id={nanoid()}
            onChange={this.handleChange}
          />
          <ContactsForm
            label="Number"
            name="number"
            type="number"
            id={nanoid()}
            onChange={this.handleChange}
          />
          <button
            className="addContactBtn"
            type="submit"
            // onChange={this.handleChange}
          >
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
