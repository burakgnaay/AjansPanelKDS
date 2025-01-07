
const path = require('path');

exports.showLoginPage = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html')); // login.html'in doğru yolu
};

exports.handleLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const [rows] = await db.query('SELECT * FROM kullanici WHERE kullanici_ad = ? AND kullanici_sifre = ?', [username, password]);

        if (rows.length > 0) {
            req.session.user = rows[0];
            res.redirect('/dashboard');
        } else {
            res.sendFile(path.join(__dirname, '../views/login.html')); // login.html'in doğru yolu
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Bir hata oluştu!');
    }
};

exports.showDashboard = (req, res) => {
    if (!req.session.user) {
        return res.redirect('/login');
    }
    res.sendFile(path.join(__dirname, '../views/anasayfa.html')); // dashboard.html'in doğru yolu
};

exports.handleLogout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
};
