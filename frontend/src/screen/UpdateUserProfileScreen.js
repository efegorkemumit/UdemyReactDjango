import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../actions/UserActions';

const UpdateUserProfileScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error } = userUpdate;

  const handleUpdateProfile = () => {
    // Validation checks for name and email can be performed here
    const updatedProfile = {
      name,
      email,
    };
    dispatch(updateUserProfile(updatedProfile));
  };

  return (
    <div>
      <h2>Update User Profile</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default UpdateUserProfileScreen;