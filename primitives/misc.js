module.exports = {
    parcel: {
        status: {
            waiting: 'waiting',
            picked: 'picked-up',
            dropped: 'dropped',
            delivered: 'delivered'
        },
        types: [
            // box
            {
                name: 'box',
                weights: {
                    min: 0,
                    max: 3000
                }
            },
            
            //letter
            {
                name: 'letter',
                weights: {
                    min: 0,
                    max: 200
                }
            }
        ],
    },
    station: {
        types: [
            //normal
            {
                name: 'normal',
            },
            
            //fast charger
            {
                name: 'fast',
            }
        ]
    }
    
}