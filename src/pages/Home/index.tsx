//style and icons for react-icons
import * as S from "./style";
import { AiOutlineSearch } from "react-icons/ai";

//components
import Menu from "components/Menu";
import PatientList from "components/PatientList";
import PatientCard from "components/PatientCard";
import ButtonAddPatient from "components/ButtonAddPatient";
import ModalPatient from "components/ModalPatient";
import Overlay from "components/Overlay";

//libs
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";
import { useState } from "react";

const Home = () => {
  const [patientModal, setPatientModal] = useState(false);

  function openModal() {
    console.log(patientModal);
    setPatientModal(true);
  }

  function closeModal() {
    setPatientModal(false);
  }

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
            <div>
              <S.HomeHeaderText>Bem vindo {"Victor"}</S.HomeHeaderText>
              <S.UserCardImage/>
            </div>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeTitle>
            <b>Pacientes</b>
            <ButtonAddPatient
              onClick={openModal}
              value="Adicionar Paciente"
              type="button"
            />
          </S.HomeTitle>
          <S.HomePatientList>
            <PatientList>
              <PatientCard />
            </PatientList>
          </S.HomePatientList>
        </div>
      </S.HomeContent>
      <ModalPatient closeModal={closeModal} open={patientModal} />
      {/* <Overlay></Overlay> */}
    </S.Home>
  );
};

export default Home;
