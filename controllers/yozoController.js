const path = require('path');

exports.showYozoPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/yozo.html')); // yozo.html'in doğru yolu
};
