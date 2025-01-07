const pool = require('../db'); // Veritabanı bağlantısı

// Verileri filtrelemek için güncel asenkron fonksiyon
async function getEkipData(req, res) {
  const { ekip_id } = req.query; // Query parametrelerini alıyoruz

  try {
    // Varsayılan sorgu
    let query = 'SELECT * FROM kampanya_ekip';
    const params = [];

 // Eğer sadece "ekip_id" verilmişse
if (ekip_id) {
    query += ' WHERE ekip_id = ?';
    params.push(ekip_id);
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

module.exports = { getEkipData };
