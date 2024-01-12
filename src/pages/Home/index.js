import Apoiadores from '../../components/Apoiadores';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import {NossoFoco} from '../../components/NossoFoco';
import Falae from '../../components/Falae';
import Projeto from '../../components/Projeto';

const Home = () => {
    return (
      <>
        <Navbar/>
        <HeroSection/>
        <Projeto/>
        <NossoFoco/>
        <Apoiadores/>
        <Falae/>
        <Footer/>
      </>
    )
}

export default Home;
