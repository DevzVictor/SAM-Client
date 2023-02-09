import * as S from "./style";
import CardIcon from "components/CardIcons";
import { GiRemedy } from "react-icons/gi";
import { BsFileEarmarkMedical } from "react-icons/bs";
import { TbVaccine } from "react-icons/tb";



const PatientCard = () => {
  return (
    <S.PatientCard>
      <S.PatientCardImage src={'https://avatars.githubusercontent.com/u/91481122?v=4'} alt="" />
      <div className="name">
        <S.PatientCardName>Maria Tereza</S.PatientCardName>
      </div>
      <div className="icons">
        <CardIcon icon={<GiRemedy size={30} />} />
        <CardIcon icon={<BsFileEarmarkMedical size={30} />} />
        <CardIcon icon={<TbVaccine size={30} />} />
      </div>
    </S.PatientCard>
  );
};

export default PatientCard;
