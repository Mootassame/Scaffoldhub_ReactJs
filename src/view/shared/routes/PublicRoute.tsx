import PermissionChecker from "src/modules/auth/permissionChecker";

import React from "react";

import { Route, Redirect } from "react-router";

function PublicRoute({ component: Component, currentUser, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const permissionChecker = new PermissionChecker(
          "611305bbd75d332c7392301a",
          currentUser
        );
        if (permissionChecker.isAuthenticated) {
          return <Redirect to='/' />;
        }

        return <Component {...props} />;
      }}
    />
  );
}
export default PublicRoute;
