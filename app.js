const express = require('express');
const session = require('express-session');
const path = require('path');
const authRoutes = require('./routes/authRoutes');
const anasayfaRoutes = require('./routes/anasayfaRoutes'); 
const db = require('./db');
const yozoRoutes = require('./routes/yozoRoutes'); 
const ekiplerRoutes = require('./routes/ekiplerRoutes');
const odemelerRoutes = require('./routes/odemelerRoutes'); 
const userRoutes = require('./routes/userRoutes');
const roiRoutes = require('./routes/roiRoutes');
const spentRoutes = require('./routes/spentRoutes');
const revenueRoutes = require('./routes/revenueRoutes');
const markasayiRoutes = require('./routes/markasayiRoutes');
const pieRoutes = require('./routes/pieRoutes'); 
const kampanyaRoutes = require('./routes/kampanyaRoutes'); 
const icerikRoutes = require('./routes/icerikRoutes');
const kampanyaturRoutes = require('./routes/kampanyaturRoutes');
const platformRoutes = require('./routes/platformRoutes');
const ekipperformansRoutes = require('./routes/ekipperformansRoutes');
const ekipkarsilastirmaRoutes = require('./routes/ekipkarsilastirmaRoutes');
const odemebilgiRoutes = require('./routes/odemebilgiRoutes');

const app = express(); 


app.use(express.static(path.join(__dirname, 'public')));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    session({
        secret: 'gizli-anahtar',
        resave: false,
        saveUninitialized: false,
    })
);
app.use(express.json());






app.get('/', (req, res) => {
    res.redirect('/login'); 
});
app.use('/', authRoutes); 
app.use('/', anasayfaRoutes); 
app.use('/', yozoRoutes);
app.use('/', ekiplerRoutes);
app.use('/', odemelerRoutes); 
app.use(userRoutes);
app.use('/roi' , roiRoutes);
app.use(spentRoutes);
app.use(revenueRoutes);
app.use(markasayiRoutes);
app.use(pieRoutes);
app.use('/api', kampanyaRoutes);
app.use('/icerik', icerikRoutes);
app.use('/kampanyatur', kampanyaturRoutes);
app.use('/platform', platformRoutes);
app.use('/ekip', ekipperformansRoutes);
app.use(ekipkarsilastirmaRoutes);
app.use('/odeme', odemebilgiRoutes);




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
