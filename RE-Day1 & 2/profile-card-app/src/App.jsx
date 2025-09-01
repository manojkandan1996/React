import React from "react";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  return (
    <main>
      <h1 style={{ textAlign: "center" }}>Profile Card App</h1>
      <ProfileCard name="Vanishree" age="24" location="Bangalore" />
      <ProfileCard name="John Doe" age="30" location="New York" />
    </main>
  );
}
