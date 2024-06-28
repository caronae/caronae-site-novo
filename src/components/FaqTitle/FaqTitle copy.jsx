import './styles.css';
import criancasCarro from '../../assets/criancas-carro.png';
import carro from '../../assets/Jeep.png';
import naturalPeople from '../../assets/nature-people.png';
import IconForm from '../IconForm';

const FAQTitle = () => {
  return (
    <div className="hero-section">
      <div className="main">
        <div className="text">
          <div className="row">
            <IconForm src={criancasCarro} margin="10px" image />
          </div>
          <div className="row">
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
          <iconDecoration
            element={
              <IconForm
                src={carro}
                margin="10px"
                backgroundColor="#17B270"
                shadow="#6E361F"
              />}
            rotation="30deg"
            right="0px"
            bottom="0px"
          />
          <p className="subtext">
            Economize enquanto protege o planeta!
          </p>
        </div>
      </div>
    </div>
  );
};

function iconDecoration(props) {
  return (
    <div
      style={{
        position: 'absolute',
        transform: `rotate(${props.rotation})`,
        right: props.right,
        left: props.left,
        top: props.top,
        bottom: props.bottom
      }}
    >
      {props.element}
    </div>
  );
}

export default FAQTitle;
