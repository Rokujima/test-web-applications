const express = require('express');
const router = express.Router();
const geoJSON = require('../controllers/geoJSON.controller');

router.get(
    '/',
    geoJSON.main
);

module.exports = router;