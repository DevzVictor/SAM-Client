//style and icons for react-icons
import * as S from "./style";

//components
import Menu from "components/Menu";
import ButtonAction from "components/ButtonAction";
import ButtonRemove from "components/ButtonRemove";

//libs
import { RoutePath } from "types/routes";
import { navigationItems } from "data/navigation";

const Patient = () => {
  return (
    <S.Patient>
      <Menu active={RoutePath.SETTINGS_PATIENT} navItems={navigationItems} />
      <S.PatientContent>
        <header>
          <S.PatientHeaderDetails>
            <div>
              <S.PatientHeaderDetailsLogo>SAM</S.PatientHeaderDetailsLogo>
            </div>
            <div>
              <S.PatientHeaderText>Bem vindo {"Victor"}</S.PatientHeaderText>
              <S.UserCardImage />
            </div>
          </S.PatientHeaderDetails>
        </header>
        <S.PatientTitle>
          <b>Painel do Paciente</b>
        </S.PatientTitle>
        <S.BoxModalForm>
          <S.PatientDetailsDivImg>
            <S.PatientCardImage
              src={"https://avatars.githubusercontent.com/u/91481122?v=4"}
              alt=""
            />
          </S.PatientDetailsDivImg>
          <S.PatientDetailsDivIntern>
            <span className="nome">Nome</span>
            <input type="text" />
            <span className="nome">Foto</span>
            <input type="text" />
            <span>CPF</span>
            <span>Data de nascimento</span>
            <input className="cpf" type="text" />
            <input className="data" type="text" />
            <span>Telefone 1</span>
            <span>Telefone 2</span>
            <input className="phone" type="text" />
            <input className="phone" type="text" />
          </S.PatientDetailsDivIntern>
          <S.PatientDetailsDivIntern>
            <span className="nome">Detalhes</span>
            <input className="detalhes" type="text" />
            <ButtonRemove value="Deletar" type="button" />
            <ButtonAction value="Salvar Alterações" type="button" />
          </S.PatientDetailsDivIntern>
        </S.BoxModalForm>
        <S.PatientTitle>
          <b>Medicamentos</b>
        </S.PatientTitle>
        <S.BoxModalFormList>
          <S.PatientDetailsDivInternList>
            <span className="nome">Nome do medicamento</span>
            <span className="quantidade">Quantidade</span>
            <span className="tipo">Tipo</span>
            <span className="repetir">Repetir a cada</span>
            <input className="nome" type="text" />
            <input className="quantidade" type="text" />   
            <input className="tipo" type="text" />
            <input className="repetir" type="text" />
          </S.PatientDetailsDivInternList>
          <S.PatientDetailsDivInternList>
            <span className="obs">Observações</span>
            <input type="text" />
            <ButtonRemove value="Deletar" type="button" />
            <ButtonAction value="Salvar Alterações" type="button" />
          </S.PatientDetailsDivInternList>
        </S.BoxModalFormList>
        <S.PatientTitle>
          <b>Exames</b>
        </S.PatientTitle>
        <S.BoxModalFormList>
          <S.PatientDetailsDivInternList>
            <span className="nome">Nome do Exame</span>
            <span className="quantidade">Laboratório</span>
            <span className="tipo">Data</span>
            <span className="repetir">Hora</span>
            <input className="nome" type="text" />
            <input className="quantidade" type="text" />   
            <input className="tipo" type="text" />
            <input className="repetir" type="text" />
          </S.PatientDetailsDivInternList>
          <S.PatientDetailsDivInternList>
            <span className="obs">Observações</span>
            <input type="text" />
            <ButtonRemove value="Deletar" type="button" />
            <ButtonAction value="Salvar Alterações" type="button" />
          </S.PatientDetailsDivInternList>
        </S.BoxModalFormList>
        <S.PatientTitle>
          <b>Vacinas</b>
        </S.PatientTitle>
        <S.BoxModalFormList>
          <S.PatientDetailsDivInternList>
            <span className="nome">Nome da vacina</span>
            <span className="data">Data 1° dose</span>
            <span className="data">Data 2° dose</span>
            <input className="nome" type="text" />
            <input className="data" type="text" />   
            <input className="data" type="text" />
          </S.PatientDetailsDivInternList>
          <S.PatientDetailsDivInternList>
            <span className="obs">Observações</span>
            <input type="text" />
            <ButtonRemove value="Deletar" type="button" />
            <ButtonAction value="Salvar Alterações" type="button" />
          </S.PatientDetailsDivInternList>
        </S.BoxModalFormList>
      </S.PatientContent>
    </S.Patient>
  );
};

export default Patient;
