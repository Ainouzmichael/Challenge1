const Scooter = require('./scooter')

describe('scooter class ', () => {
    const testscooter = new Scooter(13, 32, false)

    test('has id', () => {
        expect(testscooter.scooterid).toBe(13)
    })

    test('has HP', () => {
        expect(testscooter.HP).toEqual(32)
    })

    test('is broken', () => {
        expect(testscooter.broke).toEqual(false)
    })

})