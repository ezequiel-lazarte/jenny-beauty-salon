import React from 'react';
import Data from './../data/lista_precios.json';
import './Inicio.css';

const Inicio = () => {
    return (
        <div id="inicio">
            <h1 className='titulo'>Listado de precios</h1>
            <main>
                {
                    Data.map((item) => {
                        return (
                        <div className='item'>
                            <h2 className='tipo'>{item.type}</h2>
                            <p className='precio'>{item.price}</p>
                        </div>
                        );
                    })
                }
            </main>
        </div>
    )
}

export default Inicio
