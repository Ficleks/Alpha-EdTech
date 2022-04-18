import { useNavigate } from 'react-router-dom'

import * as S from './styles'
import { CommonInput } from '../../components/CommonInput'
import { CommonButton } from '../../components/CommonButton'
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

export const Login = () => {
  const navigate = useNavigate()

  return (
    <S.Conteiner>
      <S.BoxInput>
        <S.Entrar>Entrar</S.Entrar>
        <CommonInput
          placeholder="   Digite seu Email"
          type="email"
          color="#333333"
        />
        <CommonInput
          placeholder="   Digite sua Senha"
          type="password"
          color="white"
        />
        <CommonButton text="Entrar" color="#E50914"></CommonButton>
      </S.BoxInput>
    </S.Conteiner>
  )
}
