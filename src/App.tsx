import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./router/router.tsx";

export default function App() {
  const element = useRoutes(routes);
  return <>{element}</>;
}