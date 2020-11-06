import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import Animal from "../components/Animal";
import Text from "../components/Text";
import Loader from "react-loader-spinner";

const AnimalsPage = () => {
  const [animals, setAnimals] = useState();

  useEffect(() => {
    axios.get("animals/overview").then((response) => {
      console.log(response.data);
      setAnimals(response.data);
    });
  }, []);

  return (
    <Wrapper>
      <Text>Przegląd zwierząt</Text>
      {animals ? (
        animals.map((animal) => {
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
        })
      ) : (
        <Loader type="Puff" color="#0d9e47" height={100} width={100} />
      )}
    </Wrapper>
  );
};
export default AnimalsPage;
