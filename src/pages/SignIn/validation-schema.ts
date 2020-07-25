import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um email válido'),
  password: Yup.string().required('Senha é obrigatória'),
});

export default validationSchema;
