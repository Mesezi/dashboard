import React from "react";
import Header from "./Header";
import SideNav from './SideNav'
import styles from './DashboardLayout.module.scss'
import MobileHeader from "./Header/MobileHeader";

export default function index({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.layout}>
     <MobileHeader />
      <Header />
      <SideNav />
      <div className={styles.mainContent}>
        {children}
      </div>


    </main>
  );
}
