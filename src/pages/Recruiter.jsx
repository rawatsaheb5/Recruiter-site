import React, { useState } from 'react';
import './recruiter.css'

const Recruiter= () => {
  const [jobSeekerName, setJobSeekerName] = useState('');
  const [jobSeekerEmail, setJobSeekerEmail] = useState('');
  const [jobSeekerPhone, setJobSeekerPhone] = useState('');
  const [jobSeekerResume, setJobSeekerResume] = useState('');
  const [jobSeekerJobType, setJobSeekerJobType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    // For this example, let's just log the form data
    console.log({
      jobSeekerName,
      jobSeekerEmail,
      jobSeekerPhone,
      jobSeekerResume,
      jobSeekerJobType,
    });
  };

  return (
    <div className="container">
      <h1>Recruiter Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="jobSeekerName">Job Seeker's Name</label>
          <input
            type="text"
            id="jobSeekerName"
            value={jobSeekerName}
            onChange={(e) => setJobSeekerName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="jobSeekerEmail">Job Seeker's Email</label>
          <input
            type="email"
            id="jobSeekerEmail"
            value={jobSeekerEmail}
            onChange={(e) => setJobSeekerEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="jobSeekerPhone">Job Seeker's Phone</label>
          <input
            type="tel"
            id="jobSeekerPhone"
            value={jobSeekerPhone}
            onChange={(e) => setJobSeekerPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="jobSeekerResume">Job Seeker's Resume/CV</label>
          <input
            type="file"
            id="jobSeekerResume"
            accept=".pdf,.doc,.docx"
            onChange={(e) => setJobSeekerResume(e.target.files[0])}
            required
          />
        </div>
        <div>
          <label htmlFor="jobSeekerJobType">Job Seeker's Job Type</label>
          <select
            id="jobSeekerJobType"
            value={jobSeekerJobType}
            onChange={(e) => setJobSeekerJobType(e.target.value)}
            required
          >
            <option value="">Select Job Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <button className='btn-rec' type="submit">Recruit Job Seeker</button>
      </form>
    </div>
  );
};

export default Recruiter;
