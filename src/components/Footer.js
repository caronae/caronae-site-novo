import logo_caronae from 'assets/caronae-logo.png'
import app_store from 'assets/download-app-store.png'
import google_play from 'assets/download-google-play.png'
import linha_colorida from 'assets/linha-colorida.png'
import './Footer.css'


export default function Footer(){
    return(
    <body>
        <main> 
             <div className='logo'>
                <img src={logo_caronae} alt="logo-caronae"/>
                <p className='texto descricao'>Projeto de Extensão da UFRJ</p>
                <p className='texto-destaque descricao'>caronae@caronae.org</p>
            </div>
            <div className='caronae'>
                <p className='texto-destaque'>Caronaê</p>
                <p className='texto'>Aplicativo</p>
                <p className='texto'>FAQ</p>
                <p className='texto'>Falaê</p> 
                <p className='texto'>Política de Privacidade</p>
                <p className='texto'>Termos de Uso</p>
            </div>
            <div className='apoiadores'>
                <p className='texto-destaque'>Apoiadores</p>
                <p className='texto'>Instituto de Computação</p>
                <p className='texto'>Parque Tecnológico UFRJ</p>
                <p className='texto'>Agência UFRJ de Inovação</p>
                <p className='texto'>Prefeitura UFRJ</p>
                <p className='texto'>Instituto Brasileiro de Transporte Sustentável</p>
                <p className='texto'>Fundo Verde UFRJ</p>
            </div>
            <div className='baixar-app'>
                <p className='texto-destaque'>Baixe o aplicativo do Caronaê</p>
                <img className='img-download' src={app_store} alt="download app store"/>
                <img className='img-download' src={google_play} alt="download google play"/>
            </div>
        </main>
        <footer>
            <div className='caronae-direitos'>
                <img className='linha-colorida' src={linha_colorida} alt="linha-colorida"/>
                <p className='texto'>Caronaê UFRJ © 2023 - Todos os direitos reservados</p>
            </div>
        </footer>
    </body>

    );
}