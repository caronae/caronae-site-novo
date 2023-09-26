import './styles.css';
import logo from '../../assets/caronae-logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="container-navbar">
      <img src={logo} className="navbar-logo" />
      <div className="navbar-menu">
        <div className="navbar-item">
          <Link 
            style={{textDecoration: 'none', color: 'black'}} 
            to="/">Home</Link>
        </div>
        <div className="navbar-item">
          <Link 
            style={{textDecoration: 'none', color: 'black'}} 
            to="/about">Conheça o projeto</Link>
        </div>
        <div className="navbar-item">
          <Link 
            style={{textDecoration: 'none', color: 'black'}} 
            to="/history">Histórico</Link>
        </div>
        <div className="navbar-item"><Link 
            style={{textDecoration: 'none', color: 'black'}} 
            to="/app">Aplicativo</Link>
        </div>
        <div className="navbar-item">
          <Link 
            style={{textDecoration: 'none', color: 'black'}} 
            to="/faq">FAQ</Link>
        </div>
      </div>  
      <button className="navbar-dl-button">Baixe o app</button>
    </div>
  );
}

