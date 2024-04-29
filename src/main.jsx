import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import AuthProviders from "./Authentication/AuthProvider/AuthProviders.jsx";
import { MyRouts } from "./MyRouts/MyRouts.jsx";
import { store } from "./Redux/store.jsx";
import "./index.css";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <AuthProviders>
          <Toaster position="top-center" reverseOrder={false} />
          <RouterProvider router={MyRouts} />
        </AuthProviders>
      </React.StrictMode>
    </QueryClientProvider>
  </Provider>
);
