"use client";
import styles from './Button.module.css';


// Define props type for the Button
interface ButtonProps {
  onClick?: () => void; // Optional click handler
}


export default function Button({ onClick }: ButtonProps) {
  return (
    <button className={styles.getStartedButton} onClick={onClick}>
      Get Started
    </button>
  );
}
