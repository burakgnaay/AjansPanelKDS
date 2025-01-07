const pool = require('../db'); // Veritabanı bağlantısı

// Verileri filtrelemek için güncel asenkron fonksiyon
async function getOdemebilgiData(req, res) {
  const { odeme_durumu } = req.query; // Query parametrelerini alıyoruz

  try {
    // Varsayılan sorgu
    let query = 'SELECT * FROM odemeler';
    const params = [];

 // Eğer sadece "ekip_id" verilmişse
if (odeme_durumu) {
    query += ' WHERE odeme_durumu = ?';
    params.push(odeme_durumu);
  } else {
    // Eğer hiçbir filtre yoksa tüm kayıtları getir
    query += ' WHERE 1'; // "1" tüm kayıtları getirecek bir dummy koşuldur
  }
  

    const [rows] = await pool.query(query, params); // Sorguyu çalıştır
    res.json(rows); // JSON formatında sonuçları döndür
  } catch (error) {
    console.error('Veri alırken hata oluştu:', error);
    res.status(500).json({ error: 'Veri alınamadı' });
  }
}

module.exports = { getOdemebilgiData };
