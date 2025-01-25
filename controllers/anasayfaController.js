const path = require('path');

exports.showAnasayfaPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/anasayfa.html')); 
};
