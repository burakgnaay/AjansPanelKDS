exports.getPieData = (req, res) => {
    // Sabit veri
    const data = {
        labels: ['Yozo Urban'],  // Grafik için etiketler
        datasets: [{
            label: 'Harcanan Bütçe Oranı',
            data: [100],  // Yozo Urban %100 olacak
            backgroundColor: ['#36A2EB'],  // Mavi renk
            borderColor: ['#1C5D8C'],
            borderWidth: 1
        }]
    };
    
    res.json(data);  // JSON olarak döndür
};
