import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string()
        .max(15, 'Maksymalnie 15 znaków.')
        .required('Pole wymagane.'),
    description: Yup.string().required('Pole wymagane.')
})

export default validationSchema;
