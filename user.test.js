const User = require('./user')
const Scooter = require('./scooter')

describe('user class', () => {
    const testuser = new User('mike', 17, 'mike@gmail.com', 2121, 321.21, false)
    const testscooter = new Scooter(21, 200, false, 0, true)


    test('has name', () => {
        expect(testuser.name).toBe('mike')
    })

    test('has age', () => {
        expect(testuser.age).toEqual(17)
    })

    test('has @', () => {
        expect(testuser.emailaddress.split('@')[1]).toEqual('gmail.com')
    })

    test('has userId', () => {
        expect(testuser.id).toEqual(2121)
    })

    test('has he rent a scooter', () => {
        expect(testuser.renting).toEqual(false)
    })

    test('has balance', () => {
        expect(typeof(testuser.balance)).toEqual('number')
        expect(testuser.balance).toEqual(321.21)
    })

    test('add to broke', () => {
        testuser.markscooterasbroke(testscooter)
        expect(testscooter.broke).toEqual(true)
    })
})