import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
    category: Yup.string()
        .required('Required'),
    age: Yup.number().required('Required'),
    description: Yup.string().required('Required')
})

export default validationSchema;

