const path = require('path');

exports.getEkipler = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/ekipler.html')); // yozo.html'in doğru yolu
   };

