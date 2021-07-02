const Station = require('./station')

class City {
    constructor(name) {
        this.name = name
        this.stat = []
    }

    addstation(station) {
        this.stat.push(station)
    }
}

module.exports = City