import styled from 'styled-components'

export const Conteiner = styled.button`
  width: 430px;
  height: 64px;
  background-color: ${({ color }) => color};
  color: white;
  font-size: 22px;
  font-family: 'Cookie', cursive;
  border-radius: 5px;
  margin-top: 50px;
`
