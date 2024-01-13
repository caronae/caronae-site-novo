import './styles.css';
import { Link } from 'react-router-dom';
import  pontoImg from '../../assets/ponto-caronae.png';

export default function SolucoesDoCaronae () {
    return (
        <div className="solucoes-do-caronae">
            <div className="linha-1">
                <Titulo />
                <PontosDeCarona />
                <PontoImg />
            </div>
            <div className="linha-2">
                <VideoEmbutido videoURL="https://www.youtube.com/embed/0oFXlOWgIrc?si=WHsJgXqppP0zghWI" />
                <InfoApp />
            </div>
        </div>
    )
}

const Titulo = () => {
    return (
        <div className="titulo">
            <h1>Nós desenvolvemos  uma solução para tornar a mobilidade sustentável</h1>
        </div>
    );
};

const PontosDeCarona = () => {
    return (
        <div className="pontos-de-carona">
            <h2>Pontos de Carona</h2>
            <p>São placas localizadas dentro do ambiente universitário onde os motoristas podem oferecer uma carona e os passageiros podem aguardar ela.</p>
        </div>
    );
};

const PontoImg = () => {
    return (
        <div className="ponto-img">
            <img className="imagem" src={ pontoImg }/>
        </div>
    );
};

const VideoEmbutido = ({ videoURL }) => {
    return (
        <div className="video-embutido">
            <iframe className="video"
                width="560"
                height="315"
                src={ `${videoURL}?rel=0&modestbranding=1&controls=0` }
                title="Caronaê"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
        </div>
    );
};

const InfoApp = () => {
    return (
        <div className="info-app">
            <h2>Aplicativo</h2>
            <p>Conecta pessoas que desejam pegar uma carona e motoristas. O Caronaê tem como objetivo reduzir o impacto ambiental causado pelos transportes.</p>
            <Link className="botao-app" style={{textDecoration: 'none'}}>Conheça o app do Caronaê</Link>
        </div>
    );
};
