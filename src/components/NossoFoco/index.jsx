import './styles.css';
import centralizacao from '../../assets/svg_centralizacao.svg';
import integracao from '../../assets/svg_integracao.svg';
import seguranca from '../../assets/svg_seguranca.svg';
import sustentabilidade from '../../assets/svg_sustentabilidade.svg';
import tempo from '../../assets/svg_tempo.svg';
import useWindowDimensions from '../../hooks/UseWindowDimensions';
import Chip from '../Chip';

const NossoFoco = () => {
  const { width } = useWindowDimensions();
  const isGreatSize = (width >= 1200);

  return (
    <div className="container">
      <div className="textArea">
        <p className="text">Nosso foco</p>
      </div>
      <div className="chipArea">
        <div className="firstLine">
          {isGreatSize ?
            <Chip
              width="250px"
              background="linear-gradient(268.85deg, #DFDFDF 5.64%, rgba(223, 223, 223, 0) 99.02%)"
            />
          : null}
          <Chip
            textContent="Sustentabilidade"
            backgroundColor="#17B270"
            background="#17B270"
            width="315px"
            imgSrc={sustentabilidade}
            imgSize="25px"
          />
          <Chip
            textContent="Segurança"
            backgroundColor="#EB3D38"
            background="#EB3D38"
            imgSrc={seguranca}
            imgSize="30px"
          />
          <Chip
            textContent="Tempo"
            backgroundColor="#2B388A"
            background="#2B388A"
            color="#FEFEFE"
            imgSrc={tempo}
            imgSize="35px"
          />
          {isGreatSize ?
            <>
              <Chip width="250px" background="#DFDFDF" />
              <Chip
                width="30px"
                background="linear-gradient(270deg, rgba(223, 223, 223, 0) 46.98%, #DFDFDF 100%)"
                borderRadius="200px 0 0 200px"
              />
            </>
          : null}
        </div>

        <div className="secondLine">
        {isGreatSize ?
          <>
            <Chip
              width="50px"
              background="linear-gradient(268.85deg, #DFDFDF 5.64%, rgba(223, 223, 223, 0) 99.02%)"
              borderRadius="0 200px 200px 0"
            />
            <Chip width="230px" background="#DFDFDF" />
          </>
        : null}
          <Chip
            textContent="Centralização"
            backgroundColor="#EB72AC"
            background="#EB72AC"
            imgSrc={centralizacao}
            imgSize="25px"
          />
          <Chip
            textContent="Integração"
            backgroundColor="#ED8024"
            background="#ED8024"
            imgSrc={integracao}
            imgSize="25px"
          />
          {isGreatSize ?
            <>
              <Chip width="185px" background="#DFDFDF" />
              <Chip
                width="70px"
                background="linear-gradient(270deg, rgba(223, 223, 223, 0) 46.98%, #DFDFDF 100%)"
                borderRadius="200px 0 0 200px"
              />
            </>
          : null}
        </div>
      </div>
    </div>
  );
};

export { NossoFoco };
