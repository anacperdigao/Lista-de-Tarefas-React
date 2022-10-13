import React, { Component } from "react";
import '../components/Main.css'

// Form
import { FaPlus } from 'react-icons/fa'

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa'


//Componente com estado eu crio por classe e preciso do render
class Main extends Component {

// Essa primeira parte até o render é para dar estado ao component Main.

/* Primeira forma de fazer
  constructor (props){
    super(props);

    this.state = {
      novaTarefa: '',
    };
  }
*/

// Segunda forma mais curta
  state = {
    novaTarefa: '',
    tarefas: [],
  };

  // Usei arrow function nesse método para prender o this dentro
  // O nome handle é sempre utilizado quando esta atrelado a um evento: handleChange, handleClick, handleSubmit...
  handleChange = (evento) => {
    this.setState({
      novaTarefa: evento.target.value,
    })
  }

  handleSubmit = (evento) => {
    evento.preventDefault();
    const { tarefas } = this.state;
    let {novaTarefa} = this.state;
    novaTarefa = novaTarefa.trim(); // trim elimina espaço no inicio e no fim

    if(tarefas.indexOf(novaTarefa) !== -1) return; //Aqui só estou checkando se ja existe uma tarefa igual

    const novasTarefas = [...tarefas]; //Estou copiando o array para nao alterar o original

    this.setState({
      tarefas: [...novasTarefas, novaTarefa],
    })
  }

  handleDelete = (evento, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1)

    this.setState({
      tarefas: [...novasTarefas],
    })
  }

  handleEdit = (evento, index) => {

  }


  render(){
    const { novaTarefa, tarefas } = this.state;

    return (

      <div className="main">

        <h1>Lista de tarefas</h1>

        <form onSubmit={this.handleSubmit} className="form" action="#">
          <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}
            />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa, index) => (
          <li key={tarefa}>
            {tarefa}
            <span>
              <FaEdit
              onClick={(evento) => this.handleEdit(evento, index)}
              className="edit"
              />

              <FaWindowClose
              // aqui seria dessa forma abaixo, só que como eu quero puxar o indice também, vou fazer uma função pegando ele do map.
              // onClick={this.handleDelete}
              onClick={(evento) => this.handleDelete(evento, index)}
              className="delete"
              />
            </span>
          </li>
          ))}
        </ul>

      </div>

  )}
}

export default Main
