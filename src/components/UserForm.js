import React, { useState } from 'react';


// UserForm component for adding/editing users
const UserForm = ({ onSubmit, onCancel, user = {} }) => {
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [phone, setPhone] = useState(user.phone || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { name, email, phone };
    onSubmit(newUser);
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className='inputName'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Email:
        <input
        className='inputEmail'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Phone:
        <input
        className='inputPhone'
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <br />
      <button className='save' type="submit">Save</button>
      <button className='cancel' type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};
export default UserForm;