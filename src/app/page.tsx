import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.root}>
    <h1>Dashboard</h1>
   <Link href={'/login'}>Login</Link>
    </div>
  
  );
}
