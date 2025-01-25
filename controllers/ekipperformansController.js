const pool = require('../db'); 


async function getEkipData(req, res) {
  const { ekip_id } = req.query; 

  try {
  
    let query = 'SELECT * FROM kampanya_ekip';
    const params = [];


if (ekip_id) {
    query += ' WHERE ekip_id = ?';
    params.push(ekip_id);
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

module.exports = { getEkipData };
