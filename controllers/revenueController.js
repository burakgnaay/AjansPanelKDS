const mysql = require('mysql2');

// Veritabanı bağlantısı
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ajanskds'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Veritabanı bağlantısı başarılı!');
});

// Toplam harcama sorgusu
const getTotalRevenue = (req, res) => {
    const query = 'SELECT SUM(revenue) AS totalRevenue FROM kampanya_performans';
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ totalRevenue: result[0].totalRevenue });
        }
    });
};

module.exports = { getTotalRevenue };
