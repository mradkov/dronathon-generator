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
                        loaded: 2
                    }
                },
                storage: {
                    capacity: 3000
                },
                speed: {
                    empty: 10,
                    loaded: 17
                }
            },

            // type 2
            {
                name: 'type 2',
                battery: {
                    max: 1200, // mAh
                    charge: {
                        normal: 0.3,
                        fast: 1
                    },
                    drown: {
                        empty: 1,
                        loaded: 2
                    }
                },
                storage: {
                    capacity: 1100
                },
                speed: {
                    empty: 13,
                    loaded: 22
                }
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
        warehouse: {},
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
                charging: {
                    rate: 1
                }
            },
            
            //fast charger
            {
                name: 'fast',
                charging: {
                    rate: 2
                }
            }
        ]
    },
    warehouse: [
        {
            polygon: [
                [23.3040, 42.7040],
                [23.3401, 42.7040],
                [23.3401, 42.6859],
                [23.3040, 42.6859],
            ]
        }
    ],
}