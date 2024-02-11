import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';

const UserPage = () => {
  const { userDetails, saveAccountDetails } = useUser();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');

  useEffect(() => {
    // Populate the form with existing user details
    if (userDetails.name) {
      setName(userDetails.name);
    }
    if (userDetails.address) {
      setAddress(userDetails.address);
    }
     if (userDetails.contact) {
      setContact(userDetails.contact);
    }
  }, [userDetails]);
  const handleSubmit = (e) => {
    e.preventDefault();
    saveAccountDetails({ name, address, contact });
  };

  return (
    <div className="container mt-3 text-start">
      <div className="row">
        <div className="col-md-6">
          <h2>{userDetails.name ? 'Edit Your Details' : 'Enter Your Details'}</h2>
          <form onSubmit={handleSubmit}>
            {!userDetails.name && (
                <div className="mb-3">
                  <label htmlFor="formBasicName" className="form-label">Username</label>
                  <input type="text" className="form-control" id="formBasicName" placeholder="Enter username"
                         value={name} onChange={(e) => setName(e.target.value)} required/>
                </div>
            )}
            <div className="mb-3">
              <label htmlFor="formBasicContact" className="form-label">Contact</label>
              <input className="form-control" id="formBasicContact" placeholder="Enter your contact"
                        value={contact} onChange={(e) => setContact(e.target.value)} required></input>
            </div>
            <div className="mb-3">
              <label htmlFor="formBasicAddress" className="form-label">Address</label>
              <textarea className="form-control" id="formBasicAddress" rows="3" placeholder="Enter your address"
                        value={address} onChange={(e) => setAddress(e.target.value)} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Save</button>
          </form>
        </div>

        {/* User Information on the Right */}
        <div className="col-md-6">
          <h2>User Information</h2>
          {userDetails.name && (
              <div>
                <p><strong>Username:</strong> {userDetails.name}</p>
                <p><strong>Contact:</strong> {userDetails.contact}</p>
                <p><strong>Address:</strong> {userDetails.address}</p>
              </div>
          )}
          {!userDetails.name && <p>No user information available. Please enter your details.</p>}
        </div>
      </div>
    </div>
  );
};

export default UserPage;