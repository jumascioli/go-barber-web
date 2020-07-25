import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import DynamicFormObject from '../../@types/DynamicFormObject';

import {
  getValidationErrors,
  setErrors,
  clearErrors,
  validate,
} from '../../utils/form-validation';

import Logo from '../../components/Logo';
import BackgroundImg from '../../components/BackgroundImg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';

import SignUpImage from '../../assets/images/sign-up-background.png';

import { Container, Content } from './styles';
import validationSchema from './validation-schema';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: DynamicFormObject) => {
    try {
      clearErrors(formRef);

      await validate(validationSchema, data);
    } catch (error) {
      const errors = getValidationErrors(error);

      setErrors(formRef, errors);
    }
  }, []);

  return (
    <Container>
      <BackgroundImg image={SignUpImage} />

      <Content>
        <Logo />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>
        </Form>

        <Link href="create-account">Voltar para logon</Link>
      </Content>
    </Container>
  );
};

export default SignUp;
