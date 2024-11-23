"use client";
import { useState } from "react";
import LandingScreen from "./components/LandingScreen/LandingScreen";
import styles from "./page.module.css"

export default function Demos() {
  const [started, setStarted] = useState(false); // Track if "Get Started" is clicked
  const handleGetStarted = () => {
    setStarted(true); // Update state when button is clicked
  };

  return (
    <main>
        <LandingScreen started={started} onGetStarted={handleGetStarted} />
    </main>
  );
}
