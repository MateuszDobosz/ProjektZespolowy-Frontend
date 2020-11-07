import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Modal from "react-modal";
import { ReactComponent as Close } from "../assets/close.svg";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 300px;
  margin: 10px;
  padding: 10px;
  flex-grow: 1;
  align-items: center;
  background: url(${({ img }) => img});
  background-size: cover;
  -webkit-box-shadow: -4px 5px 15px -1px rgba(0, 0, 0, 0.39);
  box-shadow: -4px 5px 15px -1px rgba(0, 0, 0, 0.39);
`;

const Name = styled.p`
  font-size: 35px;
  font-weight: 700;
  color: white;
  padding: 10px 25px;
  -webkit-text-stroke: 1px black;

  align-self: flex-start;
`;

const StyledModal = styled(Modal)`
  position: absolute;
  top: 100px;
  left: 20px;
  right: 20px;
  bottom: 100px;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  :focus {
    border: none;
    outline: none;
  }
  :active {
    border: none;
    outline: none;
  }
`;

const ModalDetails = styled.div`
  width: 80%;
  max-width: 500px;
  min-height: 600px;
  border: 3px solid #27ae60;
  border-radius: 50px;
  background-color: white;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const DetailsWrapper = styled.div`
  max-width: 1140px;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Description = styled.p`
  max-width: 350px;
  display: block;
  overflow-wrap: break-word;
  @media (max-width: 768px) {
    max-width: 250px;
  }
`;

const StyledClose = styled(Close)`
  width: 40px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  bottom: 30px;
`;
const Animal = ({
  title,
  imageUrl,
  category,
  age,
  description,
  user,
  id,
  DeleteAnimal,
}) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Wrapper img={imageUrl}>
      <Name>
        <p>{title}</p>
      </Name>
      {user.isAdmin ? (
        <StyledClose
          onClick={() => {
            DeleteAnimal(id);
          }}
        />
      ) : null}
      <StyledModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <ModalDetails>
          <h1>Szczegóły</h1>
          <DetailsWrapper>
            <h3>Imie</h3>
            <p>{title}</p>
          </DetailsWrapper>
          <DetailsWrapper>
            {" "}
            <h3>Wiek</h3>
            <p>{age}</p>
          </DetailsWrapper>
          <DetailsWrapper>
            <h3>Opis</h3>
            <Description>{description}</Description>
          </DetailsWrapper>

          <Button onClick={closeModal}>Zamknij</Button>
        </ModalDetails>
      </StyledModal>
      <Button onClick={openModal}>Więcej</Button>
    </Wrapper>
  );
};

export default Animal;
