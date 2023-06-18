import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './FirstApp';
import {CounterApp} from './CounterApp';

// Importacion de estilos globales
import './styles.css';

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* el title es una property que le asignamos en el componente padre para pasarlo al coomponente hijo*/}
        <App title="Hola soy Goku" />
        {/* <CounterApp value={20}/> */}
    </React.StrictMode>
);