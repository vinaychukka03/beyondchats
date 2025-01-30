import React from 'react';

const ChatbotIntegration = () => {
  return (
    <div style={styles.container}>
      <h2>Chatbot Integration & Testing</h2>
      <button style={styles.button}>Test Chatbot</button>
      <button style={styles.button}>Integrate on Your Website</button>
      <button style={styles.button}>Test Integration</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  button: {
    margin: '10px 0',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
  },
};

export default ChatbotIntegration;