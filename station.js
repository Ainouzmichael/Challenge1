const Scooter = require('./scooter')
const User = require('./user')
const App = require('./app')

class Station {
    constructor(name, zipcode) {
        this.name = name
        this.zipcode = zipcode
        this.scoots = []
    }

    addscooter(scooter) {
        this.scoots.push(scooter)
    }

    checkrental(app, user, scooter) {
        if (app.checkuserage(user) && user.balance > 0 && scooter.availablescoot(scooter) && !user.renting) {
            return true
        } else {
            return false
        }
    }

    rent(app, user, scooter) {
        if (this.checkrental(app, user, scooter)) {
            scooter.pluged = false
            user.renting = true
        }
    }

    pay(user, scooter) {
        user.balance = user.balance - (scooter.range * 0.25)
    }

    return (app, user, scooter) {
        if (scooter.pluged) {
            user.renting = false
            scooter.range = 0
            pay(user, scooter)
        }
    }

}
module.exports = Station