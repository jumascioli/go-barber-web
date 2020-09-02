import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiMail, FiLock } from 'react-icons/fi';

import DynamicFormObject from '../../@types/DynamicFormObject';

import {
  getValidationErrors,
  setErrors,
  clearErrors,
  validate,
  isYupError,
} from '../../utils/form-validation';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

import Logo from '../../components/Logo';
import BackgroundImg from '../../components/BackgroundImg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';

import signInImage from '../../assets/images/sign-in-background.png';

import { Wrapper, Content } from './styles';
import validationSchema from './validation-schema';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: DynamicFormObject) => {
      try {
        clearErrors(formRef);

        await validate(validationSchema, data);

        const { email, password } = data;

        await signIn({
          email,
          password,
        });
      } catch (error) {
        if (isYupError(error)) {
          const errors = getValidationErrors(error);

          setErrors(formRef, errors);

          return;
        }

        addToast({
          type: 'success',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [signIn, addToast],
  );

  return (
    <Wrapper>
      <Content>
        <Logo />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            type="password"
            icon={FiLock}
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>
          <Link href="forgot">Esqueci minha senha</Link>
        </Form>

        <Link href="create-account">Criar conta</Link>
      </Content>

      <BackgroundImg image={signInImage} />
    </Wrapper>
  );
};

export default SignIn;
