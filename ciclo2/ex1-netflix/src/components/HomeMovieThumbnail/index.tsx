import { MouseEventHandler } from 'react'
import * as S from './styles'

interface PropTypes {
  name: string
  onClick: MouseEventHandler<HTMLDivElement>
}

export const HomeMovieThumbnail = ({ name, onClick }: PropTypes) => {
  return <S.Conteiner name={name} onClick={onClick}></S.Conteiner>
}
