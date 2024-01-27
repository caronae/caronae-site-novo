import Agencia from '../../assets/logo-agencia.png';
import Ic from '../../assets/logo-ic.png';
import Parque from '../../assets/logo-pqtec.png';
import UFRJ from '../../assets/logo-ufrj.png';
import Prefeitura from '../../assets/logo-prefeitura.png';
import IBTS from '../../assets/logo-ibts.png';
import FundoVerde from '../../assets/logo-fv.png';
import './style.css';

export default function Apoiadores() {
  return (
    <div className="apoiadores">
      <h2 className="apoiadoresTitulo">Apoiadores</h2>
      <p className="apoiadoresParagrafo">
        Juntos, desenvolvendo soluções sustentáveis <br /> para a
        comunidade (hoje estamos na cidade universitária na UFRJ)
      </p>
      <div className="logosLinha1">
        <img src={UFRJ} alt="ufrj-pic" />
        <img src={Ic} alt="ic-pic" />
        <img src={Parque} alt="parque-pic" />
        <img src={Agencia} alt="agencia-pic" />
      </div>
      <div className="logosLinha2">
        <img src={Prefeitura} alt="prefeitura-pic" />
        <img src={IBTS} alt="IBTS-pic" />
        <img src={FundoVerde} alt="FundoVerde-pic" />
      </div>
    </div>
  );
}
