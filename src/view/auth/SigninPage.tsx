import React, { useState, useEffect } from "react";
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
import ButtonIcon from "src/view/shared/ButtonIcon";
import queryString from "query-string";
import Message from "src/view/shared/message";
import OtherActions from "src/view/auth/styles/OtherActions";
import { Link } from "react-router-dom";
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

  const { socialErrorCode } = queryString.parse(location.search);
  const externalErrorMessage = useSelector(selectors.selectErrorMessage);
  useEffect(() => {
    dispatch(actions.doClearErrorMessage());
  }, [dispatch]);

  useEffect(() => {
    if (socialErrorCode) {
      if (socialErrorCode === "generic") {
        Message.error("errors.defaultErrorMessage");
      } else {
        Message.error("socialErrorCode");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
              <ButtonIcon loading={loading} />
              Signin
            </button>

            <OtherActions>
              <Link to='/auth/signup' className='btn btn-sm btn-link'>
                Create An Account
              </Link>
            </OtherActions>
          </form>
        </FormProvider>
      </Content>
    </Wrapper>
  );
}
export default SigninPage;
