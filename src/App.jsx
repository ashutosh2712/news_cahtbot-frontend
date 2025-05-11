import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout";
import About from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/chat",
        element: <ChatPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
