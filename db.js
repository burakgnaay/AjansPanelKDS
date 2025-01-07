const mysql = require('mysql2/promise');

// Veritabanı bağlantısı
const pool = mysql.createPool({
  host: 'localhost', // Veritabanı sunucusu
  user: 'root',      // Veritabanı kullanıcı adı
  password: '',      // Şifre boş bırakıldı
  database: 'ajanskds', // Veritabanı adı
});



// `pool` nesnesini dışa aktar
module.exports = pool;
