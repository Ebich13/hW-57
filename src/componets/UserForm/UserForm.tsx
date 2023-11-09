import React, {useState} from 'react';

interface Props {
  onSubmit: (user: User) => void;
}
const UserForm: React.FC<Props> = ({onSubmit}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    isActive:'',
    role: '',
  });

  return (
    <form>
      <h3>Add new user</h3>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="isActive"
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
          id="role"
        >
          <option value="user">User</option>
          <option value="editor">Editor</option>
          <option value="administrator">Administrator</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Create User
      </button>
    </form>
  );
};

export default UserForm;