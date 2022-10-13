import styled from 'styled-components'
import { FaEdit, FaWindowClose } from 'react-icons/fa'

export const Tarefas = styled.ul`
  margin-top: 30px;
`

export const TarefasLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  transition: all 400ms;

  :hover{
    background: #51c5de;
  }
`

export const TarefasSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconEdit = styled(FaEdit)`
  margin-right: 15px;
  color: #51c5de;
  cursor: pointer;
  transition: all 400ms;
  :hover{
    color:black;
  }
`
export const IconDelete = styled(FaWindowClose)`
  margin-right: 15px;
  color: #f04c64;
  cursor: pointer;
  transition: all 400ms;
  :hover{
    color:black;
  }
`

