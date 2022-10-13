import React from "react";
import { FaPlus } from 'react-icons/fa'
import * as S from "./style.js"
import PropTypes from 'prop-types'


function Form ({ handleChange, handleSubmit, novaTarefa }) {
  return (

    <S.Form onSubmit={handleSubmit} action="#">
      <S.InputText
        onChange={handleChange}
        type="text"
        value={novaTarefa}
      />
      <S.Button type="submit">
        <FaPlus />
      </S.Button>
    </S.Form>

  )
}
export default Form

// Validação de propriedades

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}

