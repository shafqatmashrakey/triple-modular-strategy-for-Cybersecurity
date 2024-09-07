import React, { useState } from 'react';
import './styles.css';

function App() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkStrength = () => {
    // Implement password strength checking logic here
    // You can use libraries like zxcvbn for this purpose
    // For simplicity, let's assume strength is based on length
    if (password.length < 6) {
      setStrength('Weak');
    } else if (password.length < 10) {
      setStrength('Medium');
    } else {
      setStrength('Strong');
    }
  };

  return (
    <div className="App">
      <h1>Password Strength Game</h1>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={checkStrength}>Check Strength</button>
      {strength && <p>Your password strength: {strength}</p>}
    </div>
  );
}

export default App;
