import * as S from "./style";
import ButtonLarge from "components/ButtonLarge";

const BoxLogin = () => {
  return (
    <S.BoxLogin>
      <S.BoxLoginLogoText>
        {"Bem vindo ao SAM"}
        <h1>Faça login na sua conta</h1>
      </S.BoxLoginLogoText>
      <S.BoxLoginForm>
        <span>E-mail</span>
        <input type="text" />
        <span>Senha</span>
        <input type="password" />
        <S.BoxLoginLogoLink>
        {'Esqueceu sua senha?'}
      </S.BoxLoginLogoLink>
        <ButtonLarge value="Entrar" type="button" />
      </S.BoxLoginForm>
      <S.BoxLoginLogoText>
         <span>Não tem uma conta? {<S.BoxLoginLogoLink>Cadastre-se</S.BoxLoginLogoLink>}</span>
      </S.BoxLoginLogoText>
    </S.BoxLogin>
  );
};

export default BoxLogin;
