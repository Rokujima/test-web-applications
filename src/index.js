const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const eventOddRoutes = require('./routes/EventOdd.route');
const geoJSONRoutes = require('./routes/geoJSON.route');
const excelDataRoutes = require('./routes/ExcelData.route');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/even-or-odd', eventOddRoutes);
app.use('/api/geojson', geoJSONRoutes);
app.use('/api/excel-load-data', excelDataRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/view/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;