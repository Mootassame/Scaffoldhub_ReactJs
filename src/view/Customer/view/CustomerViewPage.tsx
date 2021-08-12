import React, { useEffect } from "react";
import actions from "src/modules/customer/view/customerViewActions";
import selectors from "src/modules/customer/view/customerViewSelectors";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ContentWrapper from "src/view/Layout/styles/ContentWrapper";
import CustomerView from "src/view/Customer/view/CustomerView";
function CustomerPage(props) {
  const dispatch = useDispatch();

  const match = useRouteMatch();
  const record = useSelector(selectors.selectRecord);
  const loading = useSelector(selectors.selectLoading);

  useEffect(() => {
    dispatch(actions.doFind(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  return (
    <ContentWrapper>
      <CustomerView loadign={loading} record={record} />
    </ContentWrapper>
  );
}

export default CustomerPage;
