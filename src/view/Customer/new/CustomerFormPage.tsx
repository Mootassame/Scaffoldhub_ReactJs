import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import CustomerForm from "src/view/Customer/new/CustomerForm";
import { getHistory } from "../../../modules/store";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/customer/form/customerFormActions";
import selectors from "src/modules/customer/form/customerFormSelectors";
import ContentWrapper from "../../Layout/styles/ContentWrapper";
function CustomerFormPage(props) {
  const dispatch = useDispatch();
  const record = useSelector(selectors.selectRecord);
  const match = useRouteMatch();
  const isEditing = Boolean(match.params);
  const [dispatched, setdispatched] = useState(false);
  useEffect(() => {
    setdispatched(true);
    return () => {};
  }, [dispatch]);
  const doSubmit = (data) => {
    dispatch(actions.doCreate(data));
  };
  return (
    <ContentWrapper>
      {dispatched && (
        <CustomerForm
          record={record}
          onSubmit={doSubmit}
          onCancel={() => getHistory().push("/customer")}
        />
      )}
    </ContentWrapper>
  );
}

export default CustomerFormPage;
