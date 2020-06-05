import * as Yup from 'yup';

const validate = async (validationSchema, data, formRef) => {
  try {
    const schema = validationSchema;
    await schema.validate(data, {
      abortEarly: false,
    });
    if (formRef.current) {
      formRef.current.setErrors({});
    }
    // Validation passed
    return true;
  } catch (err) {
    let validationErrors = {};
    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((error) => {
        validationErrors[error.path] = error.message;
      });
      if (formRef.current) {
        formRef.current.setErrors(validationErrors);
      }
    }
    return false;
  }
};

export default validate;
