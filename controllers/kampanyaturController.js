const kampanyaturData = [
    { kampanya_tur_ad: "1-Kış İndirimi", toplam_gelir: 145325 },
    { kampanya_tur_ad: "2-Yaz İndirimi", toplam_gelir: 149600 },
    { kampanya_tur_ad: "3-Influencer İşbirlikleri", toplam_gelir: 198550 },
    { kampanya_tur_ad: "4-Yeni Koleksiyon Tanıtımı", toplam_gelir: 184250 },
    { kampanya_tur_ad: "5-Moda Trendleri", toplam_gelir: 192710 },
    { kampanya_tur_ad: "6-Çekiliş ve Yarışmalar", toplam_gelir: 87750 },
    { kampanya_tur_ad: "7-Marka Hikayesi ve Vizyonu", toplam_gelir: 146800 },
    { kampanya_tur_ad: "8-Özel Günler", toplam_gelir: 364941 },
    { kampanya_tur_ad: "9-İlkbahar ve Sonbahar İndirimleri", toplam_gelir: 123760 },]
    
    

exports.getKampanyaturPerformans = async (req, res) => {
    try {
        res.json(kampanyaturData);
    } catch (err) {
        console.error("Veri Hatası:", err);
        res.status(500).json({ error: "Veri hatası" });
    }
};
