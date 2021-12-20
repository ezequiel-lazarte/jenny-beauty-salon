import React from 'react';
import Data from './../data/trabajos.json';
import './Trabajos.css';

const Trabajos = () => {
    return (
        <div id='trabajos'>
            <h1>Referencias</h1>
            {
                Data.map((item) => {
                    return(
                        <div className='trabajo'>
                            <h2 className='titulo'>{item.tipe_job}</h2>
                            <p className='texto'>Antes</p>
                            <img src={item.img_before} alt="" />
                            <p className='texto'>Después</p>
                            <img src={item.img_later} alt="" />
                        </div>                      
                    );
                })
            }
        </div>
    );
}

export default Trabajos;
