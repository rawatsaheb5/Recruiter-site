import React, { useState } from 'react';
import './jobSeekerForm.css'; 

const JobSeeker = () => {
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
    const [resume, setResume] = useState('');
    const [jobType, setJobType] = useState('');
    

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log({ fullName, email, phone, resume });
  };

  return (
    <div className="container">
      <h1>Job Application Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
                      value={fullName}
                      
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
                      value={email}
                      
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
                      value={phone}
                      
            onChange={(e) => setPhone(e.target.value)}
            required
          />
              </div>
              <div>
          <label htmlFor="jobType">Job Type</label>
          <select
            id="jobType"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
            required
          >
            <option value="">Select Job Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
              <div>
          <label htmlFor="resume">Resume/CV</label>
          <input
            type="file"
            id="resume"
                      accept=".pdf,.doc,.docx"
                      
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
          <button className='btn-j' type="submit">Submit</button>
        </div>
        
      </form>
    </div>
  );
};

export default JobSeeker;
