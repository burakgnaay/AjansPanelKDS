const pool = require('../db');

async function getOdemebilgiData(req, res) {
  const { odeme_durumu } = req.query; 

  try {
    let query = 'SELECT * FROM odemeler';
    const params = [];

if (odeme_durumu) {
    query += ' WHERE odeme_durumu = ?';
    params.push(odeme_durumu);
  } else {
    query += ' WHERE 1'; 
  }
  

    const [rows] = await pool.query(query, params); 
    res.json(rows); 
  } catch (error) {
    console.error('Veri alırken hata oluştu:', error);
    res.status(500).json({ error: 'Veri alınamadı' });
  }
}

module.exports = { getOdemebilgiData };
