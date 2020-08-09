import React, { useState } from 'react';
import TemplateBase from '../../../components/TemplateBase/index';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField/index';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const [categorias, setCategorias] = useState([{ nome: 'teste' }]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    //chave: nome, descrição,cor...
    setValues({
      ...values,
      [chave]: valor, //nome: 'valor'
    });
  }

  function handleChange(key, infosDoEvento) {
    const { value } = infosDoEvento.target;
    //console.log(infosDoEvento.target.value);
    console.log(infosDoEvento.target.value);
    //console.log(infosDoEvento.target.getAttribute('name'));
    //setValue(getAttribute('name'), value);
    setValue(key, value);
  }
  return (
    <TemplateBase>
      <h1> Cadastro de Categoria:{values.nome}</h1>
      <form
        //style={{ background: values.cor }}
        onSubmit={function HandleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([...categorias, values]);
          setValues(valoresIniciais);
        }}
      >
        <FormField
          label="Nome da Categoria: "
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />
        <FormField
          label="Descrição da Categoria: "
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />
        <FormField
          label="Cor da Categoria: "
          type="color"
          name="color"
          value={values.cor}
          onChange={handleChange}
        />

        {/* <div>
          <label>
            Descrição:
            <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            ></textarea>
          </label>
        </div> */}
        {/* <div>
          <label>
            Cor:
            <input
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
            ></input>
          </label>
        </div> */}
        <button>Cadastrar</button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
            <li key={`${categoria}${indice}`}>
              {categoria.nome}
              {categoria.descricao}
              {categoria.cor}
            </li>
          );
        })}
      </ul>
      <Link to="/">Página Principal</Link>
    </TemplateBase>
  );
}

export default CadastroCategoria;
