import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Wrapper from "src/view/auth/styles/Wrapper";
import Content from "src/view/auth/styles/Content";
import InputFormItem from "src/view/shared/form/items/InputFormItem";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/auth/authActions";
import selectors from "src/modules/auth/authSelectors";
import { useLocation } from "react-router-dom";

const schema = yup.object().shape({
  email: yupFormSchemas.string("email", {
    required: true,
  }),
  password: yupFormSchemas.string("password", {
    required: true,
  }),
});
function SigninPage() {
  const location = useLocation();
  const dispatch = useDispatch();
  const loading = useSelector(selectors.selectLoading);
  const externalErrorMessage = useSelector(selectors.selectErrorMessage);
  const [initialValue] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: "onSubmit",
    defaultValues: initialValue,
  });

  const onSubmit = ({ email, password, rememberMe }) => {
    dispatch(actions.doSigninWithEmailAndPassword(email, password, rememberMe));
  };
  return (
    <Wrapper>
      <Content>
        <h1>SigninPage</h1>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <InputFormItem
              name='email'
              placeholder='Email'
              autoFocus
              externalErrorMessage={externalErrorMessage}
            />
            <InputFormItem
              name='password'
              type='password'
              placeholder='Password'
              autoComplete='password'
            />
            <button
              className='btn btn-primary btn-block'
              type='submit'
              disabled={loading}>
              Signin
            </button>
          </form>
        </FormProvider>
      </Content>
    </Wrapper>
  );
}
export default SigninPage;
