const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Define route for the root URL ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.json());

// Route to check password strength
app.post('/api/password/strength', (req, res) => {
  const password = req.body.password;
  let strength = '';

  // Implement password strength checking logic here
  // For simplicity, let's assume strength is based on length
  if (password.length < 6) {
    strength = 'Weak';
  } else if (password.length < 10) {
    strength = 'Medium';
  } else {
    strength = 'Strong';
  }

  res.json({ strength });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
