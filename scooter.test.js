const Scooter = require('./scooter')

describe('scooter class ', () => {
    const testscooter = new Scooter(13, 200, false, 0, true)

    test('has id', () => {
        expect(testscooter.scooterid).toBe(13)
    })

    test('has HP', () => {
        expect(testscooter.HP).toEqual(200)
    })

    test('is broken', () => {
        expect(testscooter.broke).toEqual(false)
    })

    test('has range', () => {
        expect(testscooter.range).toEqual(0)
    })

    test('is pluged', () => {
        expect(testscooter.pluged).toEqual(true)
    })

    test('scooter oncharge', () => {
        expect(!testscooter.oncharge(testscooter)).toBeTruthy()
    })

    test('is scooter available', () => {
        expect(testscooter.availablescoot(testscooter)).toBeTruthy()
    })

})