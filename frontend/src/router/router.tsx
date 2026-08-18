//import { createBrowserRouter } from "react-router-dom"
import Home from "../components/Homepage.js";
import { ListPage } from "../components/ListPage.js";
import { Layout } from "../components/Layout.js";
import Blog from "../components/BlogPage.js";
import type { RouteObject } from "react-router-dom";
import TravelPage from "../components/TravelPage.js";
import TravelDetailPage from "../components/TravelDetailPage.js";
import BirthdayPage from "../components/BirthdayPage.js";
import ArticleDetailPage from "../components/ArticleDetailPage.js";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: ":slug", Component: ListPage },
      { path: "blog", Component: Blog },
      { path: "travelPage", Component: TravelPage},
      { path: "travel/:slug", Component: TravelDetailPage },
      { path: "articles/:slug", Component: ArticleDetailPage },
      { path: "BirthdayPage", Component: BirthdayPage},
    ],
  },
];