import React from 'react';
import ReactDom from 'react-dom'

const App = () => <p>Hello</p>

ReactDom.render(<App />,
    document.getElementById('root'))

class OApp {
    hello = async (name = 'Mike') => {
        console.log(`Hello ${name}`)
        console.log([1,2, [2, 3]].flat())
    }
}

const oapp = new OApp()
oapp.hello()
    .then(() => console.log('done'))
    .catch(() => console.log('error'))

