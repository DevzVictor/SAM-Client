import * as S from "./style";
import logo from "assets/imgs/logo.png";
import telaCadastro from "assets/imgs/telaCadastro.png";
import BoxSignup from "components/BoxSignup";

const Signup = () => {
  return (
    <S.SignupScreen>
      <S.SignupLeft>
        <S.SignupContent>
          <S.SignupLogo>
            <img src={logo} alt="Logo" />
          </S.SignupLogo>
          <S.SignupTextSlogan>
            <h2>Ajudando você a cuidar melhor</h2>
          </S.SignupTextSlogan>
          <S.SignupImg>
            <img src={telaCadastro} alt="tela cadastro" />
          </S.SignupImg>
        </S.SignupContent>
      </S.SignupLeft>
      <S.SignupRight>
        <S.SignupContent>
          <BoxSignup></BoxSignup>
        </S.SignupContent>
      </S.SignupRight>
    </S.SignupScreen>
  );
};

export default Signup;
