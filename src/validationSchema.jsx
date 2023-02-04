import * as Yup from 'yup';

export const validationSchemaSignIn = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Name is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});
export const validationSchemaRegister = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Name must be at least 3 characters')
        .required('Name is required'),
    password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

