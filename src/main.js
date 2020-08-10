
class App {
    hello = async (name = 'Mike') => {
        console.log(`Hello ${name}`)
    }
}

const app = new App()
app.hello()
    .then(() => console.log('done'))
    .catch(() => console.log('error'))

