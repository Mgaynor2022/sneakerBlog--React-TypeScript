import { Navigate } from "react-router";

export default function PrivateRoute(props: {
  token: any;
  children: any;
  redirectTo: any;
}) {
  const { token, children, redirectTo } = props;
  return token ? <>{children}</> : <Navigate to={redirectTo} />;
}
