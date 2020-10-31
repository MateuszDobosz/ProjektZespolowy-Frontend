import React from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import ValidationSchema from './Validations/AddAnimalValidarion';


const Form = styled.form`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;

`

const AddAnimalForm = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            category: '',
            age: '',
            description: '',
        },
        ValidationSchema,
        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <Form onSubmit={formik.handleSubmit}>
            <h1>Dodaj zwierzę</h1>
            <label htmlFor="title">Imię</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />
            <label for="category">Wybierz kategorie</label>
            <select id="category" name="category" onChange={formik.handleChange}>
                <option value="Dog">Pies</option>
                <option value="Cat">Kot</option>

            </select>
            <label htmlFor="age">Wiek</label>
            <input
                id="age"
                name="age"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.age}
            />
            <label htmlFor="description">Opis</label>
            <input
                id="descriptio "
                name="description"
                type="textarea"
                onChange={formik.handleChange}
                value={formik.values.description}
            />

            <label htmlFor="pet-image">Zdjęcie</label>
            <input type="file"
                id="pet-image" name="pet-image"
                accept="image/png, image/jpeg"
                onChange={formik.handleChange} />

            <button type="submit">Zatwierdź</button>

        </Form >
    );
};

export default AddAnimalForm;