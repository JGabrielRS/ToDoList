import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskPage from "./pages/TaskPage.jsx";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import CreateAccount from "./pages/CreateAccount.jsx";
import "../index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/createaccount",
        element: <CreateAccount/>,
    },
    {
        path: "/home",
        element: <Home/>,
    },
    {
      path: "/home/tasks/:id",
      element: <TaskPage/>,
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
