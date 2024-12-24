import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";

const App = () => {
  const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/user", element: <UserPage /> },
  ]);
  return (
    <RouterProvider router={routes}>
      <Home />
    </RouterProvider>
  );
};

export default App;
