const App = require('./app')
const User = require('./user')


describe('app', () => {
    const testapp = new App()

    const testuser = new User('mike', 18, 'mike@gmail.com', 2121, 321.21, false)

    test('adding users', () => {
        testapp.adduser(testuser)
        expect(testapp.users.length).toBe(1)
    })

    test('checking if users are over age', () => {
        expect(testapp.checkuserage(testuser)).toBe(true)
    })

})