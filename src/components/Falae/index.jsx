import './styles.css';
import { Link } from 'react-router-dom';
import falaeImg from '../../assets/falae-img.jpg';
import mailIcon from '../../assets/mail-icon.svg';

const Falae = () => {
  return (
    <div className="falae-container">
      <div className="texts">
        <h2 className="falae-heading">Falaê</h2>
        <p className="falae-text">
          Aceitamos sugestões de funcionalidades, ideias e feedback
          para o aplicativo. Sinta-se à vontade para entrar em
          contato através do nosso e-mail.
        </p>
        <p className="falae-email">caronae@caronae.org</p>
        <div className="falae-links">
          <Link
            className="falae-duvida"
            style={{ textDecoration: 'none', color: 'black' }}
            to="/faq"
          >
            Tenho uma dúvida
          </Link>
          <LinkMailto
            mailto="mailto:caronae@caronae.org"
            label="Entrar em contato"
          />
        </div>
      </div>
      <div className="images">
        <div className="falae-rectangle"></div>
        <div className="falae-icon-img">
          <div className="falae-icon-container">
            <img className="falae-icon" src={mailIcon} />
          </div>
          <div className="falae-img-container">
            <img className="falae-img" src={falaeImg} />
          </div>
        </div>
      </div>
    </div>
  );
};

const LinkMailto = ({ mailto, label }) => {
  return (
    <Link
      className="falae-contato"
      style={{ textDecoration: 'none' }}
      to=""
      onClick={e => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {' '}
      {label}{' '}
    </Link>
  );
};

export default Falae;
