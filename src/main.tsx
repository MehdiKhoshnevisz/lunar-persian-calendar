import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <main className="bg-slate-100 h-screen flex justify-center items-center">
      <div>
        <div className="block text-center mb-16">
          <p className="text-3xl mb-2">تقویم ایرانی لونار</p>
          <p className="text-lg text-gray-800">LUNAR persian calendar</p>
        </div>

        <App />
      </div>
    </main>
  </React.StrictMode>
);
