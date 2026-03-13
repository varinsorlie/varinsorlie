//import { createBrowserRouter } from "react-router-dom"
import Home from "../components/Homepage";
import { ListPage } from "../components/ListPage";
import { Layout } from "../components/Layout";
import Blog from "../components/BlogPage";
import type { RouteObject } from "react-router-dom";


export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: ":slug", Component: ListPage },
      { path: "/blog", Component: Blog },
    ],
  },
];