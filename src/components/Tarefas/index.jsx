import React from "react";
import * as S from './style.js'
import PropTypes from 'prop-types'


function Tarefas ({tarefas , handleDelete, handleEdit}) {
  return(

    <S.Tarefas>
      {tarefas.map((tarefa, index) => (
      <S.ItensLista key={tarefa}>
        {tarefa}
        <S.Icones>
          <S.IconEdit
          onClick={(evento) => handleEdit(evento, index)}
          />

          <S.IconDelete
          // aqui seria dessa forma abaixo, só que como eu quero puxar o indice também, vou fazer uma função pegando ele do map.
          // onClick={this.handleDelete}
          onClick={(evento) => handleDelete(evento, index)}
          />
        </S.Icones>
      </S.ItensLista>
      ))}
    </S.Tarefas>

  )
}

export default Tarefas

// Validação de propriedades

Tarefas.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tarefas: PropTypes.string.isRequired,
}
