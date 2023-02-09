import * as S from "./style";

interface ProductItemListProps {
  children: React.ReactNode;
}

const PatientList = ({ children }: ProductItemListProps) => {
  return (
    <section>
      <S.PatientListHeader>
        <S.PatientListHeaderTitle>
          Gerencie seus pacientes
        </S.PatientListHeaderTitle>
      </S.PatientListHeader>
      <S.PatientList>{children}</S.PatientList>
    </section>
  );
};

export default PatientList;
