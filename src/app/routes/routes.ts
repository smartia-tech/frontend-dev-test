import Home from "app/views/Home";

interface AppRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export const routes: AppRoute[] = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
];
