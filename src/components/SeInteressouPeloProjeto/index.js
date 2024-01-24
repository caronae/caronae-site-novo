import './styles.css';
import imagemAmigos from '../../assets/amigos.jpeg';
import Chip from '../Chip/';
import ImagePill from '../ImagePill';
import MailIcon from '../MailIcon';

export default function SeInteressouPeloProjeto () {
    return (
        <div className="container">
            <SeInteressouHeading />
            <SeInteressouForm />
            <Chip backgroundColor="#17b270"
                  borderRadius="65px"
                  width="400px"
                  height="130px"/>
            <MailIcon />
            <MailIcon />
            <Chip backgroundColor="#6e361f"
                  borderRadius="65px"
                  width="400px"
                  height="131px"/>
            <MailIcon />
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
    /*
    return ({
        <form className="se-interessou-form">
            <span>
                <TextInput />
                <TextInput />
            </span>
            <TextInput />
            <TextArea />
        </form>
    );
    */
    return (<div></div>);
}
