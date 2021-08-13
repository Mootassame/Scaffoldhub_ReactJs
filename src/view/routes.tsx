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
    path: "/customer/:id",
    loader: () => import("src/view/Customer/view/CustomerViewPage"),
    exact: true,
  },
  {
    path: "/customer/:id/edit",
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

const publicRoutes = [
  {
    path: "/auth/signin",
    loader: () => import("src/view/auth/SigninPage"),
  },
  { path: "/auth/signup", loader: () => import("src/view/auth/SignupPage") },
].filter(Boolean);

export default { privateRoutes, publicRoutes };
