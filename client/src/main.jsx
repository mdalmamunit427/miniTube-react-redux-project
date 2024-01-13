import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import AddVideo from "./components/add/AddVideo.jsx";
import EditVideo from "./components/edit/EditVideo.jsx";
import SingleVideo from "./components/pages/SingleVideo.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/videos/:videoId",
        element: <SingleVideo />,
      },
      {
        path: "/videos/add",
        element: <AddVideo />,
      },
      {
        path: "/videos/edit/:videoId",
        element: <EditVideo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <RouterProvider router={router} />
);
