// src/pages/AdminPanel.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../pages/AuthContext';
import '../styles/AdminPanel.css';


function AdminPanel() {
  const { userDetails, setUserDetails } = useContext(AuthContext); // get userDetails and setUserDetails
  const [editMode, setEditMode] = useState(false);
  const [editedEmail, setEditedEmail] = useState(userDetails?.email || '');
  const [editedPassword, setEditedPassword] = useState(userDetails?.password || '');

  // Handle edit submit
  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (editedEmail && editedPassword) {
      // Update userDetails with the new values
      setUserDetails({ email: editedEmail, password: editedPassword });
      setEditMode(false); // Exit edit mode
      alert('User details updated successfully!');
    } else {
      alert('Please enter valid details.');
    }
  };

  // Handle remove user
  const handleRemoveUser = () => {
    setUserDetails(null); // Remove userDetails from context (logout the user)
    alert('User has been removed!');
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      {userDetails ? (
        <div>
          <h3>User Details</h3>
          {editMode ? (
            <form onSubmit={handleEditSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={editedEmail}
                  onChange={(e) => setEditedEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={editedPassword}
                  onChange={(e) => setEditedPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Save Changes</button>
              <button type="button" onClick={() => setEditMode(false)}>Cancel</button>
            </form>
          ) : (
            <div>
              <p><strong>Email:</strong> {userDetails.email}</p>
              <p><strong>Password:</strong> {userDetails.password}</p>
              <button onClick={() => setEditMode(true)}>Edit</button>
              <button onClick={handleRemoveUser}>Remove User</button>
            </div>
          )}
        </div>
      ) : (
        <p>No user is currently logged in.</p>
      )}
    </div>
  );
}

export default AdminPanel;
