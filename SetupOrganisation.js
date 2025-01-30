import React, { useState } from 'react';

const SetupOrganisation = () => {
  const [companyName, setCompanyName] = useState('');
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Organisation setup successful!');
  };

  return (
    <div style={styles.container}>
      <h2>Setup Organisation</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="url"
          placeholder="Website URL"
          value={websiteUrl}
          onChange={(e) => setWebsiteUrl(e.target.value)}
          style={styles.input}
          required
        />
        <textarea
          placeholder="Company Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Next</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    margin: '10px 0',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    margin: '10px 0',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

export default SetupOrganisation;