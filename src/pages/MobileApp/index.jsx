import ComoOAppFunciona from '../../components/ComoOAppFunciona';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import SeInteressouPeloProjeto from '../../components/SeInteressouPeloProjeto';
import SejaUmMotorista from '../../components/SejaUmMotorista';
import VaDeCaronae from '../../components/VaDeCaronae';

const MobileApp = () => {
  return (
    <>
    <Navbar />
    <VaDeCaronae />
    <SejaUmMotorista />
    <ComoOAppFunciona />
    <SeInteressouPeloProjeto withDecoration={false} />
    <Footer/>
    </>
  );
};

export default MobileApp;
