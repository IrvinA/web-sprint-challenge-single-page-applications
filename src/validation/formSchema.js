import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Please type in a name for this order'),
    size: yup
        .string()
        .oneOf(['xtrasmall', 'small', 'medium', 'large', 'xtralarge'], 'Please pick a size')
})

export default formSchema;