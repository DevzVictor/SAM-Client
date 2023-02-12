import * as S from "./style";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";
import ButtonAction from "components/ButtonAction";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "40%",
    height: "70%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#D8EDFB",
    borderRadius: "30px",
    border: "1px solid #0E86D2",
    boxShadow: "5px 5px 15px #0E86D2",
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.4)",
  },
};

Modal.setAppElement("#root");

interface ModalProps {
  open: boolean;
  closeModal: () => void;
}

const ModalPatient = ({ open, closeModal }: ModalProps) => {

  function handleModal(
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>,
    canClose: boolean
  ) {
    e.stopPropagation();
    if (canClose) {
      closeModal();
    }
  }

  return (
    <div>
      <Modal isOpen={open} style={customStyles}>
        <S.ModalDiv>
          <S.BoxModalText>Adicionar Paciente</S.BoxModalText>
          <S.CloseIcon onClick={(e) => handleModal(e, true)}>
            <AiOutlineClose size={25} />
          </S.CloseIcon>
        </S.ModalDiv>
        <S.BoxModal>
          <S.BoxModalForm>
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
            <span  className="nome">Detalhes</span>
            <input className="detalhes" type="text" />
            <ButtonAction value="Adicionar" type="button"/>
          </S.BoxModalForm>
        </S.BoxModal>
      </Modal>
    </div>
  );
};

export default ModalPatient;
