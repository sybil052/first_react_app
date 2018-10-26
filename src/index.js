import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
// import App from './App';
// import ClickCounter from './ClickCounter';
// import ControlPanel from './chapter02/ControlPanel';
// import ControlPanel from './chapter03/flux/views/ControlPanel';
// import ControlPanel from './chapter03/redux/views/ControlPanel';
import TodoApp from './chapter04/TodoApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider>
        <TodoApp />
    </Provider>, document.getElementById('root')
);
registerServiceWorker();
