import './styles.css';
import criancasCarro from '../../assets/criancas-carro.png';
import estradaDir from '../../assets/estrada-1.png';
import estradaEsq from '../../assets/estrada-2.png';
import carro from '../../assets/Jeep.png';
import naturalPeople from '../../assets/nature-people.png';
import Button from '../Buttons/Button';
import IconForm from '../IconForm';

const HeroSection = () => {

  const screenSize = window.screen.width;

  return (
    <div className="hero-section">
      <div className="street">
        <img alt="estrada" src={estradaEsq} />
      </div>
      <div className="main">
        <div>
          <div className="row">
            <span className="main-text">Faça da sua carona</span>
            <IconForm
              src={criancasCarro}
              width={screenSize > 600 ? '' : '200px'}
              height={screenSize > 600 ? '74px' : '80px'}
            />
          </div>
          <div className="row">
            <span className="main-text">uma ação</span>
            <IconForm
              src={carro}
              width={screenSize > 600 ? '' : '120px'}
              height={screenSize > 600 ? '74px' : '50px'}
              margin="15px"
              className="car-icon"
              backgroundColor="#ED8024"
              wide
            />
            <span className="main-text">sustentável</span>
            <IconForm
              src={naturalPeople}
              width={screenSize > 600 ? '' : '50px'}
              height={screenSize > 600 ? '' : '50px'}
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
      <div className="street">
        <img alt="estrada" src={estradaDir} />
      </div>
    </div>
  );
};

export default HeroSection;
