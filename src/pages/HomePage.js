import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Img from "../assets/Group 12.png";
import AnimalCard from "../components/AnimalCard";
import axios from "axios";
import Loader from "react-loader-spinner"
import Slider from "react-slick";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const StyledText = styled.p`
  font-size: 2.2rem;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1140px;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 0 0;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const MainImg = styled.div`
  width: 100vw;
  min-height: 550px;
  background: url("${Img}") center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    position: fixed;
    top: 0px;
    bottom: 0px;
    z-index: -1;
  }
`;

const CarouselItem = styled.div`
  width: 200px;
  min-height: 350px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Wrap = styled.div`
  max-width: 1140px;
  padding: 20px;
`;

const StyledSlider = styled(Slider)`
  max-width: 1140px;
`;

const HomePage = () => {
  const [news, setNews] = useState();
  useEffect(() => {
    axios.get("panel/news/overview").then((response) => {
      console.log(response.data.news);
      setNews(response.data.news);
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <MainImg>
        <StyledSlider {...settings} autoplay={true} pauseOnHover={true}>
          {news ? (
            news.map((newss) => {
              return (
                <CarouselItem
                  key={newss.id}
                  createdAt={newss.date}
                  description={newss.description}
                  title={newss.title}
                >
                  <Wrap>
                    <h1>{newss.title}</h1>
                    <p>{newss.description}</p>
                  </Wrap>
                </CarouselItem>
              );
            })
          ) : (
              <Loader type="Puff" color="#0d9e47" height={100} width={100} />
            )}
        </StyledSlider>
      </MainImg>
      <StyledText>Szukają domu:</StyledText>
      <CardWrapper>
        <AnimalCard name="Tofik" />
        <AnimalCard name="Tofik" />
        <AnimalCard name="Tofik" />
        <AnimalCard name="Tofik" />
      </CardWrapper>
    </Wrapper>
  );
};

export default HomePage;
