import React, { Component } from "react";
import '../components/Main.css'


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
  };

  // Usei arrow function nesse método para prender o this dentro
  // O nome handle é sempre utilizado quando esta atrelado a um evento: handleChange, handleClick, handleSubmit...
  handleChange = (evento) => {
    this.setState({
      novaTarefa: evento.target.value,
    })
  }


  render(){
    const { novaTarefa } = this.state;

    return (

      <div className="main">

        <h1>Lista de tarefas</h1>

        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Enviar</button>
        </form>

      </div>

  )}
}

export default Main
