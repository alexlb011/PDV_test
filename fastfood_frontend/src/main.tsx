import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/Global.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyle></GlobalStyle>
    <App />
  </>
);
