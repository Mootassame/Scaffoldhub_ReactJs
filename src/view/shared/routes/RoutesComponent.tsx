import routes from "../../routes";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import CustomLoadable from "src/view/shared/CustomLoadable";

function RoutesComponent(props: any) {
  return (
    <Switch>
      {routes.privateRoutes.map((route) => (
        <PrivateRoute
          key={route.path}
          path={route.path}
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
