import React,{useState} from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import ValidationSchema from "./Validations/AddSurveyValidation";
import Input from "./Input";
import Button from "./Button";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


import axios from "axios";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;

  margin: 0 20px;
  label{

  }
`;

const RadioWrapper = styled.div`
  display:flex;
  width:80%;
  justify-content:center;
  align-items:center;
 
  height:40px;
  border-radius:50px;
  padding: 0 20px;
  margin:10px 0;
  input{
    margin:0 10px;
  }


`

const SurveyForm = () => {
  const [newsMessage, setNewsMessage] = useState()
  const formik = useFormik({
    initialValues: {
      answer1: "",
      answer2: "",
      answer3: "",
      answer4: "",
      answer5: "",
      answer6: "",
      answer7: "",
      answer8: "",
      answer9: "",
      answer10: "",
    },
    ValidationSchema,
    onSubmit: (values) => {
      axios.post("/panel/survey/new",{
        answers:{answer1: values.answer1,
        answer2: values.answer2,
        answer3: values.answer3,
        answer4: values.answer4,
        answer5: values.answer5,
        answer6: values.answer6,
        answer7: values.answer7,
        answer8: values.answer8,
        answer9: values.answer9,
        answer10: values.answer10}
      }
      ).then(res => {
        
        setNewsMessage("Udalo sie dodać ankiete")
      }).catch(e =>{ console.log(e)
        setNewsMessage("Nie udało się dodać ankiety")})
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>Ankieta przedadopcyjna</h1>
      <label htmlFor="answer1">
        1. Czy wszyscy domownicy zgadzają się na adopcję zwierzęcia?
      </label>
      <RadioWrapper>
      <label><input type="radio" name="answer1" onChange={formik.handleChange} value={"Tak zgadzają się"} /> Tak, zgadzają się.</label>
      <label><input type="radio" name="answer1" onChange={formik.handleChange} value={"Nie zgadzają się"} /> Nie, nie zgadzają się.</label>
      </RadioWrapper>
      <label htmlFor="answer2">
        2. Czy jesteście Państwo świadomi, że zwierzę może zachowywać się
        nieprzewidywalnie w stosunku do dzieci?
      </label>
  
      <RadioWrapper>
      <label><input type="radio" name="answer2" onChange={formik.handleChange} value={"Tak, jesteśmy świadomi"} /> Tak, jesteśmy świadomi.</label>
      <label><input type="radio" name="answer2" onChange={formik.handleChange} value={" Nie jesteśmy świadomi"} /> Nie, nie jesteśmy świadomi.</label>
      </RadioWrapper>
      <label htmlFor="answer3">
        3. Czy jesteście Państwo świadomi, że zwierzę może wywoływać alergię i
        choroby odzwierzęce?
      </label>
      <RadioWrapper>
      <label><input type="radio" name="answer3" onChange={formik.handleChange} value={"Tak, jesteśmy świadomi"} /> Tak, jesteśmy świadomi.</label>
      <label><input type="radio" name="answer3" onChange={formik.handleChange} value={" Nie jesteśmy świadomi"} /> Nie, ciągle o tym nie wiemy.</label>
      </RadioWrapper>
      <label htmlFor="answer4">
        4. Czy zwierzę będzie mieszkało w domu czy na zewnątrz?
      </label>
      <RadioWrapper>
      <label><input type="radio" name="answer4" onChange={formik.handleChange} value={"W domu"} /> W domu.</label>
      <label><input type="radio" name="answer4" onChange={formik.handleChange} value={"Na zewnątrz"} /> Na zewnątrz.</label>
      </RadioWrapper>
      <label htmlFor="answer5">
        5. Czy w razie pojawienia się kłopotów behawioralnych pupila, jest
        Pan/i gotowy/a nawiązać współpracę z behawiorystą ?
      </label>
      <RadioWrapper>
      <label><input type="radio" name="answer5" onChange={formik.handleChange} value={"Tak, jestem"} />Tak, jestem.</label>
      <label><input type="radio" name="answer5" onChange={formik.handleChange} value={"Nie"} /> Nie.</label>
      <label><input type="radio" name="answer5" onChange={formik.handleChange} value={"Nie wiem"} /> Nie wiem.</label>
      </RadioWrapper>
      <label htmlFor="answer6">
        6. Czym i jak często zamierzacie Państwo żywić zwierzę(sucha karma, puszki,
        jedzenie gotowane)?
      </label>
      <Input
        id="answer6"
        name="answer6"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.answer6}
        placeholder=""
      />
      <label htmlFor="answer7">
        7. Co się będzie działo ze zwierzęciem w czasie Państwa wyjazdów, wakacji
        lub innego rodzaju dłuższej nieobecności itd.?
      </label>
      <Input
        id="answer7"
        name="answer7"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.answer7}
        placeholder=""
      />
      <label htmlFor="answer8">
        8. Czy jest Pan/i gotowy/a podpisać umowę adopcyjną, w której ważnym punktem
        będzie deklaracja, że zwierzę nigdy nie trafi na ulicę?
      </label>
      <RadioWrapper>
      <label><input type="radio" name="answer8" onChange={formik.handleChange} value={"Tak, jestem"} />Tak, jestem.</label>
      <label><input type="radio" name="answer8" onChange={formik.handleChange} value={"Nie"} /> Nie.</label>
      </RadioWrapper>
      <label htmlFor="answer9">
        9. Czy zobowiązujecie się Państwo do sterylizacji/kastracji?
      </label>
      <RadioWrapper>
      <label><input type="radio" name="answer9" onChange={formik.handleChange} value={"Tak"} />Tak.</label>
      <label><input type="radio" name="answer9" onChange={formik.handleChange} value={"Nie"} /> Nie.</label>
      </RadioWrapper>
      <label htmlFor="answer10">
        10. Czy wyraża Pan/i zgodę na przeprowadzenie kontroli przez Inspektora
        Towarzystwa Opieki nad Zwierzętami w Polsce w nowym miejscu pobytu
        zwierzęcia?
      </label>
      <RadioWrapper>
      <label><input type="radio" name="answer10" onChange={formik.handleChange} value={"Tak"} />Tak, wyrażam zgodę.</label>
      <label><input type="radio" name="answer10" onChange={formik.handleChange} value={"Nie"} /> Nie, nie wyrażam zgody.</label>
      </RadioWrapper>

      {/* <Button type="submit">Wyślij ankiete</Button> */}

      <Popup trigger={<Button className="button" type="submit"> Wyślij ankiete </Button>} modal>
        <span> {newsMessage} </span>
      </Popup>
    </Form>
  );
};

export default SurveyForm;
