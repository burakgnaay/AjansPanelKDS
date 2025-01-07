const pool = require('../db'); // Veritabanı bağlantısı

// Verileri filtrelemek için güncel asenkron fonksiyon
async function getKampanyaData(req, res) {
  const { ay, yil } = req.query; // Query parametrelerini alıyoruz

  try {
    // Varsayılan sorgu
    let query = 'SELECT * FROM kampanya_performans';
    const params = [];

    // Eğer sadece "ay" verilmişse
    if (ay && !yil) {
      query += ' WHERE ay = ?';
      params.push(ay);
    }
    // Eğer "ay" ve "yil" birlikte verilmişse
    else if (ay && yil) {
      query += ' WHERE ay = ? AND yil = ?';
      params.push(ay, yil);
    }
    // Eğer hiçbir filtre yoksa tüm kayıtları getir
    else if (yil && !ay) {
      query += ' WHERE yil = ?';
      params.push(yil);
    }

    const [rows] = await pool.query(query, params); // Sorguyu çalıştır
    res.json(rows); // JSON formatında sonuçları döndür
  } catch (error) {
    console.error('Veri alırken hata oluştu:', error);
    res.status(500).json({ error: 'Veri alınamadı' });
  }
}

module.exports = { getKampanyaData };
