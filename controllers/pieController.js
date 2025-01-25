exports.getPieData = (req, res) => {
    const data = {
        labels: ['Yozo Urban'],  
        datasets: [{
            label: 'Harcanan Bütçe Oranı',
            data: [100],  
            backgroundColor: ['#36A2EB'], 
            borderColor: ['#1C5D8C'],
            borderWidth: 1
        }]
    };
    
    res.json(data);  
};
