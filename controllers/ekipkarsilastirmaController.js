exports.getEkipkarsilastirmaData = (req, res) => {
    
    const data = {
        labels: ['1-Kozmos','2-Vortex','3-Pluto' ],  
        datasets: [{
            label: 'Yıllık Performans Karşılaştırması',
            data: [38.82 , 31.21 , 29.97],  // 
            backgroundColor: ['#f7650a' , '#03f4fc' , '#8403fc'  ], 
            borderColor: ['#c4c4c4'],

            borderWidth: 1
        }]
    };
    
    res.json(data);  
};
