import * as S from "./style";

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
      </S.BoxLoginForm>
      <S.BoxLoginLogoLink>
        {'Esqueceu sua senha?'}
      </S.BoxLoginLogoLink>
    </S.BoxLogin>
  );
};

export default BoxLogin;
