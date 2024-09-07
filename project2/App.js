// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Password Game Instructions</h1>
      <div className="slide-container">
        <div className="slide">
          <h2>Introduction</h2>
          <p>Welcome to the Password Game! This game helps you learn about creating strong passwords.</p>
        </div>
        <div className="slide">
          <h2>Objective</h2>
          <p>The objective of the game is to create a password that is strong and secure.</p>
        </div>
        <div className="slide">
          <h2>How to Play</h2>
          <p>1. Enter a password in the input field.</p>
          <p>2. Click the "Check Strength" button to see how strong your password is.</p>
          <p>3. The game will provide feedback on the strength of your password and suggest improvements.</p>
        </div>
        <div className="slide">
          <h2>Tips</h2>
          <p>1. Use a mix of uppercase and lowercase letters.</p>
          <p>2. Include numbers and special characters.</p>
          <p>3. Avoid using common words or phrases.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
