import * as S from "./style";
import ButtonAction from "components/ButtonAction";

const BoxUpdateUser = () => {
  return (
    <S.BoxUpdate>
      <S.BoxUpdateForm>
        <div>
          <S.UserCardImage
            src={"https://avatars.githubusercontent.com/u/91481122?v=4"}
          />
        </div>
        <span>Nome completo</span>
        <input type="text" />
        <span>E-mail</span>
        <input type="text" />
        <span>Senha</span>
        <input type="password" />
        <span>Função</span>
        <input type="text" />
        <div>
          <ButtonAction value="Salvar Alterações" type="button" />
        </div>
      </S.BoxUpdateForm>
    </S.BoxUpdate>
  );
};

export default BoxUpdateUser;
