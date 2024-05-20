const express = require('express');
const router = express.Router();

// Get list of all players
router.get('/', (req, res) => {
  res.send('List of players');
});

// Get a specific player by id
router.get('/:id', (req, res) => {
  res.send(`Details of player with ID ${req.params.id}`);
});

module.exports = router;