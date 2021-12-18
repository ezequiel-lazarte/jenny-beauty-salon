import React from 'react';
import Foto from './../img/fotografia.jpg';

const SobreMi = () => {
    return (
        <div id="sobreMi">
            <h1>Sobre Mi</h1>
            <div className='sobreMi'>
                <img src={Foto} alt="fotografia" />
                <p>Hola soy Miranda Jenifer y me dedico a la peluqueria, actualmente tengo mi local en Santa Fe Capital, pero tambien estoy en Recreo, Santa Fe, <br /><br />Cualquier consulta o duda no dudes en comunicarte conmigo.<br /><br />Te dejo mis redes sociales y un numero de contacto.</p>
            </div>
        </div>
    );
}

export default SobreMi;