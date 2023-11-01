const express = require('express');
const router = express.Router();
const excelData = require('../controllers/ExcelData.controller');

router.get(
    '/',
    excelData.main
);

module.exports = router;