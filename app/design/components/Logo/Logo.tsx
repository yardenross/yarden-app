import Image from 'next/image';
import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Image src="/Logo.png" alt="Baby Star Logo" width={78} height={78} />
      </div>
  );
}
