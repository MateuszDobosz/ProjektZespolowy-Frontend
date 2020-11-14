import Axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";


const Wrapper = styled.div`
  max-width: 1140px;
  width: 99%;
  min-height: calc(100vh - 100px);
  /* min-height: calc(50vh - 100px); */
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding-top: 10px;

  h1 {
    font-size: 20px;
  }
  input {
    width: 85%;
    height: 40px;
    border-radius: 50px;
    outline: none;
    border: 1px solid black;
    text-align: center;
  }
  img {
    max-height: 400px;
    @media (max-width: 850px) {
      max-height: 140px;
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 85%;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 850px) {
    justify-content: center;
  }
  button {
    background: #c4c4c4;
    border-radius: 24px;
    width: 161px;
    height: 35px;
    outline: none;
    border: none;
    margin: 10px;
  }
`;

const DonationsPage = () => {
  const [amount, setAmount] = useState(0);


  const handleInput = (e) => {
    setAmount(e.target.value);
  };

  const handleDonation = (value) => {
    Axios.post("user/donation/new", {
      amount: value,
    })
      .then((res) => {
        console.log(res);
        setAmount(0);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Wrapper>
      <h1>Darowizna</h1>
      <input type="number" onChange={handleInput} value={amount} />
      <ButtonWrapper>
        <button
          onClick={() => {
            setAmount(10);
          }}
        >
          10 zł
        </button>
        <button
          onClick={() => {
            setAmount(20);
          }}
        >
          20 zł
        </button>
        <button
          onClick={() => {
            setAmount(30);
          }}
        >
          30 zł
        </button>
        <button
          onClick={() => {
            setAmount(40);
          }}
        >
          40 zł
        </button>
      </ButtonWrapper>
      <Button
        onClick={() => {
          handleDonation(amount);
        }}
      >
        Wpłać
      </Button>

      <img
        src="http://dogwalkinginastoria.com/images/catAndDogHeader_1040.jpg"
        alt="Animals"
      />
    </Wrapper>
  );
};

export default DonationsPage;
