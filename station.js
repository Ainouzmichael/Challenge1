const Scooter = require('./scooter')

class Station {
    constructor(name, zipcode) {
        this.name = name
        this.zipcode = zipcode
        this.scoots = []
    }

    addscooter(scooter) {
        this.scoots.push(scooter)

    }

    oncharge(scooter) {
        if (scooter.HP < 200 && scooter.HP >= 0) {
            return true
        } else {
            return false
        }
    }

}


module.exports = Station