import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import ValidationSchema from "./Validations/AddAnimalValidarion";
import Input from "./Input";
import Button from "./Button";
import TextArea from "./Textarea";
import InputFile from "./InputFile";
import Popup from 'reactjs-popup';

import axios from "axios";

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;

  margin: 0 20px;
`;

const AddAnimalForm = () => {
  const [newsMessage, setNewsMessage] = useState()
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      age: "",
      description: "",
      avatar: "",
    },
    ValidationSchema,
    onSubmit: (values) => {
      
      let data = new FormData();
      data.append("photo", values.avatar);
      data.append("age", values.age);
      data.append("name", values.title);
      data.append("description", values.description);
      data.append("category", values.category);

      axios
        .post("animals/new", data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
         
          setNewsMessage("Udalo sie dodać zwierzę.")
        })
        .catch(e => {
          setNewsMessage("Nie udało się dodać zwierzęcia.")
        });
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>Dodaj zwierzę</h1>
      {/* <label htmlFor="title">Imię</label> */}
      <Input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        placeholder="Imię"
      />
      {/* <label htmlFor="category">Wybierz kategorie</label> */}
      <select id="category" name="category" defaultValue="Dog" onChange={formik.handleChange}>
        <option value="" disabled hidden>
          Wybierz kategorie
        </option>
        <option value="Dog">Pies</option>
        <option value="Cat">Kot</option>
      </select>
      {/* <label htmlFor="age">Wiek</label> */}
      <Input
        id="age"
        name="age"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.age}
        placeholder="Wiek"
      />
      {/* <label htmlFor="description">Opis</label> */}
      <TextArea
        id="descriptio "
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
        placeholder="Opis"
      />

      <label htmlFor="pet-image">Zdjęcie</label>
      <InputFile
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
        onChange={(event) =>
          formik.setFieldValue("avatar", event.target.files[0])
        }
      />

      <Popup trigger={<Button className="button" type="submit"> Dodaj zwierzę </Button>} modal>
        <span> {newsMessage} </span>
      </Popup>
    </Form>
  );
};

export default AddAnimalForm;
