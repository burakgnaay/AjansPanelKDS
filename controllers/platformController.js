// Sabit verilerinizi const olarak tanımlıyoruz
const platformData = [
    { platform_ad: "1-Instagram", toplam_gelir: 910085 },
    { platform_ad: "2-Facebook", toplam_gelir: 86545 },
    { platform_ad: "3-Tiktok", toplam_gelir: 451756 },
    { platform_ad: "4-Twitter", toplam_gelir: 145350 },
    
];

exports.getPlatformPerformans = async (req, res) => {
    try {
        // Sabit verileri JSON formatında frontend'e gönderiyoruz
        res.json(platformData);
    } catch (err) {
        console.error("Veri Hatası:", err);
        res.status(500).json({ error: "Veri hatası" });
    }
};
