import * as S from "./style";
import logo from "assets/imgs/logo.png";
import telaLogin from "assets/imgs/telaLogin.png";

const Login = () => {
  return (
    <>
      <S.LoginRight>
        <S.LoginContent>
            <S.LoginLogo>
              <img src={logo} alt="Logo" />
            </S.LoginLogo>
          <S.LoginText>
            <h2>Gerencie todos os seus pacientes com simplicidade</h2>
          </S.LoginText>
          <S.LoginImg>
              <img src={telaLogin} alt="Logo" />
            </S.LoginImg>
        </S.LoginContent>
      </S.LoginRight>
      <S.LoginLeft>
        <S.LoginContent></S.LoginContent>
      </S.LoginLeft>
    </>
  );
};

export default Login;
