import React, { useState } from 'react'
import './Form.css';
const Form = () => {

const [formData, SetformData] = useState({
    name:'',
    phone:'',
    BloodGroup:'',
    City:'',
    gender:'',
    email:''
});

const handleInputChange=(e)=>{
    const {name,value}=e.target;
    SetformData({...formData,[name]:value});
}

const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission, either send data to a server or handle it locally
try {

    const response = await fetch('http://localhost:8000/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      console.log(formData); // Just printing form data for demonstration
      alert("Your Data is Saved!");


    
} catch (error) {
    console.error('Error:',error);
    alert("Your Data is not Saved!");
}
    
  };



  return (
   <form className="my-form" onSubmit={handleSubmit}>
    <label>
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
    </label>
    <label>
    BloodGroup:
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
    <label>
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


    <button type="submit">Submit</button>

   </form>
  )
}

export default Form