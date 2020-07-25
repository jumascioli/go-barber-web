import { FormHandles } from '@unform/core';
import { ValidationError, ObjectSchema } from 'yup';

import DynamicFormObject from '../@types/DynamicFormObject';

const setErrors = (
  formRef: React.RefObject<FormHandles>,
  errors: DynamicFormObject,
): void => {
  formRef.current?.setErrors(errors);
};

const clearErrors = (formRef: React.RefObject<FormHandles>): void => {
  formRef.current?.setErrors({});
};

const getValidationErrors = (error: ValidationError): DynamicFormObject => {
  const validationErrors: DynamicFormObject = {};

  error.inner.forEach(item => {
    validationErrors[item.path] = item.message;
  });

  return validationErrors;
};

const validate = async (
  schema: ObjectSchema,
  data: DynamicFormObject,
): Promise<object | undefined> => {
  return schema.validate(data, {
    abortEarly: false,
  });
};

export { getValidationErrors, setErrors, clearErrors, validate };
