import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import InfoContextProvider from "./context/InfoContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <InfoContextProvider>
    <App />
  </InfoContextProvider>
);
