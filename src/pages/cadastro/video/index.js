import React from 'react';
import TemplateBase from '../../../components/TemplateBase/index';
import { Link } from 'react-router-dom';

function cadastroVideo() {
  return (
    <TemplateBase>
      <h1> Cadastro de Video</h1>
      <Link to="/cadastroCategoria">Cadastrar Categoria</Link>
    </TemplateBase>
  );
}

export default cadastroVideo;
