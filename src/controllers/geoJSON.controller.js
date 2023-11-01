const fs = require('fs');
const path = require('path');

function filePath(){
    return path.join(__dirname, '/../../storage/geojson/id-jk-jakbar.geojson.txt');
}

exports.main = async (req, res) => {

    if (!fs.existsSync(filePath())) {
        return res.status(400).json({ message: 'file not found' })
    }

    fs.readFile(filePath(), 'utf8', (err, data) => {
        if (err) {
          return res.status(400).json({ message: err });
        }
      
        try {
          return res.status(200).json(JSON.parse(data));
        } catch (error) {
          return res.status(500).json({ message: 'Server error' });
        }
      });
}