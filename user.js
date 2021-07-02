const Scooter = require('./scooter')


class User {
    constructor(name, age, emailaddress, id, balance, renting) {
        this.name = name
        this.age = age
        this.emailaddress = emailaddress
        this.id = id
        this.balance = balance
        this.renting = renting
    }

    markscooterasbroke(scooter) {
        scooter.broke = true
    }

}

module.exports = User