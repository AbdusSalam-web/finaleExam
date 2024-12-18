import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import app from "./firebas.config";
import { ToastContainer, toast } from "react-toastify";
import Home from "./pages/Home";

function App() {
  // varibale part
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={myRoute}></RouterProvider>
      <ToastContainer />
    </>
  );
}

export default App;
