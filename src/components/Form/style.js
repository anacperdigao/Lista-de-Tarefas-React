import styled from 'styled-components'


export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const InputText = styled.input`
  height: 40px;
  padding: 0 20px;
  font-size: 20px;
  border: 1px solid #ccc;
  min-width: 80%;
`

export const Button = styled.button`
  border: none;
  height: 40px;
  width: 40px;
  background: #f04c64;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
    opacity: 0.8;
  }
`

