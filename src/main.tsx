import { createRoot } from "react-dom/client";
import App from "./App.js";
import { GlobalStyle } from "./style/global.js";

createRoot(document.getElementById("root")!).render(
  <>    
    <GlobalStyle />
    <App />
  </>
);
