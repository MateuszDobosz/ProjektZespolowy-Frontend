import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 90%;
  margin: 50px 0 0 0;
`;
const TitleWrapper = styled.div`
  background-color: rgba(196, 196, 196, 0.3);
  width: 100%;
  min-height: 70px;
  margin: 0 0 20px;
  padding:5px;
  display: flex;
  flex-direction: column;
`;
const DescriptionWrapper = styled.div`
  background-color: rgba(196, 196, 196, 0.3);
  width: 100%;
`;
const Description = styled.p`
  padding: 20px;
`;

const Title = styled.p`
  padding: 0 0 0 20px;
  font-size: 30px;
  font-weight: 700;
`;

const Publication = styled.p`
  padding: 0px 20px 0;
  font-weight: normal;
  font-size: 16px;
`;
const News = ({ title, description, createdAt }) => (
  <Wrapper>
    <TitleWrapper>
      <Title>{title}</Title>
      <Publication>{createdAt}</Publication>
    </TitleWrapper>
    <DescriptionWrapper>
      <Description>{description}</Description>
    </DescriptionWrapper>
  </Wrapper>
);

export default News;
