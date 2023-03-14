import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/caronae-logo.png';

export default function Navbar() {
  return (
    <div className="container-navbar">
      <img src={logo} className="navbar-logo" />
      <div className="navbar-menu">
        <div className="navbar-item">Home</div>
        <div className="navbar-item">Conheça o projeto</div>
        <div className="navbar-item">Histórico</div>
        <div className="navbar-item">Aplicativo</div>
        <div className="navbar-item">FAQ</div>
      </div>  
      <button className="navbar-dl-button"></button>
    </div>
  );
}

