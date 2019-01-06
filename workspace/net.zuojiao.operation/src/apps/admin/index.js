import React            from 'react';
import ReactDOM         from 'react-dom';
import Main             from './index.jsx';
import './index.less';



const appContainerElement = document.getElementById('appRoot');

ReactDOM.render(<Main />, appContainerElement);

module.hot && module.hot.accept();
