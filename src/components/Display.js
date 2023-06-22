

// UserCard component to display user information

const UserCard = ({ user, onEdit, onDelete }) => {
    return (
      <div className='Display'>
       <h3>Name: <span className="DisplayName">{user.name}</span></h3>
        <h3>Email:<span  className="DisplayEmail">{user.email}</span> </h3>
        <h3>Phone: <span className="DisplayPhone">{user.phone}</span></h3>
        <button  onClick={() => onEdit(user)}>Edit</button>
        <button className="delete" onClick={() => onDelete(user)}>Delete</button>
      </div>
    );
  };
  export default UserCard;