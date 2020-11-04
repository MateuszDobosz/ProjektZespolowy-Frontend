import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import ValidationSchema from "./Validations/AddAnimalValidarion";
import Input from "./Input";
import Button from "./Button";
// import TextArea from "./Textarea";
// import InputFile from "./InputFile";

// import axios from "axios";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;

  margin: 0 20px;
`;

const SurveyForm = () => {
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
      console.log(values);
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>Ankieta przedadopcyjna</h1>
      <label htmlFor="answer1">
        Czy wszyscy domownicy zgadzają się na adopcję zwierzęcia?
      </label>
      <Input
        id="answer1"
        name="answer1"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.answer1}
        placeholder=""
      />
      <label htmlFor="answer2">
        Czy jesteście Państwo świadomi, że zwierzę może zachowywać się
        nieprzewidywalnie w stosunku do dzieci?
      </label>
      <Input
        id="answer2"
        name="answer2"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.answer2}
        placeholder=""
      />
      <label htmlFor="answer3">
        Czy jesteście Państwo świadomi, że zwierzę może wywoływać alergię i
        choroby odzwierzęce?
      </label>
      <Input
        id="answer3"
        name="answer3"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.answer3}
        placeholder=""
      />
      <label htmlFor="answer4">
        Czy zwierzę będzie mieszkało w domu czy na zewnątrz?
      </label>
      <Input
        id="answer4"
        name="answer4"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.answer4}
        placeholder=""
      />
      <label htmlFor="answer5">
        Czy w razie pojawienia się kłopotów behawioralnych pupila, jest
        Pan/igotowy/anawiązać współpracę z behawiorystą ?
      </label>
      <Input
        id="answer5"
        name="answer5"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.answer5}
        placeholder=""
      />
      <label htmlFor="answer6">
        Czym i jak często zamierzacie Państwo żywić zwierzę(sucha karma, puszki,
        jedzenie gotowane)?
      </label>
      <Input
        id="answer6"
        name="answer6"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.answer1}
        placeholder=""
      />
      <label htmlFor="answer7">
        Co się będzie działo ze zwierzęciem w czasie Państwa wyjazdów, wakacji
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
        Czy jest Pan/igotowy/a podpisać umowę adopcyjną, w której ważnym punktem
        będzie deklaracja, że zwierzę nigdy nie trafi na ulicę?
      </label>
      <Input
        id="answer8"
        name="answer8"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.answer8}
        placeholder=""
      />
      <label htmlFor="answer9">
        Czy zobowiązujecie się Państwo do sterylizacji/kastracji?
      </label>
      <Input
        id="answer9"
        name="answer9"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.answer9}
        placeholder=""
      />
      <label htmlFor="answer10">
        Czy wyraża Pan/i zgodę na przeprowadzenie kontroli przez Inspektora
        Towarzystwa Opieki nad Zwierzętami w Polsce w nowym miejscu pobytu
        zwierzęcia?
      </label>
      <Input
        id="answer10"
        name="answer10"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.answer10}
        placeholder=""
      />

      <Button type="submit">Wyślij ankiete</Button>
    </Form>
  );
};

export default SurveyForm;
