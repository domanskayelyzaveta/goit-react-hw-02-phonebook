import React from 'react';
import { nanoid } from 'nanoid';
import './ContactsForm.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const ContactsForm = ({
  label,
  name,
  type,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="contact-wrapper">
      <label className="title">{label}</label>
      <input
        className="form-control mb-3"
        type={type}
        id={nanoid()}
        name={name}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
