import React, { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import axios from "axios";
import Animal from "../components/Animal";
import Text from "../components/Text";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

const AnimalsPage = () => {
  const [animals, setAnimals] = useState();
  const user = useSelector((state) => state.userReducer.user);
  useEffect(() => {
    axios.get("animals/overview").then((response) => {
      
      setAnimals(response.data);
    });
  }, []);

  const DeleteAnimal = (id) => {
    
    axios.delete(`animals/delete/${id}`).then(() => {
      let editedAnimals = animals.filter((animal) => animal._id !== id);
      setAnimals(editedAnimals);
    });
  };

  return (
    <Wrapper>
      <Text>Przegląd zwierząt</Text>
      {animals ? (
        animals.map((animal) => {
          return (
            <Animal
              key={animal._id}
              id={animal._id}
              age={animal.age}
              description={animal.description}
              title={animal.name}
              category={animal.category}
              imageUrl={`http://176.107.131.27/images/${animal.image}`}
              user={user}
              DeleteAnimal={DeleteAnimal}
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
