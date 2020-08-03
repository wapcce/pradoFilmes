import React from 'react';
import Menu from './components/Menu/index';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain/index';
import Carousel from './components/Carousel/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div style={{ background: '#1581b2' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
          'A primeira aula de React, A jornada começa aqui, venha aprender com os melhores professores o melhor do desenvolvimento web e mudar a sua visão sobre o desenvolvimento'
        }
      />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[6]} />

      <Carousel category={dadosIniciais.categorias[5]} />

      <Carousel category={dadosIniciais.categorias[7]} />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Footer />
    </div>
  );
}

export default App;
