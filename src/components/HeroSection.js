import './HeroSection.css'
import estradaEsq from '../assets/estrada-1.png'
import estradaDir from '../assets/estrada-2.png'
import IconForm from './IconForm';
import {BasicButton,Button } from './Button';

export default function HeroSection(){
    return(
        <div class="hero-section">
            <div id="street1" class="street"> 
                <img alt ='estrada' src={estradaEsq}/>
            </div>
            <div class="main">
                <div class="text">
                    <div class='row'>
                        <span class="main-text">Faça da sua</span>
                        <IconForm src={require('../assets/criancas-carro.png')} image/> 
                        <span class="main-text">carona</span>
                    </div>
                    <div class='row'>
                        <span class="main-text">uma ação</span>
                        <IconForm src={require('../assets/Jeep.png')} widht='153px'  height='74px' backgroundColor='#ED8024' wide/>
                        <span class="main-text">sustentável</span>
                        <IconForm src={require('../assets/nature-people.png')} backgroundColor='#17B270' shadow='#6E361F' />
                    </div>
                    <p class='subtext'>
                    Economize enquanto protege o planeta!
                    </p>
                </div>
                <div class='bnt'>
                    <Button fontSize= '16px' textContent='Explore nosso projeto' backgroundColor='#2B388A' color='#FEFEFE' height='58px'/>
                </div>
            </div>
            <div id="street2" class="street"> <img alt ='estrada' src={estradaDir}/></div>
        </div>
    )
}