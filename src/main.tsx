import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="bg-slate-100 h-screen flex justify-center items-center">
      <div>
        <span className="block text-center mb-16 text-3xl">
          LUNAR Persian Calendar
        </span>
        <App />
      </div>
    </main>
  </React.StrictMode>
);
