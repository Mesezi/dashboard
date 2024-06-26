import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.root}>
   <img src="/assets/images/lendsqr-logo.svg" alt="Lendsqr Logo" />
    <h1>Lendsqr Frontend Test</h1>
   <Link href={'/login'}>Login</Link>
    </div>
  
  );
}
