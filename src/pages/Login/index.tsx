import * as S from "./style";
import logo from "assets/imgs/logo.png";
import telaLogin from "assets/imgs/telaLogin.png";
import BoxLogin from "components/BoxLogin";

const Login = () => {
  return (
    <S.LoginScreen>
      <S.LoginRight>
        <S.LoginContent>
          <S.LoginLogo>
            <img src={logo} alt="Logo" />
          </S.LoginLogo>
          <S.LoginTextSlogan>
            <h2>Gerencie todos os seus pacientes com simplicidade</h2>
          </S.LoginTextSlogan>
          <S.LoginImg>
            <img src={telaLogin} alt="Logo" />
          </S.LoginImg>
        </S.LoginContent>
      </S.LoginRight>
      <S.LoginLeft>
        <S.LoginContent>
          <BoxLogin></BoxLogin>
        </S.LoginContent>
      </S.LoginLeft>
    </S.LoginScreen>
  );
};

export default Login;
