import logoicon from "assets/imgs/logoicon.png";
import { CiLogout } from "react-icons/ci";
import * as S from "./style";
import { RoutePath } from "types/routes";
import { NavItem } from "./types";

interface MenuProps {
  active: RoutePath;
  navItems: NavItem[];
}

const Menu = ({ active, navItems }: MenuProps) => {
  return (
    <S.Menu>
      <nav>
        <S.MenuLogo>
          <img src={logoicon} alt="Logo" />
        </S.MenuLogo>
        {navItems.map((item, index) => (
          <S.MenuItem key={`MenuItem-${index}`} active={item.path === active}>
            <S.MenuItemButton active={item.path === active}>
              {item.icon}
            </S.MenuItemButton>
          </S.MenuItem>
        ))}
      </nav>
      <S.MenuItemLogout>
        <CiLogout size={30}/>
      </S.MenuItemLogout>
    </S.Menu>
  );
};

export default Menu;
