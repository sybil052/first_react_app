import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import ClickCounter from './ClickCounter';
// import ControlPanel from './chapter02/ControlPanel';
import ControlPanel from './chapter03/views/ControlPanel';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ControlPanel />, document.getElementById('root')
);
registerServiceWorker();
