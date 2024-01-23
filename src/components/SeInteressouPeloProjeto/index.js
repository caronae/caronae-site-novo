import './styles.css';
import imagemAmigos from '../../assets/amigos.jpeg';
import iconeEmail from '../../assets/email.svg';

export default function SeInteressouPeloProjeto () {
    return (
        <section className="se-interessou-pelo-projeto">
            <div className="conteudo">
                <div className="coluna-esquerda">
                    <h1>Se interessou pelo projeto?<br/>Nos envie uma mensagem</h1>
                    <span className="imagem-e-botao">
                        <div className="imagem" style={{ backgroundImage: `url(${imagemAmigos})` }} />
                        <IconeEmail bgColor="#EB72AC"
                                    diameter="140" />
                    </span>
                </div>
                <FormContato />
            </div>
        </section>
    );
}

function FormContato () {
    return (
        <form>
            <div className="info-usuario">
                <InputText id="nome"
                           name="nome"
                           label="Nome:"
                           width="250px" />
                <InputText id="email"
                           name="email"
                           label="E-Mail:"
                           placeholder="nome@email.com" />
            </div>
            <InputText id="objetivo-do-email"
                       name="objetivo-do-email"
                       label="Objetivo do e-mail" />
            <TextArea id="mensagem"
                      name="mensagem"
                      label="Mensagem"
                      rows="5" />
            <button className="enviar" type="button">Enviar</button>
        </form>
    );
}

function InputText ({ id, name, label, placeholder }) {
    return (
        <div className="text-area">
            <label htmlFor={ id }>{ label }</label>
            <input type="text"
                   id={ id }
                   name={ name }
                   placeholder= { placeholder } />
        </div>
    );
}

function TextArea ({ id, name, label, rows, cols, placeholder }) {
    return (
        <div className="text-area">
            <label htmlFor={ id }>{ label }</label>
            <textarea rows={ rows } cols={ cols } id={ id }
                      name={ name }
                      placeholder= { placeholder } />
        </div>
    );
}

function IconeEmail ({ bgColor, diameter }) {
    return (
        <div className="icone-email"
             style={{
                 backgroundColor: `${bgColor}`,
                 height: `${diameter}px`,
                 width: `${diameter}px`,
                 borderRadius: '50%' }} >
            <img src={ iconeEmail } style={{ width: `${diameter*0.4}px` }} />
        </div>
    );
}
