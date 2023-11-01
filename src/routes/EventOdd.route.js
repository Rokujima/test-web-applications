const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const EventOddController = require('../controllers/EventOdd.controller');

router.post(
    '/',
    [
        check('inputNumber')
        .notEmpty()
        .withMessage('Input Number is Required')
        .isNumeric()
        .withMessage('Input must be number')
    ],
    EventOddController.main
);

module.exports = router;