const Station = require('./station')
const Scooter = require('./scooter')
const User = require('./user')
const App = require('./app')

describe('station object', () => {
    const teststation = new Station("Dallas", 75050)
    const testscooter = new Scooter(21, 200, false, 0, true)
    const testuser = new User('mike', 18, 'mike@gmail.com', 2121, 321.21, false)
    const testapp = new App()

    test('station has a name', () => {
        expect(teststation.name).toBe("Dallas")
    })

    test('station has zipcode', () => {
        expect(teststation.zipcode).toBe(75050)
    })

    test('adding a scooter', () => {
        teststation.addscooter(testscooter)
        expect(teststation.scoots.length).toBe(1)
    })

    test('checking if users can rent a scooter', () => {
        expect(teststation.checkrental(testapp, testuser, testscooter)).toBeTruthy()
    })

    test('rent', () => {
        teststation.rent(testapp, testuser, testscooter)
        expect(!testscooter.pluged && testuser.renting).toBeTruthy()
    })
})