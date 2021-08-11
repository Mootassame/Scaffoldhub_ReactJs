import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import selectors from "src/modules/customer/list/customerListSelectors";
import actions from "src/modules/customer/list/customerListActions";
import yupFilterSchemas from "src/modules/shared/yup/yupFilterSchemas";
import * as yup from "yup";
import { i18n } from "src/i18n";

const schema = yup.object().shape({
  name: yupFilterSchemas.string(i18n("name")),
  birthdateRange: yupFilterSchemas.dateRange("birthdateRange"),
  gender: yupFilterSchemas.enumerator("gender"),
});
const emptyValues = {
  name: null,
  birthdateRange: [],
  gender: null,
};

function CustomerListFilter(props) {
  const dispatch = useDispatch();

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });
  const rawFilter = useSelector(selectors.selectRawFilter);

  useEffect(() => {
    dispatch(actions.doFetch(schema.cast(initialValues), rawFilter));
    // eslint-disable-next-line
  }, [dispatch]);
  return (
    <div>
      <p>Filter</p>
    </div>
  );
}
export default CustomerListFilter;
