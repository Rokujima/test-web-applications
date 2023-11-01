const xlsx = require('node-xlsx');
const path = require('path');
const fs = require('fs');

function filePath() {
    return path.join(__dirname, '/../../storage/data-penduduk/Jumlah Penduduk Provinsi DKI Jakarta Menurut Kelompok Umur dan Jenis Kelamin.xlsx');
}

function getYears(data) {
    return [...new Set(data[2])].filter(item => item !== undefined);
}

function label(data) {
    return [...new Set(data[1])].filter(item => item !== undefined);
}

function mapDataObject(labels, data) {
    return data.slice(3, data.length - 5).map(row => {
        const obj = {};
        labels.forEach((label, j) => {
            obj[label] = row[j];
        });
        return obj;
    });
}

function formatDataset(data, labels, genders, years) {
    return {
        labels: data.map(entry => entry.Umur),
        datasets: genders.flatMap(gender => years.map(year => {
            return {
                label: `${gender} ${year}`,
                data: data.map(entry => parseFloat(entry[`${gender} ${year}`])),
                backgroundColor: `rgba(${getRandomColor()}, 0.7)`
            };
        })).filter(entry => !entry.label.includes("Jumlah"))
    };
}

function getRandomColor() {
    return `${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}`;
}

exports.main = (req, res) => {
    try {
        if (!fs.existsSync(filePath())) {
            return res.status(400).json({ message: 'file not found' });
        }

        const [obj] = xlsx.parse(fs.readFileSync(filePath()));
        const years = getYears(obj.data);
        const genders = label(obj.data);
        const newLabels = ['Umur', ...genders.flatMap(gender => years.map(year => `${gender} ${year}`))];

        return res.status(200).json(formatDataset(mapDataObject(newLabels, obj.data), newLabels, genders, years));
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
};