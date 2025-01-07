// Sabit değer ile toplam marka sayısını döndüren fonksiyon
exports.getTotalMarkasayi = (req, res) => {
    try {
        // Sabit bir değer döndürülüyor, örneğin 120
        const totalMarkasayi = 1;

        res.json({ totalMarkasayi });
    } catch (error) {
        console.error('Hata:', error);
        res.status(500).json({ message: 'Bir hata oluştu' });
    }
};
