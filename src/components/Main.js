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
    tarefas: [
      'Fazer café',
      'Beber água',
      'Estudar',
    ],
  };

  // Usei arrow function nesse método para prender o this dentro
  // O nome handle é sempre utilizado quando esta atrelado a um evento: handleChange, handleClick, handleSubmit...
  handleChange = (evento) => {
    this.setState({
      novaTarefa: evento.target.value,
    })
  }


  render(){
    const { novaTarefa, tarefas } = this.state;

    return (

      <div className="main">

        <h1>Lista de tarefas</h1>

        <form className="form" action="#">
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
          {tarefas.map(tarefa => (
          <li key={tarefa}>
            {tarefa}
            <div>
              <FaEdit className="edit"/>
              <FaWindowClose  className="delete"/>
            </div>
          </li>
          ))}
        </ul>

      </div>

  )}
}

export default Main
