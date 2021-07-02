const Station = require('./station')
const Scooter = require('./scooter')

describe('station object', () => {
    const teststation = new Station("Dallas", 75050)
    const testscooter = new Scooter(21, 33, false)
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

    test('scooter oncharge', () => {
        expect(teststation.oncharge(testscooter)).toBeTruthy()
    })

})