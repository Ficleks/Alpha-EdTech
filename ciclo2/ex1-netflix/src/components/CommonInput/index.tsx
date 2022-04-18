import * as S from './styles'

interface PropTypes {
  placeholder: string
  type: string
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

export const CommonInput = ({ placeholder, type, color }: PropTypes) => {
  return <S.Conteiner placeholder={placeholder} type={type} color={color} />
}
