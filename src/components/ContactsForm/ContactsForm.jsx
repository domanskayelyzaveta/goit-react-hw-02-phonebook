import React from 'react';
import { nanoid } from 'nanoid';
import './ContactsForm.css';

export const ContactsForm = ({ label, name, type, onChange }) => {
  return (
    <div className="contact-wrapper">
      <label className="title">{label}</label>
      <input
        className="contactInput"
        type={type}
        id={nanoid()}
        name={name}
        required
        onChange={onChange}
      />
    </div>
  );
};
