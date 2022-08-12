import React from 'react';
import  ReactDOM  from 'react-dom';
import StudentContainer from './components/StudentContainer';

// const element = <h1>welcome to the torilo student mgt app!</h1>
ReactDOM.render(
 <React.StrictMode>
 <StudentContainer/>
</React.StrictMode>,
document.getElementById('root'));