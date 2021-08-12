import React, { useState } from "react";
import InputFormItem from "src/view/shared/form/items/InputFormItem";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import yupFormSchemas from "src/modules/shared/yup/yupFormSchemas";
import { i18n } from "src/i18n";
import FormWrapper from "../../shared/styles/FormWrapper";
import DatePickerFormItem from "../../shared/form/items/DatePickerFormItem";
import moment from "moment";
import ButtonIcon from "src/view/shared/ButtonIcon";
const schema = yup.object().shape({
  name: yupFormSchemas.string("name", {
    required: true,
    min: 2,
    max: 15,
  }),
  birthdate: yupFormSchemas.date("birthdate", {}),
});
function CustomerForm(props) {
  const [initailValues] = useState(() => {
    const record = props.record || {};
    return {
      name: record.name,
      birthdate: record.birthdate
        ? moment(record.birthdate, "YYYY-MM-DD").toDate()
        : null,
    };
  });
  const form = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: initailValues,
  });

  const onSubmit = (id, values) => {
    props.onSubmit(props.record?.id, values);
  };
  return (
    <FormWrapper>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='col-lg-7 col-md-8 col-12'>
            <InputFormItem
              label='Name_Customer'
              name='name'
              required={true}
              autoFocus
            />
          </div>
          <div className='col-lg-7 col-md-8 col-12'>
            <DatePickerFormItem
              name='birthdate'
              label='Birthdate'
              required={false}
            />
          </div>
          <button
            className='btn btn-primary'
            disabled={props.saveLoading}
            type='button'
            onClick={form.handleSubmit(onSubmit)}>
            <ButtonIcon loading={props.saveLoading} iconClass='far fa-save' />
            Submit
          </button>

          {props.onCancel ? (
            <button
              className='btn btn-dark'
              type='button'
              onClick={() => props.onCancel()}>
              Cancel
            </button>
          ) : null}
        </form>
      </FormProvider>
    </FormWrapper>
  );
}
export default CustomerForm;
