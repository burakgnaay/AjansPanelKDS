const db = require('../db');

exports.getUser = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT kullanici_ad FROM kullanici LIMIT 1');
    if (rows.length > 0) {
      let username = rows[0].kullanici_ad;

      const userMapping = {
        "bgunay9": "Burak Günay",
        "etopcu13": "Eren Topcu"
      };

      if (userMapping[username]) {
        username = userMapping[username];
      }

      res.json({ username });
    } else {
      res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
    }
  } catch (error) {
    console.error('Veritabanı hatası:', error);
    res.status(500).json({ message: 'Sunucu hatası.' });
  }
};
