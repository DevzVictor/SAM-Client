import * as S from "./style";
import ModalMedicament from "components/ModalMedicament";
import ModalExam from "components/ModalExam";
import ModalVaccine from "components/ModalVaccine";
import { GiRemedy } from "react-icons/gi";
import { BsFileEarmarkMedical } from "react-icons/bs";
import { TbVaccine } from "react-icons/tb";
import { useState } from "react";

const PatientCard = () => {
  const [medicamentModal, setMedicamentModal] = useState(false);
  const [examModal, setExamModal] = useState(false);
  const [vaccineModal, setVaccineModal] = useState(false);

  function openModal(
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    medicament: boolean,
    exam: boolean,
    vaccine: boolean
  ) {
    e.stopPropagation();
    setMedicamentModal(medicament);
    setExamModal(exam);
    setVaccineModal(vaccine);
  }

  function closeModal() {
    if (medicamentModal) {
      setMedicamentModal(false);
    }
    if (examModal) {
      setExamModal(false);
    }
    if (vaccineModal) {
      setVaccineModal(false);
    }
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
        <S.CardIcon onClick={(e) => openModal(e, true, false, false)}>
          <GiRemedy size={30} />
          <ModalMedicament closeModal={closeModal} openM={medicamentModal} />
        </S.CardIcon>
        <S.CardIcon onClick={(e) => openModal(e, false, true, false)}>
          <BsFileEarmarkMedical size={30} />
          <ModalExam closeModal={closeModal} open={examModal} />
        </S.CardIcon>
        <S.CardIcon onClick={(e) => openModal(e, false, false, true)}>
          <TbVaccine size={30} />
          <ModalVaccine closeModal={closeModal} open={vaccineModal} />
        </S.CardIcon>
      </div>
    </S.PatientCard>
  );
};

export default PatientCard;
