const User = require('./user')

describe('user class', () => {
    const testuser = new User('mike', 17, 'mike@gmail.com', 2121)

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
})