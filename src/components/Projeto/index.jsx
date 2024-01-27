import './style.css'
import Amigos from '../../assets/foto-amigos.png'

export default function Projeto() {
    return(
        <div className='projeto'>
            
                <div className='photo'>
                    <img className='fotoAmigos' src={Amigos} alt='foto-amigos'/>
                    <div className='numbers'>
                    <p><h1>16</h1>
                        Membros
                    </p>
                
                    <p><h1>5K</h1>
                        Caronas
                    </p>
                
                    <p><h1>+6K</h1>
                        Usuários
                    </p>
                
                    </div>
                </div>
                <div className='text'>
                    <h3>O projeto</h3>
                    <p>O Caronaê é um projeto de extensão da UFRJ, lançado em 2016 <br/>
                        como um sistema de caronas compartilhadas seguro e prático<br/>
                        direcionado à comunidade acadêmica.<br/>
                        <br/>
                        Hoje ele reúne x estudantes e possui três frentes:<br/>
                        Desenvolvimento, Dados e Comunicação.</p>

                    <div>
                        <button className='btn-carona'>
                            <strong><p>Conheça o Caronaê</p></strong>
                        </button>
                        <a href="#" className='textButton'>
                            Junte-se a nós!
                        </a>
                    </div>
                </div>
            
        </div>
        
        
    );
}