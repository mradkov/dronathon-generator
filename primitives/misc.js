module.exports = {
    drone: {
        types: [
            // type 1
            {
                name: 'type 1',
                battery: {
                    max: 2800, // mAh
                    charge: {
                        normal: 0.5,
                        fast: 2
                    },
                    drown: {
                        empty: 1,
                        loaded: 1
                    }
                },
                storage: {
                    capacity: 3000
                },
                speed: [10,17]
            },

            // type 2
            {
                name: 'type 2',
                battery: {
                    max: 1200, // mAh
                    charge: {
                        normal: 0.3,
                        fast: 1
                    }
                },
                storage: {
                    capacity: 1100
                },
                speed: [13,22]
            }
        ]
    },
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