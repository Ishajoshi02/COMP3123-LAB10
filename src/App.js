import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    terms: false,
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Data Entry Form</h2>
        
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
        
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
        
        <label>Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="1234 Main St" />
        
        <label>Address 2</label>
        <input type="text" name="address2" value={formData.address2} onChange={handleChange} placeholder="Apartment, studio, or floor" />
        
        <label>City</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
        
        <label>Province</label>
        <select name="province" value={formData.province} onChange={handleChange}>
          <option value="">Choose...</option>
          <option value="Alberta">Alberta</option>
          <option value="British Columbia">British Columbia</option>
          <option value="Manitoba">Manitoba</option>
          <option value="New Brunswick">New Brunswick</option>
          <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
          <option value="Nova Scotia">Nova Scotia</option>
          <option value="Ontario">Ontario</option>
          <option value="Prince Edward Island">Prince Edward Island</option>
          <option value="Quebec">Quebec</option>
          <option value="Saskatchewan">Saskatchewan</option>
        </select>
        
        <label>Postal Code</label>
        <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} />
        
        <label>
          <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
          Agree Terms & Conditions?
        </label>
        
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Information</h3>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Full Name:</strong> {submittedData.name}</p>
          <p><strong>Address:</strong> {submittedData.address}</p>
          <p><strong>City:</strong> {submittedData.city}</p>
          <p><strong>Province:</strong> {submittedData.province}</p>
          <p><strong>Postal Code:</strong> {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
