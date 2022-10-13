import styled from 'styled-components'
import { FaEdit, FaWindowClose } from 'react-icons/fa'

export const Tarefas = styled.ul`
  margin-top: 30px;
`

export const ItensLista = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  transition: all 400ms;

  :hover{
    background: #d4f7ff;
  }
`

export const Icones = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const IconEdit = styled(FaEdit)`
  margin-right: 15px;
  color: #3fa4ba;
  cursor: pointer;
  transition: all 200ms;
  :hover{
    transform: scale(1.3)
  }
`
export const IconDelete = styled(FaWindowClose)`
  margin-right: 15px;
  color: #f04c64;
  cursor: pointer;
  transition: all 400ms;
  :hover{
    transform: scale(1.3)
  }
`

