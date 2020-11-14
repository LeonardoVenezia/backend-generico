'use string'

const express = require('express');

const UserController = require('../controllers/user.js');

const api = express.Router();

api.post('/register', UserController.saveUser);


module.exports = api;