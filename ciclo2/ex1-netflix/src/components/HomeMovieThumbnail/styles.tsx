import styled from 'styled-components'

import AdamThumb from '../../assets/images/adam-select.png'
import MatrixThumb from '../../assets/images/matrix-select.png'
import LokiThumb from '../../assets/images/loki-select.png'
import BatmanThumb from '../../assets/images/bat-select.png'

interface ConteinerTypes {
  name: string
}

export const Conteiner = styled.div<ConteinerTypes>`
  width: 312px;
  height: 180px;
  cursor: pointer;

  ${({ name }) => name === 'adam' && `background-image: url(${AdamThumb})`}
  ${({ name }) => name === 'matrix' && `background-image: url(${MatrixThumb})`}
  ${({ name }) => name === 'loki' && `background-image: url(${LokiThumb})`}
  ${({ name }) => name === 'batman' && `background-image: url(${BatmanThumb})`}
`
