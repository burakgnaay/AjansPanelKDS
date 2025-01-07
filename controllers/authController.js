const db = require('../db');

const path = require('path');

exports.showLoginPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html')); // login.html'i gönder
};

exports.handleLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const [rows] = await db.query('SELECT * FROM kullanici WHERE kullanici_ad = ? AND kullanici_sifre = ?', [username, password]);

        if (rows.length > 0) {
            req.session.user = rows[0];
            res.redirect('/anasayfa');
        } else {
            res.sendFile(path.join(__dirname, '../views/error.html')); // Başarısız girişte error.html göster
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu!');
    }
};


exports.showDashboard = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login'); // Giriş yapılmamışsa login sayfasına yönlendir
    }
    res.sendFile(path.join(__dirname, '../views/anasayfa.html')); // Anasayfa dosyasını gönder
};

exports.handleLogout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login'); // Çıkış sonrası login sayfasına yönlendir
    });
};

  
