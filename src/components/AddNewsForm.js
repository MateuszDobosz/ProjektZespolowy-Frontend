import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';


const Form = styled.form`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;


`

const AddNewsForm = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
        },

        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <Form onSubmit={formik.handleSubmit}>
            <h1>Dodaj aktualności</h1>
            <label htmlFor="title">Tytuł</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />
            <label htmlFor="description">Opis wydarzenia</label>
            <input
                id="descriptio "
                name="description"
                type="textarea"
                onChange={formik.handleChange}
                value={formik.values.description}
            />


            <button type="submit">Dodaj wiadomość</button>

        </Form >
    );
};

export default AddNewsForm;