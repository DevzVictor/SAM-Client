import * as S from "./style";
import ButtonLarge from "components/ButtonLarge";

const BoxSignup = () => {
  return (
    <S.BoxSignup>
      <S.BoxSignupLogoText>
        {"Bem vindo ao SAM"}
        <h1>Cadastre sua conta</h1>
      </S.BoxSignupLogoText>
      <S.BoxSignupForm>
        <span>Nome completo</span>
        <input type="text" />
        <span>E-mail</span>
        <input type="text" />
        <span>Senha</span>
        <input type="password" />
        <span>Confirmar Senha</span>
        <input type="password" />
        <span>Função</span>
        <input type="text" />
        <ButtonLarge value="Cadastrar" type="button" />
      </S.BoxSignupForm>
    </S.BoxSignup>
  );
};

export default BoxSignup;
