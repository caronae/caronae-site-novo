import Footer from 'components/Footer';
import HeroSection from '../../components/HeroSection';
import Navbar from '../../components/Navbar';
import { NossoFoco } from '../../components/NossoFoco';

const Home = () => {
    return (
      <>
        <Navbar/>
        <HeroSection/>
        <NossoFoco/>
        <Footer/>
      </>
    )
}

export default Home;