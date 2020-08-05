import React from 'react';
import Logo from '../../assets/img/LogoMain.png';
import './Menu.css';
import Button from '../Button/index';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> origin/master
//import ButtonLink from './components/ButtonLink/index';

function Menu() {
  return (
    <nav className="Menu">
<<<<<<< HEAD
      <Link to="/">
        <img className="Logo" src={Logo} alt="PradoFilms" />
      </Link>
      <Button as={Link} className="ButtonLink" to="/cadastroVideo">
=======
      <a href="/">
        <img className="Logo" src={Logo} alt="PradoFilms" />
      </a>
      <Button as="a" className="ButtonLink" href="/">
>>>>>>> origin/master
        Novo video
      </Button>
    </nav>
  );
}

export default Menu;
