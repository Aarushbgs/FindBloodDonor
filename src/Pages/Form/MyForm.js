import React, { useState } from 'react';
import './MyForm.css';

const MyForm = () => {
  const [formData, setFormData] = useState({
    // name: '',
    // phone: '',
    BloodGroup: '',
    City: '',
    // gender: '',
    // email: '',
    // hospitalName: ''
  });

  const [results, setResults] = useState([]); // State to store the fetched results
  const [error, setError] = useState(null);
  const [showResults, setShowResults] = useState(false); // State to control form visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { City, BloodGroup } = formData;

    if (!City || !BloodGroup) {
      alert('City and Blood Group are required.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/getdata?City=${encodeURIComponent(City)}&BloodGroup=${encodeURIComponent(BloodGroup)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setResults(data); // Store the fetched results
      setError(null);
      setShowResults(true); // Hide the form and show the results
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Error fetching data');
    }
  };

  return (
    <div>
      {!showResults ? ( // Conditionally render the form or the results
        <form className="my-form" onSubmit={handleSubmit}>
          {/* <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label> */}
          <label>
            Blood Group:
            <select
              name="BloodGroup"
              value={formData.BloodGroup}
              onChange={handleInputChange}
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </label>
          <label>
            City:
            <input
              type="text"
              name="City"
              value={formData.City}
              onChange={handleInputChange}
            />
          </label>
          {/* <label>
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Hospital Name:
            <input
              type="text"
              name="hospitalName"
              value={formData.hospitalName}
              onChange={handleInputChange}
            />
          </label> */}
          <button type="submit">Find</button>
        </form>
      ) : (
        <div> {/* Conditionally render the results */}
        <h2>Results:</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {results.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Blood Group</th>
                <th>City</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {results.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.BloodGroup}</td>
                  <td>{item.City}</td>
                  <td>{item.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No data found</p>
        )}
      </div>

      )}
    </div>
  );
};

export default MyForm;