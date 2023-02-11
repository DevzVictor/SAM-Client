import * as S from "./style";
import ModalMedicament from "components/ModalMedicament";
import { GiRemedy } from "react-icons/gi";
import { BsFileEarmarkMedical } from "react-icons/bs";
import { TbVaccine } from "react-icons/tb";
import { useState } from "react";

const PatientCard = () => {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(){
    console.log("open modal")
    setIsOpen(true);
    console.log(modalIsOpen)
  }

  function closeModal() {
    setIsOpen(false)
    console.log("close modal")
  }

  return (
    <S.PatientCard>
      <S.PatientCardImage
        src={"https://avatars.githubusercontent.com/u/91481122?v=4"}
        alt=""
      />
      <div className="name">
        <S.PatientCardName>Victor Rodrigues</S.PatientCardName>
      </div>
      <div className="icons">
        <S.CardIcon onClick={() => openModal()}>
          <GiRemedy size={30} />
        </S.CardIcon>
        <S.CardIcon onClick={() => console.log()}>
          <BsFileEarmarkMedical size={30} />
        </S.CardIcon>
        <S.CardIcon onClick={() => console.log}>
          <TbVaccine size={30} />
        </S.CardIcon>
      </div>
      <ModalMedicament closeModal={closeModal} open={modalIsOpen} />
    </S.PatientCard>
  );
};

export default PatientCard;
