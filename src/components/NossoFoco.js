import './NossoFoco.css';
import {Chip} from './Chip';
import sustentabilidade from '../assets/svg_sustentabilidade.svg';
import seguranca from '../assets/svg_seguranca.svg';
import tempo from '../assets/svg_tempo.svg';
import centralizacao from '../assets/svg_centralizacao.svg';
import integracao from '../assets/svg_integracao.svg';

const NossoFoco = () => {
    return (
        <div className='container'>
            <div className="textArea">
                    <p className='text'>Nosso foco</p>
            </div>
            <div className='chipArea'>
                <div className='firstLine'>
                    <Chip width='250px' background='linear-gradient(268.85deg, #DFDFDF 5.64%, rgba(223, 223, 223, 0) 99.02%)' />
                    <Chip textContent='Sustentabilidade' backgroundColor='#17B270' background='#17B270' imgSrc={sustentabilidade} width='315px' imgSize='38px' />
                    <Chip textContent='Segurança' backgroundColor='#EB3D38' background='#EB3D38' imgSrc={seguranca} imgSize='42px' />
                    <Chip textContent='Tempo' backgroundColor='#2B388A' background='#2B388A' color="#FEFEFE" imgSrc={tempo} imgSize='45px' />
                    <Chip width='250px' background='#DFDFDF' />
                    <Chip width='30px' background='linear-gradient(270deg, rgba(223, 223, 223, 0) 46.98%, #DFDFDF 100%)' borderRadius='200px 0 0 200px' />
                </div>

                <div className='secondLine'>
                    <Chip width='50px' background='linear-gradient(268.85deg, #DFDFDF 5.64%, rgba(223, 223, 223, 0) 99.02%)' borderRadius='0 200px 200px 0' />
                    <Chip width='230px' background='#DFDFDF' />
                    <Chip textContent='Centralização' backgroundColor='#EB72AC' background='#EB72AC' imgSrc={centralizacao} imgSize='42px' />
                    <Chip textContent='Integração' backgroundColor='#ED8024' background='#ED8024' imgSrc={integracao} imgSize='42px' />
                    <Chip width='185px' background='#DFDFDF' />
                    <Chip width='70px' background='linear-gradient(270deg, rgba(223, 223, 223, 0) 46.98%, #DFDFDF 100%)' borderRadius='200px 0 0 200px' />
                </div>
            </div>
        </div>
    );
}

export {NossoFoco};