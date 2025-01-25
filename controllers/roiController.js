const monthlyData = [
    { ay: "Ocak", avg_roi: 1.47 },
    { ay: "Şubat", avg_roi: 1.2 },
    { ay: "Mart", avg_roi: 1.35 },
    { ay: "Nisan", avg_roi: 1.26 },
    { ay: "Mayıs", avg_roi: 1.3 },
    { ay: "Haziran", avg_roi: 1.48 },
    { ay: "Temmuz", avg_roi: 1.6 },
    { ay: "Ağustos", avg_roi: 1.4 },
    { ay: "Eylül", avg_roi: 1.45 },
    { ay: "Ekim", avg_roi: 1.4 },
    { ay: "Kasım", avg_roi: 1.97 },
    { ay: "Aralık", avg_roi: 1.9 }
];

exports.getMonthlyROI = async (req, res) => {
    try {
        res.json(monthlyData);
    } catch (err) {
        console.error("Veri Hatası:", err);
        res.status(500).json({ error: "Veri hatası" });
    }
};
