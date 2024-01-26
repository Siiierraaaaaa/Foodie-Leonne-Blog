// email.routes.js
const express = require('express');
const router = express.Router();
const Email = require('./email.model');

// Subscribe endpoint
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email is not already in the database
    const existingEmail = await Email.findOne({ email });

    if (!existingEmail) {
      // If not, save it to the database
      const newEmail = new Email({ email });
      await newEmail.save();
      res.status(200).json({ message: 'Subscribed successfully!', email });
    } else {
      res.status(400).json({ message: 'Email is already subscribed.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Get subscribed emails endpoint
router.get('/emails', async (req, res) => {
  try {
    // Retrieve all emails from the database
    const emails = await Email.find({}, 'email');
    res.status(200).json(emails.map((e) => e.email));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
