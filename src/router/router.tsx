import { createBrowserRouter } from "react-router-dom"
import Homepage from "../components/Homepage";
import { ListPage } from "../components/ListPage";
import { Layout } from "../components/Layout";

export const router = createBrowserRouter([
 {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Homepage },
      { path: ":slug", Component: ListPage },
    ],
  },
])