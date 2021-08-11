import React, { useEffect } from "react";
import actions from "src/modules/customer/view/customerViewActions";
import selectors from "src/modules/customer/view/customerViewSelectors";
import { useRouteMatch } from "react-router-dom";
import { useDispatch } from "react-redux";
function CustomerPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  //   const id = match.params.id;
  useEffect(() => {}, []);

  return (
    <div>
      <p>ViewPage</p>
    </div>
  );
}

export default CustomerPage;
