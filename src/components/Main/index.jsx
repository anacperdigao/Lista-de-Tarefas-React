import React, { Component } from "react";
import Form from "../Form";
import Tarefas from "../Tarefas";
import * as S from './style.js'


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
    index: -1, // Esse indice -1 quando for usado significa que eu nao estou editando nada, que eu estou criando.
    // Isso pq se eu estiver criando, o indice quando clicar vai ser sempre maior que zero, e se eu estiver editando nao vai ser o indice comum que veio do .map.
  };

  // Aqui vou pegar as informações pra jogar em LocalStorage (prevProps = propriedades anteriores que nao vamos usar, prevState = estado anterior menos 1 alteração que fez)
  componentDidUpdate(prevProps, prevState){
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  // Aqui vou guardar de fato as informações no LocalStorage
  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'))
    if (!tarefas) return // Senao existirem tarefas, nao faço nada e retorno
    this.setState({ tarefas }); // se existe, vou setar o estado
  }



  // Aqui eu estou armazenando o valor do input do usuario e estou mudando o estado da variável novaTarefa
  handleChange = (evento) => {
    this.setState({
      novaTarefa: evento.target.value,
    })
  }


  handleSubmit = (evento) => {
    evento.preventDefault();
    const { tarefas, index } = this.state;
    let {novaTarefa} = this.state;
    novaTarefa = novaTarefa.trim(); // trim elimina espaço no inicio e no fim

    if(tarefas.indexOf(novaTarefa) !== -1) return; //Aqui só estou checkando se ja existe uma tarefa igual

    const novasTarefas = [...tarefas]; //Estou copiando o array para nao alterar o original

    if (index === -1){ // Nessa parte eu estou criando uma nova tarefa
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: "", // Aqui estou limpando o input
      })
    } else { //aqui é quando estou editando uma tarefa
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: "", // Aqui estou limpando o input
      })
    }

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
    const { tarefas } = this.state;

    this.setState({
      index: index,
      novaTarefa: tarefas[index],
    })
  }


  render(){

    const { novaTarefa, tarefas } = this.state;

    return (

      <S.Main>
        <S.Titulo>Lista de tarefas</S.Titulo>

        <Form
          handleSubmit = {this.handleSubmit}
          handleChange = {this.handleChange}
          novaTarefa = {novaTarefa}
        />

        <Tarefas
          handleEdit = {this.handleEdit}
          handleDelete = {this.handleDelete}
          tarefas = {tarefas}
        />
      </S.Main>

  )}
}

export default Main
