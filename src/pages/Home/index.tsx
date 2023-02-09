//style and icons for react-icons
import * as S from "./style";
import { AiOutlineSearch } from "react-icons/ai";

//components
import Menu from "components/Menu";
import PatientList from "components/PatientList";
import PatientCard from "components/PatientCard";
import Overlay from "components/Overlay";

//routes
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";

const Home = () => {
  return (
    <S.Home>
      <Menu active={RoutePath.HOME} navItems={navigationItems} />
      <S.HomeContent>
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>SAM</S.HomeHeaderDetailsLogo>
            </div>
            <S.HomeHeaderDetailsSearch>
              <AiOutlineSearch />
              <input type="text" placeholder="Procure pelo paciente" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeTitle><b>Pacientes</b></S.HomeTitle>
          <S.HomePatientList>
            <PatientList>
              <PatientCard></PatientCard>
            </PatientList>
          </S.HomePatientList>
        </div>
      </S.HomeContent>
      {/* <Overlay></Overlay> */}
    </S.Home>
  );
};

export default Home;
