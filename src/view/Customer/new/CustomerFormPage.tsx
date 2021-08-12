import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router";
import CustomerForm from "src/view/Customer/new/CustomerForm";
import { getHistory } from "../../../modules/store";
import { useDispatch, useSelector } from "react-redux";
import actions from "src/modules/customer/form/customerFormActions";
import selectors from "src/modules/customer/form/customerFormSelectors";
import ContentWrapper from "../../Layout/styles/ContentWrapper";
import Spinner from "src/view/shared/Spinner";
function CustomerFormPage(props) {
  const dispatch = useDispatch();
  const [dispatched, setDispatched] = useState(false);
  const match = useRouteMatch();

  const initLoading = useSelector(selectors.selectInitLoading);
  const saveLoading = useSelector(selectors.selectSaveLoading);
  const record = useSelector(selectors.selectRecord);
  const isEditing = Boolean(props.match.params.id);
  const title = isEditing ? "Edit Customer" : "Add Customer";
  useEffect(() => {
    dispatch(actions.doInit(props.match.params.id));
    setDispatched(true);
  }, [dispatch, props.match.params.id]);
  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };
  return (
    <ContentWrapper>
      <h3>{title}</h3>
      {initLoading && <Spinner />}
      {dispatched && !initLoading && (
        <CustomerForm
          saveLoading={saveLoading}
          initLoading={initLoading}
          record={record}
          isEditing={isEditing}
          onSubmit={doSubmit}
          onCancel={() => getHistory().push("/customer")}
        />
      )}
    </ContentWrapper>
  );
}

export default CustomerFormPage;
