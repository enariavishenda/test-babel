import "core-js/modules/es.array.flat";
import "core-js/modules/es.array.unscopables.flat";
import "core-js/modules/es.promise";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import ReactDom from 'react-dom';

const App = () => /*#__PURE__*/React.createElement("p", null, "Hello");

ReactDom.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));

class OApp {
  constructor() {
    _defineProperty(this, "hello", async (name = 'Mike') => {
      console.log(`Hello ${name}`);
      console.log([1, 2, [2, 3]].flat());
    });
  }

}

const oapp = new OApp();
oapp.hello().then(() => console.log('done')).catch(() => console.log('error'));