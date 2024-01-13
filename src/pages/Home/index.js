import Apoiadores from '../../components/Apoiadores';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import {NossoFoco} from '../../components/NossoFoco';
import Falae from '../../components/Falae';
import Projeto from '../../components/Projeto';
import SolucoesDoCaronae from '../../components/SolucoesDoCaronae';


const Home = () => {
    return (
      <>
        <Navbar/>
        <HeroSection/>
        <Projeto/>
        <NossoFoco/>
        <SolucoesDoCaronae/>
        <Apoiadores/>
        <Falae/>
        <Footer/>
      </>
    )
}

export default Home;
