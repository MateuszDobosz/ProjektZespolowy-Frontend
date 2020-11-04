import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import Animal from "../components/Animal";
import Text from "../components/Text";

const animalsList = [
  {
    id: 1,
    age: 2,
    description:
      "Vegas to piękny, przyjazny i miły piesek. Niestety jest jeszcze dosyć mocno wystraszony i nieufny wobec obcych. Szukamy dla nieg…",
    title: "Vegas",
    imageUrl:
      "https://www.schronisko-katowice.eu/lib/w9q4c9/120611583_883765068824583_4422148573682145855_n-kg0j3b9u.jpg",
    category: "Pies",
  },
  {
    id: 2,
    age: 2,
    description:
      "Vegas to piękny, przyjazny i miły piesek. Niestety jest jeszcze dosyć mocno wystraszony i nieufny wobec obcych. Szukamy dla nieg…",
    title: "Vegas",
    imageUrl:
      "https://www.schronisko-katowice.eu/lib/w9q4c9/120611583_883765068824583_4422148573682145855_n-kg0j3b9u.jpg",
    category: "Pies",
  },
  {
    id: 3,
    age: 2,
    description:
      "Vegas to piękny, przyjazny i miły piesek. Niestety jest jeszcze dosyć mocno wystraszony i nieufny wobec obcych. Szukamy dla nieg…",
    title: "Vegas",
    imageUrl:
      "https://www.schronisko-katowice.eu/lib/w9q4c9/120611583_883765068824583_4422148573682145855_n-kg0j3b9u.jpg",
    category: "Pies",
  },
  {
    id: 4,
    age: 2,
    description:
      "Vegas to piękny, przyjazny i miły piesek. Niestety jest jeszcze dosyć mocno wystraszony i nieufny wobec obcych. Szukamy dla nieg…",
    title: "Vegas",
    imageUrl:
      "https://www.schronisko-katowice.eu/lib/w9q4c9/120611583_883765068824583_4422148573682145855_n-kg0j3b9u.jpg",
    category: "Pies",
  },
  {
    id: 5,
    age: 2,
    description:
      "Vegas to piękny, przyjazny i miły piesek. Niestety jest jeszcze dosyć mocno wystraszony i nieufny wobec obcych. Szukamy dla nieg…",
    title: "Vegas",
    imageUrl:
      "https://www.schronisko-katowice.eu/lib/w9q4c9/120611583_883765068824583_4422148573682145855_n-kg0j3b9u.jpg",
    category: "Pies",
  },
  {
    id: 6,
    age: 2,
    description:
      "Vegas to piękny, przyjazny i miły piesek. Niestety jest jeszcze dosyć mocno wystraszony i nieufny wobec obcych. Szukamy dla nieg…",
    title: "Vegas",
    imageUrl:
      "https://www.schronisko-katowice.eu/lib/w9q4c9/120611583_883765068824583_4422148573682145855_n-kg0j3b9u.jpg",
    category: "Pies",
  },
];

const AnimalsPage = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://schronisko-7cfd1.firebaseio.com/animals.json?fbclid=IwAR0ytVWDVilsfiWTJvHSVjeNjBaYC-L5jkhTgETP_Vujf0PUJAoGG1yArt8"
      )
      .then((response) => {
        console.log(response.data);
        setAnimals(animalsList);
      });
  }, []);

  return (
    <Wrapper>
      <Text>Przegląd zwierząt</Text>
      {animals.map((animal) => {
        return (
          <Animal
            key={animal.id}
            age={animal.age}
            description={animal.description}
            title={animal.title}
            category={animal.category}
            imageUrl={animal.imageUrl}
          />
        );
      })}
    </Wrapper>
  );
};
export default AnimalsPage;
