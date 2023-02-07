import { NavItem } from "components/Menu/types";
import { RiUserSettingsLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { RoutePath } from "types/routes"

export const navigationItems: NavItem[] = [
    {
      icon: <BsPeople size={25}/>,
      path: RoutePath.HOME,
    },
    {
      icon: <RiUserSettingsLine size={25}/>,
      path: RoutePath.SETTINGS,
    },
  ]