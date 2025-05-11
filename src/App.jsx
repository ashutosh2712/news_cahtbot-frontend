import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout";

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
