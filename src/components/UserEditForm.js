// src/components/UserEditForm.js

import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, doc, updateDoc } from 'firebase/firestore';

function UserEditForm({ userData, setEditMode }) {
  const [formData, setFormData] = useState(userData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update the user's data in the database
    const userTableCollection = collection(db, 'usertable');
    const userDoc = doc(userTableCollection, userData.id);

    try {
      await updateDoc(userDoc, formData);
      setEditMode(false); // Exit edit mode after successful update
    } catch (error) {
      console.error('Error updating user: ', error);
    }
  };

  return (
    <div className="form-container">
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="Age"
            value={formData.Age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="Gender"
            value={formData.Gender}
            onChange={handleInputChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="None">None</option>
          </select>
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="City"
            value={formData.City}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <button type="submit">Update</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default UserEditForm;
