import Menu from "components/Menu";
import BoxUpdateUser from "components/BoxUpdateUser";
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import * as S from "./style";

const Settings = () => {
  return (
    <S.Settings>
      <Menu active={RoutePath.SETTINGS} navItems={navigationItems} />
      <S.SettingsPage>
        <header>
          <S.SettingsHeaderDetails>
            <S.SettingsHeaderDetailsLogo>SAM</S.SettingsHeaderDetailsLogo>
          </S.SettingsHeaderDetails>
        </header>
        <div>
            <S.SettingsTitle><b>Painel do Usuário</b></S.SettingsTitle>
        </div>
        <S.SettingsContent>
            <BoxUpdateUser></BoxUpdateUser>
        </S.SettingsContent>
      </S.SettingsPage>
    </S.Settings>
  );
};

export default Settings;
