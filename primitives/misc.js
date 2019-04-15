module.exports = {
    parcel: {
        statuses: {
            waiting: 'waiting',
            picked: 'picked-up',
            dropped: 'dropped',
            delivered: 'delivered'
        },
        types: {
            box: 'box',
            letter: 'letter'
        },
        weights: {
            box: {
                min: 0,
                max: 3000
            },
            letter: {
                min: 0,
                max: 200
            }
        }
    }
    
    
}