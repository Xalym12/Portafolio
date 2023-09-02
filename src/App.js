import {RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/Login/Login.jsx"
import Home from "./pages/home/Home.jsx"

const App = () => {

  const routs = createBrowserRouter ([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login/>
    }
  ]);

  return(
    <RouterProvider router={routs}/>
  )
}

export default App;
