import * as S from './styles'

interface PropTypes {
  text: string
  color: string
}
/**
 * Archive: src/pages/Login/index.tsx
 *
 * Description: Login page
 *
 * Date: 2022/04/07
 *
 * Author: Felipe
 *
 * Collaborator:
 */

export const CommonButton = ({ text, color }: PropTypes) => {
  return <S.Conteiner color={color}>{text}</S.Conteiner>
}
