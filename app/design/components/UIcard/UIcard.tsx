import styles from './UIcard.module.css';

interface UICardProps {
  started: boolean; // Prop to track the "Get Started" state
}

export default function UICard({ started }: UICardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.headerContainer}>
        <h1 className={styles.hello}> 
          {started ? "Sign In" : "Hello"}
        </h1>
        <h1 className={styles.welcome}> 
          {started? "To proceed, we'll need a few details:": "Welcome to our world" }
        </h1>
      </div>
      <div className={styles.textBox}>
        {started ? (
            <form className={styles.form}>
            <input type="text" placeholder="First Name*" className={styles.input} />
            <input type="text" placeholder="Last Name*" className={styles.input} />
            <input type="email" placeholder="Email*" className={styles.input} />
            <input type="text" placeholder="Date of birth*" className={styles.input} />
            <input type="text" placeholder="Time of birth*" className={styles.input} />
            <input type="text" placeholder="Hospital*" className={styles.input} />
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
