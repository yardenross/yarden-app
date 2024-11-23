import BackgroundShapes from "../BackgroundShapes/BackgroundShapes";
import Logo from "../Logo/Logo";
import UICard from "../UIcard/UIcard";
import Button from "../Button/Button";
import styles from "./LandingScreen.module.css";

interface LandingScreenProps {
  started: boolean; // Whether "Get Started" has been clicked
  onGetStarted: () => void; // Function to handle button click
}


export default function LandingScreen({ started, onGetStarted }: LandingScreenProps) {
  return (
    <main>
      <div className={styles.phoneScreen}>
        <UICard started={started} />
        <BackgroundShapes started={started} />
        <Logo />
        {!started && <Button onClick={onGetStarted} />}
      </div>
    </main>
  );
}
