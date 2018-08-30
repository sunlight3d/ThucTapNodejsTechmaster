/*
npm install --save mdbreact
*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './Signup';
//import App from './Signin';
//import App from './PostListAdmin';
//import App from './PostList';
import App from './AddNewPost';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
