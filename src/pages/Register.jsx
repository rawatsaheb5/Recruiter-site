import React, { useState } from 'react';
import './register.css'; // Import the CSS file for styling

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission or validation here
    console.log(formData);
  };

  return (
    <form className="sign-up-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <div className="form-group">
        <label for="username">Username</label>
        <input
                  type="text"
                  
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
                  name="email"
                  
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
                  name="password"
                  
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      
      <button className='btn-r' type="submit">Sign Up</button>
      
      
    </form>
  );
};

export default Register;
