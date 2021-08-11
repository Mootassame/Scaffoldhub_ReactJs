const privateRoutes = [
  {
    path: "/",
    loader: () => import("src/view/Dashboard/DashboardPage"),
    exact: true,
  },
  {
    path: "/customer",
    loader: () => import("src/view/Customer/list/UserPage"),
    exact: true,
  },
  {
    path: "/customer/new",
    loader: () => import("src/view/Customer/new/CustomerFormPage"),
    exact: true,
  },
  {
    path: "/user",
    loader: () => import("src/view/User/list/UserPage"),
    exact: true,
  },
  {
    path: "**",
    loader: () => import("src/view/shared/errors/Error404"),
  },
].filter(Boolean);

export default { privateRoutes };
