// Sabit verilerinizi const olarak tanımlıyoruz
const icerikData = [
    { icerik_tur_ad: "1-Video", toplam_gelir: 498106 },
    { icerik_tur_ad: "2-Görsel", toplam_gelir: 326755 },
    { icerik_tur_ad: "4-Reels", toplam_gelir: 458225 }, 
    { icerik_tur_ad: "5-Carousel", toplam_gelir: 289600 },
];

exports.getIcerikPerformans = async (req, res) => {
    try {
        // Sabit verileri JSON formatında frontend'e gönderiyoruz
        res.json(icerikData);
    } catch (err) {
        console.error("Veri Hatası:", err);
        res.status(500).json({ error: "Veri hatası" });
    }
};
