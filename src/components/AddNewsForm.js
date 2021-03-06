import React, { useState } from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import TextArea from "./Textarea";
import Axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;
`;

const AddNewsForm = () => {

  const [newsMessage, setNewsMessage] = useState()
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },

    onSubmit: (values) => {
      const { title, description } = values;
      Axios.post("panel/news/new", {
        title,
        description,
        token: localStorage.getItem("token"),
      }).then((res) => {
        
        setNewsMessage("Udalo sie dodać news")
      }).catch(e => { console.log(e); setNewsMessage("Nie udało się dodać wiadomości") });
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>Dodaj aktualności</h1>
      {/* <label htmlFor="title">Tytuł</label> */}
      <Input
        id="title"
        name="title"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.title}
        placeholder="Tytuł"
      />
      {/* <label htmlFor="description">Opis wydarzenia</label> */}
      <TextArea
        id="descriptio "
        name="description"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.description}
        placeholder="Opis wydarzenia"
      />

      <Popup trigger={<Button className="button" type="submit"> Dodaj wiadomość </Button>} modal>
        <span> {newsMessage} </span>
      </Popup>

    </Form>

  );
};

export default AddNewsForm;
