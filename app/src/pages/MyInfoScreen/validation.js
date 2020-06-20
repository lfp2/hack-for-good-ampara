import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'Obrigatorio',
  },
  string: {
    min: 'Minimo de ${min} caracteres',
    max: 'Maximo de ${max} caracteres',
  },
});

export const volunteerSchema = Yup.object().shape({
  displayName: Yup.string().required(),
  bio: Yup.string()
    .max(150, 'Defina uma biografia com o maximo de ${max} caracteres')
    .required(),
  documentNumber: Yup.string().required(),
  phoneNumber: Yup.string().required(),
  uf: Yup.string().notOneOf(['none', ''], 'Selecione um Estado'),
  city: Yup.string().required(),
  cep: Yup.string().required(),
  terms: Yup.bool().oneOf(
    [true],
    'Você precisa aceitar os termos de uso para utilizar esse aplicativo',
  ),
});
export const healthSchema = Yup.object().shape({
  displayName: Yup.string().required(),
  bio: Yup.string()
    .max(150, 'Defina uma biografia com o maximo de ${max} caracteres')
    .notRequired(),
  phoneNumber: Yup.string().required(),
  profession: Yup.string().notOneOf(['none', ''], 'Selecione um Tipo'),
  uf: Yup.string().notOneOf(['none', ''], 'Selecione um Estado'),
  city: Yup.string().required(),
  cep: Yup.string().required(),
  terms: Yup.bool().oneOf(
    [true],
    'Você precisa aceitar os termos de uso para utilizar esse aplicativo',
  ),
});
