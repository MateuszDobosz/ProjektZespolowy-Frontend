import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import Animal from "../components/Animal";
import Text from "../components/Text";

const AnimalsPage = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios.get("http://176.107.131.27/animals/overview").then((response) => {
      console.log(response.data);
      setAnimals(response.data);
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
            title={animal.name}
            category={animal.category}
            imageUrl={`http://176.107.131.27/images/${animal.image}`}
          />
        );
      })}
    </Wrapper>
  );
};
export default AnimalsPage;
