"use client";
import { useState } from "react";
import BackgroundShapes from "../BackgroundShapes/BackgroundShapes";
import Logo from "../Logo/Logo";
import UICard from "../UIcard/UIcard";
import Button from "../Button/Button";
import styles from "./LandingScreen.module.css";

interface LandingScreenProps {
  started: boolean; // Whether "Get Started" has been clicked
  onGetStarted: () => void; // Function to handle button click]started: boolean;
}


export default function LandingScreen({ started, onGetStarted }: LandingScreenProps) {
  const [sent, setSent] = useState(false);
  
  const handleSend = () => {
    console.log("Send button clicked!");
    setSent(true);
  };

  return (
    <main>
      <div className={styles.phoneScreen}>
        <UICard started={started} sent={sent} handleSend={handleSend} />
        <BackgroundShapes started={started} sent={sent} />
        <Logo />
        {!started && <Button onClick={onGetStarted} />}
      </div>
    </main>
  );
}
