const path = require('path');

exports.getOdemeler = (req, res) => {
    const filePath = path.join(__dirname, '../views/odemeler.html'); // views klasöründeki odemeler.html dosyasını buluyoruz
    res.sendFile(filePath);
};
