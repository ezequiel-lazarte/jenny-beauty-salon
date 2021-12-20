import React from 'react';
import Foto from './../img/fotografia.jpg';

const SobreMi = () => {
    return (
        <div id="sobreMi">
            <h1>Sobre Mi</h1>
            <div className='sobreMi'>
                <img src={Foto} alt="fotografia" />
                <p>Hola soy Miranda Jenifer y me dedico a la peluquería desde el 2019, actualmente tengo mi local en Santa Fe Capital, pero también estoy en Recreo, Santa Fe. Estoy en constante capacitación y estoy incursionando en el rubro de la manicura de uñas. En un futuro tengo planeado expandir mi local para vender ropa y más.<br /><br />Cualquier consulta o duda no dudes en comunicarte conmigo.<br /><br />Te dejo mis redes sociales y un número de contacto.</p>
            </div>
        </div>
    );
}

export default SobreMi;