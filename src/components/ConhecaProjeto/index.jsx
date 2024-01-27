import './styles.css';
import IconBlue from '../../assets/conheca-icon-blue.png';
import IconGreen from '../../assets/conheca-icon-green.png';
import IconOrange from '../../assets/conheca-icon-orange.png';
import IconPink from '../../assets/conheca-icon-pink.png';
import IconRed from '../../assets/conheca-icon-red.png';

export default function ConhecaProjeto() {
  return (
    <div className="conhecaProjeto">
      <div className="texto">
        <h1 className="conhecaTitulo">Conheça o Projeto</h1>
      </div>
      <div className="fotos">
        <img
          className="conheca-icon-red"
          src={IconRed}
          alt="conheca-icon-red"
        />
        <div>
          <p className="conhecaTexto">
            O Caronaê é um projeto de extensão da UFRJ, lançado{' '}
            <br />
            em 2016 como um sistema de caronas compartilhadas
            <br />
            seguro e prático direcionado à comunidade acadêmica.
          </p>
          <div className="historia">
            <button className="btn-historia">
              <strong>
                <p>Conheça nossa história</p>
              </strong>
            </button>
          </div>
        </div>
        <img
          className="conheca-icon-blue"
          src={IconBlue}
          alt="conheca-icon-blue"
        />
        <div className="foto-rosa">
          <img
            className="conheca-icon-pink"
            src={IconPink}
            alt="conheca-icon-pink"
          />
        </div>
        <div className="foto-verde">
          <img
            className="conheca-icon-green"
            src={IconGreen}
            alt="conheca-icon-green"
          />
        </div>
        <img
          className="conheca-icon-orange"
          src={IconOrange}
          alt="conheca-icon-orange"
        />
      </div>
    </div>
  );
}
