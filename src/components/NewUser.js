import React, { useState } from 'react';

import UserCard from "./Display";
import UserForm from "./UserForm";



//  component that manages the list of users
const UserManagementApp = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const editUser = (user) => {
    setEditingUser(user);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user === editingUser ? updatedUser : user))
    );
    setEditingUser(null);
  };

  const deleteUser = (user) => {
    setUsers(users.filter((u) => u !== user));
  };

  return (
    <div className='userMan'>
      <h1>User Management App</h1>
      <UserForm onSubmit={addUser} />
      <hr />
      {users.map((user) => (
        <UserCard
          key={user.email}
          user={user}
          onEdit={editUser}
          onDelete={deleteUser}
        />
      ))}
      {editingUser && (
        <div className='editUser'>
          <h2>Edit User</h2>
          <UserForm
            onSubmit={updateUser}
            onCancel={() => setEditingUser(null)}
            user={editingUser}
          />
        </div>
      )}
    </div>
  );
};

export default UserManagementApp;
