import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import './style/softUI.css';
import './style/underlineBtn.css';
import './style/responsive.css';
import NavWebsite from './Components/NavWebsite';
import store from './store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <NavWebsite />
    </Provider>
);

