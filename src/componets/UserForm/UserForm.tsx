import React, {useState} from 'react';
import {UserMutation} from '../../../types';

interface Props {
  onSubmit: (user: User) => void;
}
const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState<UserMutation>({
    name: '',
    email: '',
    role: 'user',
  });

  const changeUser = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setUser((prev) => ({
      ...prev,
        [e.target.name]: e.target.value,
    }));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id:Math.random().toString(),
      ...user,
    });
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h3>Add new user</h3>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          value={user.name}
          onChange={changeUser}
          />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          value={user.email}
          onChange={changeUser}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          id="isActive"
          type="checkbox"
          className="form-check-input"
        />
        <label className="form-check-label" htmlFor="isActive">
          Active
        </label>
      </div>
      <div className="mb-3">
        <label htmlFor="role" className="form-label">
          Role
        </label>
        <select
          className="form-select"
          name="role"
          id="role"
          value={user.role}
          onChange={changeUser}
        >
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="administrator">Administrator</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Add user
      </button>
    </form>
  );
};

export default UserForm;