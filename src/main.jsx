import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { registerLicense } from "@syncfusion/ej2-base";

// Registering Syncfusion license key
registerLicense(
  "Ngo9BigBOggjHTQxAR8/V1NAaF5cWWJCf0x0RXxbf1x0ZFZMYF1bRHNPIiBoS35RdURhW31fcnRQQ2RfVEN1"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
