import React, { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiUser, FiMail, FiLock } from 'react-icons/fi';

import DynamicFormObject from '../../@types/DynamicFormObject';

import api from '../../services/api';

import {
  getValidationErrors,
  setErrors,
  clearErrors,
  validate,
  isYupError,
} from '../../utils/form-validation';

import Logo from '../../components/Logo';
import BackgroundImg from '../../components/BackgroundImg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Link from '../../components/Link';

import { useToast } from '../../hooks/toast';

import SignUpImage from '../../assets/images/sign-up-background.png';

import { Wrapper, Content, AnimatedContent } from './styles';
import validationSchema from './validation-schema';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: DynamicFormObject) => {
      try {
        clearErrors(formRef);

        await validate(validationSchema, data);
        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado',
          description: 'Você já pode fazer seu login!',
        });
      } catch (error) {
        if (isYupError(error)) {
          const errors = getValidationErrors(error);

          setErrors(formRef, errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Wrapper>
      <BackgroundImg image={SignUpImage} />

      <Content>
        <AnimatedContent>
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

          <Link to="/">Voltar para logon</Link>
        </AnimatedContent>
      </Content>
    </Wrapper>
  );
};

export default SignUp;
