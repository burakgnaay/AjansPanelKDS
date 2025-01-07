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
const getTotalSpent = (req, res) => {
    const query = 'SELECT SUM(spent) AS totalSpent FROM kampanya_performans';
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).json({ error: err.message });
        } else {
            res.json({ totalSpent: result[0].totalSpent });
        }
    });
};

module.exports = { getTotalSpent };
