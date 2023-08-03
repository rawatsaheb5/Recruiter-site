import React, { useState } from 'react';
import './login.css'; // Import the CSS file for styling



const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform sign-in logic here
    console.log(formData);
  };
  
  
  return (
    <form className="sign-in-page" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
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
      <button className='btn-s' type="submit" >Sign In</button>
    </form>
  );
};

export default Login;
