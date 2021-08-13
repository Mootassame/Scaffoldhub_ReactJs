import React, { useEffect, useRef } from "react";
import routes from "src/view/routes";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "src/view/shared/routes/PrivateRoute";
import CustomLoadable from "src/view/shared/CustomLoadable";
import PublicRoute from "src/view/shared/routes/PublicRoute";
import authSelectors from "src/modules/auth/authSelectors";
import layoutSelectors from "src/modules/layout/layoutSelectors";
import ProgressBar from "src/view/shared/ProgessBar";
function RoutesComponent(props) {
  const isInitialMount = useRef(true);

  const authLoading = useSelector(authSelectors.selectLoadingInit);
  const layoutLoading = useSelector(layoutSelectors.selectLoading);
  const loading = authLoading || layoutLoading;
  const currentUser = useSelector(authSelectors.selectCurrentUser);
  const currentTenant = useSelector(authSelectors.selectCurrentTenant);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      ProgressBar.start();
      return;
    }

    if (!loading) {
      ProgressBar.done();
    }
  }, [loading]);

  if (loading) {
    return <div />;
  }

  return (
    <Switch>
      {routes.publicRoutes.map((route) => (
        <PublicRoute
          key={route.path}
          exact
          path={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          component={CustomLoadable({ loader: route.loader })}
        />
      ))}

      {routes.privateRoutes.map((route) => (
        <PrivateRoute
          key={route.path}
          path={route.path}
          currentUser={currentUser}
          currentTenant={currentTenant}
          component={CustomLoadable({
            loader: route.loader,
          })}
          exact={Boolean(route.exact)}
        />
      ))}
    </Switch>
  );
}
export default RoutesComponent;
