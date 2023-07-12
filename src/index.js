import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
//import './index.css';
//import reportWebVitals from './reportWebVitals';

import './index.css';


//continue!!
// const history = createBrowserHistory() dont need this line since jsx has it


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

//promises exploring

//waits two seconds to print this out
//create promises that lets 

//can add reject method 





// new Promise((resolve,reject) => {
// return reject(new Error('No Bears'));

// setTimeout(() => {
//     resolve('Bears, Beets, Battlestar Galactica')

// },2000)
// })
// .then(quote => {
// console.log(quote)
// })
// .catch(error => console.log('error',error)) //handles errors