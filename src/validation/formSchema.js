import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required()
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['xtrasmall', 'small', 'medium', 'large', 'xtralarge'], 'Please pick a size'),
    topping1: yup.boolean(),
    topping2: yup.boolean(),
    topping3: yup.boolean(),
    topping4: yup.boolean(),
    topping5: yup.boolean(),
    topping6: yup.boolean(),
    topping7: yup.boolean(),
    topping8: yup.boolean(),
    special: yup.string()
})

export default formSchema;