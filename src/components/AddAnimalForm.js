import React from 'react';
import { useFormik } from 'formik';

const AddAnimalForm = () => {
    const formik = useFormik({
        initialValues: {
            title: '',
            category: '',
            age: '',
            description: '',
        },

        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
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



            <button type="submit">Zatwierdź</button>

        </form >
    );
};

export default AddAnimalForm;