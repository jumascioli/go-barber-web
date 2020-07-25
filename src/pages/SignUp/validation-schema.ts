import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup.string()
    .required('E-mail obrigatório')
    .email('Digite um email válido'),
  password: Yup.string().min(6, 'No mínimo 6 dígitos'),
});

export default validationSchema;
