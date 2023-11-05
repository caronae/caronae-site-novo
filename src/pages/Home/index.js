import Apoiadores from '../../components/Apoiadores';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import { NossoFoco } from '../../components/NossoFoco';
import Falae from '../../components/Falae';


const Home = () => {
    return (
      <>
        <Navbar/>
        <HeroSection/>
        <NossoFoco/>
        <Apoiadores/>
        <Falae/>
        <Footer/>
      </>
    )
}

export default Home;
