const UsersItem = () => {

  return (
    <div className="card mb-3" style={{ maxWidth: '18rem' }}>
      <div className="card-header">User name</div>
      <div className="card-body">
        <p className="card-text">Email:</p>
        <p className="card-text">Active:</p>
        <p className="card-text">Role:</p>
      </div>
    </div>
  );
};

export default UsersItem;