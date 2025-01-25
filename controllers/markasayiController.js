exports.getTotalMarkasayi = (req, res) => {
    try {
        const totalMarkasayi = 1;

        res.json({ totalMarkasayi });
    } catch (error) {
        console.error('Hata:', error);
        res.status(500).json({ message: 'Bir hata oluştu' });
    }
};
