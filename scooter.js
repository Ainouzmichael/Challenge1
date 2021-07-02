class Scooter {
    constructor(scooterid, HP, broke, range, pluged) {
        this.scooterid = scooterid
        this.HP = HP
        this.broke = broke
        this.range = range
        this.pluged = pluged
    }

    empty(scooter) {
        if (scooter.HP == 0 || scooter.range >= 32) {
            return true
        } else {
            return false
        }
    }

    oncharge(scooter) {
        if (scooter.HP != 200 && scooter.pluged) {
            return true
        } else {
            return false
        }
    }

    availablescoot(scooter) {
        if (!scooter.broke && !scooter.oncharge(scooter) && !scooter.empty(scooter) && scooter.range == 0) {
            return true
        } else {
            return false
        }

    }


}

module.exports = Scooter