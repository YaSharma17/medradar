// import React from 'react';
// //import { createRoot } from 'react-dom/client';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'normalize.css';
// import './common.css';

// // Get the root element from the DOM
// const container = document.getElementById('root');

// // Create a root for your React app
// const root = createRoot(container);

// // Render your App component into the root
// root.render(<App />);

// // If you want to start measuring performance in your app,
// // you can use reportWebVitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './common.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
