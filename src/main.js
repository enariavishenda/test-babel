
class App {
    hello = (name = 'Mike') => {
        console.log(`Hello ${name}`)
    }
}

const app = new App()
app.hello()

