import styled from 'styled-components'

import LoginBackground from '../../assets/images/background-netflix.png'

export const Conteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-image: url(${LoginBackground});
  background-repeat: no-repeat;
  background-size: cover;
`
export const BoxInput = styled.div`
  width: 617px;
  height: 754px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #000000b0;
`
export const Entrar = styled.h1`
  width: 430px;
  height: 64px;
  color: white;
  font-family: 'Cookie', cursive;
  margin-top: 100px;
`
