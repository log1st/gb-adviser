import { createRoot } from "react-dom/client";
import { App } from "./containers/App.tsx";

const root =
  document.getElementById("root") ??
  document.body.appendChild(document.createElement("div"));

root.classList.add("root");

createRoot(root).render(<App />);
