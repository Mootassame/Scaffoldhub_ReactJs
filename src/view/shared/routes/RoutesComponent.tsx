import routes from "src/view/routes";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "src/view/shared/routes/PrivateRoute";
import CustomLoadable from "src/view/shared/CustomLoadable";
import PublicRoute from "src/view/shared/routes/PublicRoute";
import authSelectors from "src/modules/auth/authSelectors";
import layoutSelectors from "src/modules/layout/layoutSelectors";
function RoutesComponent(props) {
  const autLoading = useSelector(authSelectors.selectLoading);
  const layoutLoading = useSelector(layoutSelectors.selectLoading);
  const loading = autLoading || layoutLoading;
  const currentUser = useSelector(authSelectors.selectCurrentUser);

  return (
    <Switch>
      {routes.publicRoutes.map((route) => (
        <PublicRoute
          key={route.path}
          path={route.path}
          currentUser={currentUser}
          exact
          component={CustomLoadable({ loader: route.loader })}
        />
      ))}

      {routes.privateRoutes.map((route) => (
        <PrivateRoute
          key={route.path}
          path={route.path}
          currentUser={currentUser}
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
