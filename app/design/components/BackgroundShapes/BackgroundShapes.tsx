import styles from './BackgroundShapes.module.css';

interface BackgroundShapesProps {
  started: boolean; // Prop to track the "Get Started" state
  sent: boolean; // To handle the "Send" state
}

export default function BackgroundShapes({ started, sent }: BackgroundShapesProps) {
  return (
    <div className={styles.backgroundContainer}>
      <div 
        className={`${styles.ellipse} ${started ? styles.loweredEllipse : ""} ${sent ? styles.sentEllipse : ""}`}
      ></div>
      {((!started && !sent) || (started && sent)) && (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="325"
        height="403"
        viewBox="0 0 325 403"
        fill="none"
        className={`${styles.vector} ${sent ? styles.sentVector : ""}`} 
        >
        <path
          d="M0.027533 189.277C3.44162 189.277 6.84654 189.277 10.2606 189.277C39.62 189.277 68.9885 188.545 98.045 184.206C113.216 181.945 128.451 178.705 142.997 173.909C173.586 163.831 191.666 141.526 200.459 111.138C205.782 92.7491 208.829 73.9488 209.893 54.9197C211.261 30.4353 211.857 5.90525 212.793 -18.6065C212.848 -20.0619 212.968 -21.5081 214.161 -23C214.161 -20.9955 214.087 -18.991 214.17 -16.9956C215.207 8.73353 215.427 34.5267 217.612 60.1552C219.052 77.0517 222.329 93.9665 226.523 110.424C235.471 145.48 258.278 167.493 293.208 177.222C311.38 182.284 329.91 185.35 348.678 186.412C372.769 187.776 396.916 188.362 421.035 189.268C422.989 189.341 424.944 189.277 427 190.201C425.926 190.329 424.862 190.54 423.779 190.577C401.33 191.318 378.854 191.62 356.424 192.892C334.15 194.155 312.086 197.121 290.574 203.556C256.984 213.596 235.93 235.609 226.404 269.055C221.163 287.461 218.07 306.243 217.024 325.282C215.675 349.775 215.051 374.296 214.133 398.808C214.078 400.163 214.133 401.517 213.326 403C213.17 402.14 212.894 401.288 212.867 400.419C212.123 378.031 211.765 355.615 210.572 333.254C209.407 311.332 206.479 289.603 200.348 268.405C190.446 234.182 168.3 212.434 133.957 202.814C115.639 197.679 96.962 194.604 78.0377 193.551C53.7903 192.197 29.497 191.602 5.22209 190.677C3.47833 190.613 1.74376 190.494 0 190.394C0 190.018 0.0183553 189.643 0.027533 189.259V189.277Z"
          fill="white"
        />
      </svg>
      )}
    </div>
  );
}

