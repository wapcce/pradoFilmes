import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './Menu.css';
import Button from '../Button/index';
import { Link } from 'react-router-dom';
//import ButtonLink from './components/ButtonLink/index';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="PradoFilms" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastroVideo">
        Novo video
      </Button>
    </nav>
  );
}

export default Menu;
