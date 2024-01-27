import './styles.css';
import card3 from '../../assets/caronae.png';

export default function Solucoes() {
  return (
    <div className="container">
      <div className="top-cards">
        <div className="card1">
          <h1>
            Nós desenvolvemos <br />
            uma solução para <br />
            tornar a mobilidade <br />
            sustentável
          </h1>
        </div>
        <div className="card2">
          <h2>Pontos de Carona</h2>
          <p>
            São placas localizadas dentro do ambiente <br />
            universitário onde os motoristas podem <br />
            oferecer uma carona e os passageiros podem <br />
            aguardar ela.
          </p>
        </div>
        <div>
          <img src={card3} alt="Pontos de carona" width="100%" />
        </div>
      </div>
      <div className="bottom-cards">
        <div className="card3">
          <iframe
            height="304"
            src="https://www.youtube.com/embed/lWnvYYsMPew?si=_jNly_zlODiiDDzs"
            allowFullScreen
          ></iframe>
        </div>
        <div className="card4">
          <h2>Aplicativo</h2>
          <p>
            Conecta pessoas que desejam pegar uma carona e <br />
            motoristas. O Caronaê tem como objetivo reduzir o <br />
            impacto ambiental causado pelos transportes.
          </p>
          <button className="btn">Conheça o app do Caronaê</button>
        </div>
      </div>
    </div>
  );
}
