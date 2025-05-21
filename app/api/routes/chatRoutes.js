const express = require('express');
const { enviarMensaje } = require('../controllers/chatController');
const router = express.Router();

router.post('/chat', enviarMensaje);

module.exports = router;