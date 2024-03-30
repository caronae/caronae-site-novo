import './styles.css';
import imagemAmigos from '../../assets/amigos.jpeg';
import { TextInput, TextArea, SubmitButton } from '../Form';
import ImagePill from '../ImagePill';
import MailIcon from '../MailIcon';

export default function SeInteressouPeloProjeto() {
  return (
    <div className="se-interessou-container">
      <SeInteressouHeading />
      <SeInteressouForm />

      <MarginDecoration
        element={
          <Pill
            width="400px"
            height="130px"
            backgroundColor="rgba(23, 178, 112, 1)"
          />
        }
        rotation="-25deg"
        left="-300px"
        top="-140px"
      />

      <MarginDecoration
        element={<MailIcon size="140px" backgroundColor="#2B388A" />}
        rotation="30deg"
        left="-200px"
        top="100px"
      />

      <MarginDecoration
        element={<MailIcon size="140px" backgroundColor="#EB3D38" />}
        rotation="-20deg"
        right="-100px"
        top="-180px"
      />

      <MarginDecoration
        element={
          <Pill
            width="400px"
            height="130px"
            backgroundColor="rgba(110, 54, 31, 1)"
          />
        }
        rotation="25deg"
        right="-450px"
        top="80px"
      />

      <MarginDecoration
        element={<MailIcon size="175px" backgroundColor="#ED8024" />}
        rotation="30deg"
        right="-250px"
        bottom="0px"
      />
    </div>
  );
}

function SeInteressouHeading() {
  return (
    <div className="se-interessou-heading">
      <h1>Se interessou pelo projeto? Nos envie uma mensagem</h1>
      <span>
        <ImagePill width="350px" height="115px" src={imagemAmigos} />
        <MailIcon backgroundColor="#eb72ac" size="115px" />
      </span>
    </div>
  );
}

function SeInteressouForm() {
  const handleSubmit = event => {
    event.preventDefault();
    // TODO: fazer o envio
  };

  return (
    <form className="se-interessou-form" onSubmit={handleSubmit}>
      <span>
        <TextInput name="nome" id="nome" label="Nome" />
        <TextInput
          name="email"
          id="nome"
          label="E-mail"
          placeholder="nome@email.com"
        />
      </span>

      <TextInput
        name="objetivo"
        id="objetivo"
        label="Objetivo do e-mail"
        placeholder="Quero participar da extensão"
      />

      <TextArea
        name="mensagem"
        id="mensagem"
        label="Mensagem"
        rows="4"
        placeholder="Escreva aqui"
      />

      <SubmitButton />
    </form>
  );
}

function MarginDecoration(props) {
  return (
    <div
      style={{
        position: 'absolute',
        transform: `rotate(${props.rotation})`,
        right: props.right,
        left: props.left,
        top: props.top,
        bottom: props.bottom
      }}
    >
      {props.element}
    </div>
  );
}

const Pill = (props) => {
  return (
      <div style={{ height: props.height, width: props.width, backgroundColor: props.backgroundColor,
        borderRadius: props.height }} />
  );
};
