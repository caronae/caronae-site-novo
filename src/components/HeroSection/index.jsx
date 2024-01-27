import './styles.css';
import estradaEsq from '../../assets/estrada-1.png';
import estradaDir from '../../assets/estrada-2.png';
import criancasCarro from '../../assets/criancas-carro.png';
import carro from '../../assets/Jeep.png';
import IconForm from '../IconForm';
import Button from '../Buttons/Button';
import naturalPeople from '../../assets/nature-people.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div id="street1" className="street">
        {' '}
        <img alt="estrada" src={estradaDir} />
      </div>
      <div className="main">
        <div className="text">
          <div className="row">
            <span className="main-text">Faça da sua</span>
            <IconForm src={criancasCarro} margin="10px" image />
            <span className="main-text">carona</span>
          </div>
          <div className="row">
            <span className="main-text">uma ação</span>
            <IconForm
              src={carro}
              widht="153px"
              height="74px"
              margin="10px"
              backgroundColor="#ED8024"
              wide
            />
            <span className="main-text">sustentável</span>
            <IconForm
              src={naturalPeople}
              margin="10px"
              backgroundColor="#17B270"
              shadow="#6E361F"
            />
          </div>
          <p className="subtext">
            Economize enquanto protege o planeta!
          </p>
        </div>
        <div className="bnt">
          <Button
            fontSize="16px"
            textContent="Explore nosso projeto"
            backgroundColor="#2B388A"
            color="#FEFEFE"
            height="58px"
          />
        </div>
      </div>
      <div id="street2" className="street">
        {' '}
        <img alt="estrada" src={estradaEsq} />
      </div>
    </div>
  );
};

export default HeroSection;
