const City = require('./city')
const Station = require('./station')


describe('city class', () => {
    const testcity = new City('Miami')
    const teststation = new Station("Dallas", 75050)

    test('has name', () => {
        expect(testcity.name).toBe('Miami')
    })

    test('adding stations to city', () => {
        testcity.addstation(teststation)
        expect(testcity.stat.length).toBe(1)
    })

})