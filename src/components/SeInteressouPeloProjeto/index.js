import './styles.css';
import imagemAmigos from '../../assets/amigos.jpeg';
import Chip from '../Chip/';
import { TextInput, TextArea, SubmitButton } from '../Form';
import ImagePill from '../ImagePill';
import MailIcon from '../MailIcon';

export default function SeInteressouPeloProjeto () {

    return (
        <div className="se-interessou-container">

            <SeInteressouHeading />
            <SeInteressouForm />

            <MarginDecoration element={ <Chip width="400px" height="130px"
                                              backgroundColor="#17B270" /> }
                              rotation="-25deg" xOffset="-300px" yOffset="-100px" />

            <MarginDecoration element={ <MailIcon size="140px" backgroundColor="#2B388A" /> }
                              rotation="30deg" xOffset="-200px" yOffset="70px" />

            <MarginDecoration element={ <MailIcon size="140px" backgroundColor="#EB3D38" /> }
                              rotation="-20deg" xOffset="1130px" yOffset="-180px" />

            <MarginDecoration element={ <Chip width="400px" height="130px"
                                              backgroundColor="#6E361F" /> }
                              rotation="25deg" xOffset="1170px" yOffset="70px" />

            <MarginDecoration element={ <MailIcon size="175px" backgroundColor="#ED8024" /> }
                              rotation="30deg" xOffset="1200px" yOffset="200px" />

        </div>
    );
}

function SeInteressouHeading () {

    return (
        <div className="se-interessou-heading">
            <h1>Se interessou pelo projeto? Nos envie uma mensagem</h1>
            <span>
                <ImagePill width="350px"
                           height="115px"
                           src={ imagemAmigos } />
                <MailIcon backgroundColor="#eb72ac"
                          size="115px" />
            </span>
        </div>
    );
}

function SeInteressouForm () {

    const handleSubmit = event => {

        event.preventDefault();
        // TODO: fazer o envio
    };

    return (
        <form className="se-interessou-form" onSubmit={ handleSubmit }>
            <span>
                <TextInput name="nome" id="nome" label="Nome"/>
                <TextInput name="email" id="nome" label="E-mail"
                           placeholder="nome@email.com" />
            </span>

            <TextInput name="objetivo" id="objetivo"
                       label="Objetivo do e-mail"
                       placeholder="Quero participar da extensão" />

            <TextArea name="mensagem" id="mensagem" label="Mensagem"
                      rows="4" placeholder="Escreva aqui" />

            <SubmitButton />
        </form>
    );
}

function MarginDecoration ({ element, rotation, xOffset, yOffset }) {
    return (
        <div style={{ position: 'absolute',
                      transform: `rotate(${rotation})`,
                      left: xOffset,
                      top: yOffset }} >
        { element }
        </div>
    );
}
