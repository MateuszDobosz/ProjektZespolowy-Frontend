import * as Yup from 'yup';

const validationSchema = Yup.object({
    answer1: Yup.string()
    .min(2,"Minimum 2 characters")
        .required('Required'),
        answer2: Yup.string()
        .required('Required'),
        answer3: Yup.string()
        .required('Required'),
        answer4: Yup.string()
        .required('Required'),
        answer5: Yup.string()
        .required('Required'),
        answer6: Yup.string()
        .required('Required'),
        answer7: Yup.string()
        .required('Required'),
        answer8: Yup.string()
        .required('Required'),
        answer9: Yup.string()
        .required('Required'),
        answer10: Yup.string()
        .required('Required'),
   
})

export default validationSchema;