import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import './ContactsForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export class ContactsForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;

    this.props.onSubmit({ name, number });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div className="contact-wrapper">
        <form onSubmit={this.handleSubmit}>
          <label className="title">Name</label>
          <input
            className="form-control mb-3"
            type="text"
            name="name"
            required
            id={nanoid()}
            placeholder="Ivan"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <label className="title">Number</label>
          <input
            className="form-control mb-3"
            type="number"
            name="number"
            required
            placeholder="000-00-00"
            value={this.state.number}
            onChange={this.handleChange}
          />
          <button className="addContactBtn" type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
