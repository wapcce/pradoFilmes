import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import cadastroVideo from './pages/cadastro/video/index';
import CadastroCategoria from './pages/cadastro/categoria/index';

const paginaErro = () => <div>Pagina 404</div>;

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastroVideo" component={cadastroVideo} />
      <Route path="/cadastroCategoria" component={CadastroCategoria} />

      <Route component={paginaErro} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
