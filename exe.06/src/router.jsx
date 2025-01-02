import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import StockItems from "./pages/StockItems";
import Dashboard from "./pages/Dashboard";

export default createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "items",
        element: <StockItems />,
      },
    ],
  },
]);
