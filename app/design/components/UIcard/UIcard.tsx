import { useState } from "react";
import styles from './UIcard.module.css';


interface UICardProps {
  started: boolean; // Prop to track the "Get Started" state
  sent: boolean; // To handle the "Send" state
  handleSend?: () => void; // Function to handle "Send" button click
}

export default function UICard({ started, sent, handleSend}: UICardProps) {
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    timeOfBirth: "",
    hospital: "",
  });

  // Check if all inputs are filled
  const allInputsFilled = Object.values(formData).every(
    (value) => value.trim() !== "" // Ensure no field is empty
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Get 'name' and 'value' of the input
    setFormData((prevData) => ({
      ...prevData, // Keep the other fields unchanged
      [name]: value, // Update only the field that matches the input's 'name'
    }));
  };


  
  return (
    <div className={styles.card}>
      <div className={styles.headerContainer}>
        <h1 className={styles.hello}> 
          {sent ? "Thank You": started ? "Sign In" : "Hello"}
        </h1>
        <h1 className={styles.welcome}> 
          {sent ? "" :
          started ? "To proceed, we'll need a few details:":
           "Welcome to our world" }
        </h1>
      </div>
      <div className={styles.textBox}>
        {sent ? (
          <div className={styles.welcome}>
            <p>The form has been successfully submitted.</p>
          </div>
        ) : started ? (
            <form className={styles.form}>
            <input 
              type="text" 
              name="firstName"
              placeholder="First Name*" 
              className={styles.input} 
              value={formData.firstName} 
              onChange={handleInputChange} 
            />
            <input 
              type="text" 
              name="lastName"
              placeholder="Last Name*" 
              className={styles.input} 
              value={formData.lastName} 
              onChange={handleInputChange} 
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email*" 
              className={styles.input} 
              value={formData.email} 
              onChange={handleInputChange} 
            />
            <input 
              type="text" 
              name="dateOfBirth"
              placeholder="Date of birth*" 
              className={styles.input} 
              value={formData.dateOfBirth} 
              onChange={handleInputChange}
            />
            <input 
              type="text" 
              name="timeOfBirth"
              placeholder="Time of birth*" 
              className={styles.input} 
              value={formData.timeOfBirth} 
              onChange={handleInputChange}
            />
            <input 
              type="text" 
              name="hospital"
              placeholder="Hospital*" 
              className={styles.input} 
              value={formData.hospital} 
              onChange={handleInputChange} 
            />
            {allInputsFilled && (
              <button 
                type="button" 
                className={styles.sendButton} 
                onClick={handleSend}
                >
                Send
              </button>
            )}
          </form>
        ) : (
        <p>
          Astrological forecasts for       
          <span className={styles.highlight}> babies </span>
           for  
          <span className={styles.underline}> daily </span> 
          and 
          <span className={styles.underline}> weekly </span>
           use, personalized based on the 
          <span className={styles.highlight}> baby’s </span>
           birth date. 
          The app provides a fun and light way to understand the 
          <span className={styles.highlight}> baby’s </span> 
          development and plan for the day and near future.
        </p>
        )}

      </div>
    </div>
  );
}
