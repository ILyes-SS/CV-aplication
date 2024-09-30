import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Form } from "./components/Form.jsx";
import { CV } from "./components/CV.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CV />
  </StrictMode>
);
