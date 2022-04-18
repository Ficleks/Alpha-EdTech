import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html, body, #root {
    width: 100vw;
    height: 100vh;
  }
  input {
  border: unset;
}

button {
  border: unset;
}
`