import React from "react";
import Greeting from "./components/Greeting";
import "./index.css";

export default function App() {
  return (
    <main className="app-root">
      <h1>Greeting App (Vite + React)</h1>

      <section style={{ display: "grid", gap: 12 }}>
        <Greeting name="Vanishree" bgColor="#ffefc7" />
        <Greeting name="Visitor" bgColor="#d1fae5" style={{ marginTop: 8 }} />
        <Greeting name="Friend" bgColor="#e0f2fe" style={{ marginTop: 8 }} />
      </section>
    </main>
  );
}
