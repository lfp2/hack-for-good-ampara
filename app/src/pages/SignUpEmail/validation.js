import * as Yup from 'yup';

Yup.setLocale({
  string: {
    email: 'Email invalido',
    min: 'Defina uma senha com o mínimo de ${min} caracteres',
  },
  mixed: {
    required: '* Obrigatorio',
  },
});

export const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .matches(/\d/, 'A Senha deve conter um numero')
    .matches(/[a-z]/i, 'A Senha deve conter uma letra')
    .min(8),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas não batem')
    .min(8),
});
