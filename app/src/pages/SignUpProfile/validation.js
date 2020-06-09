import * as Yup from 'yup';

Yup.setLocale({
  mixed: {
    required: 'Obrigatorio',
  },
});

export const volunteerSchema = Yup.object().shape({
  name: Yup.string().required(),
  bio: Yup.string()
    .max(150, 'Defina uma biografia com o maximo de ${max} caracteres')
    .required(),
  profession: Yup.string().required(),
  numberRegistry: Yup.string().required(),
  phone: Yup.string().required(),
  state: Yup.string().notOneOf(['none', ''], 'Selecione um Estado'),
  city: Yup.string().required(),
  cep: Yup.string().required(),
  terms: Yup.bool().oneOf(
    [true],
    'Você precisa aceitar os termos de uso para utilizar esse aplicativo',
  ),
});
export const healthSchema = Yup.object().shape({
  name: Yup.string().required(),
  bio: Yup.string()
    .max(150, 'Defina uma biografia com o maximo de ${max} caracteres')
    .notRequired(),
  profession: Yup.string().required(),
  numberRegistry: Yup.string().required(),
  phone: Yup.string().required(),
  state: Yup.string().notOneOf(['none', ''], 'Selecione um Estado'),
  city: Yup.string().required(),
  cep: Yup.string().required(),
  terms: Yup.bool().oneOf(
    [true],
    'Você precisa aceitar os termos de uso para utilizar esse aplicativo',
  ),
});
