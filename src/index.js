import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import IconForm from './components/IconForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='icon-form'>
    <IconForm src={require('./assets/Jeep.png')} backgroundColor='#ED8024' wide />
    </div>
    <div className='icon-form'>
    <IconForm src={require('./assets/nature-people.png')} backgroundColor='#17B270' shadow='#6E361F' />
    </div>
    <div className='icon-form'>
    <IconForm src={require('./assets/criancas-carro.png')} image/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
