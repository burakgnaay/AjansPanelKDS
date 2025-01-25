const pool = require('../db'); 


async function getKampanyaData(req, res) {
  const { ay, yil } = req.query; 

  try {

    let query = 'SELECT * FROM kampanya_performans';
    const params = [];


    if (ay && !yil) {
      query += ' WHERE ay = ?';
      params.push(ay);
    }

    else if (ay && yil) {
      query += ' WHERE ay = ? AND yil = ?';
      params.push(ay, yil);
    }

    else if (yil && !ay) {
      query += ' WHERE yil = ?';
      params.push(yil);
    }

    const [rows] = await pool.query(query, params); 
    res.json(rows);
  } catch (error) {
    console.error('Veri alırken hata oluştu:', error);
    res.status(500).json({ error: 'Veri alınamadı' });
  }
}

module.exports = { getKampanyaData };
