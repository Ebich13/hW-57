import {User} from '../../../types';
import React from 'react';

interface Props {
  user: User;
}

const UsersItem: React.FC<Props> = ({user}) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '18rem' }}>
      <div className="card-header">Name: <strong>{user.name}</strong></div>
      <div className="card-body">
        <p className="card-text"> email: <strong> {user.email}</strong> </p>
        <p className="card-text">{user.isActive}</p>
        <p className="card-text">Role: <strong>{user.role}</strong> </p>
      </div>
    </div>
  );
};

export default UsersItem;