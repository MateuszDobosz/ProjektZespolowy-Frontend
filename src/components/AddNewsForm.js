import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
import TextArea from "./Textarea";
import Axios from "axios";

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-basis: 100%;
`;

const AddNewsForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
    },

    onSubmit: (values) => {
      const { title, description } = values;
      Axios.post("http://176.107.131.27/panel/new", {
        title,
        description,
        token: localStorage.getItem("token"),
      }).then((res) => {
        console.log(res);
      });
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

      <Button type="submit">Dodaj wiadomość</Button>
    </Form>
  );
};

export default AddNewsForm;
