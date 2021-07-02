const User = require('./user')

class App {
    constructor() {
        this.users = []
    }

    adduser(user) {
        this.users.push(user)
    }

    checkuserage(user) {
        if (user.age < 18) {
            return false
        } else {
            return true
        }
    }
}

module.exports = App