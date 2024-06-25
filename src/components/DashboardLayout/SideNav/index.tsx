"use client";
import React, { FC, SVGProps } from "react";
import styles from "./SideNav.module.scss";
import Link from "next/link";
import { BriefCaseIcon, HomeIcon } from "@/components/Icons";
import { navItems } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { FaChevronDown } from "react-icons/fa";

interface NavItemProps {
  path: string;
  icon: FC<SVGProps<SVGSVGElement>>;
  title: string;
}

const NavItem: FC<NavItemProps> = ({ path, icon: Icon, title }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`${styles.navItem} ${isActive ? styles.active : ""}`}
    >
      <Icon className={styles.navIcon} />
      <span className={styles.navTitle}>{title}</span>
    </Link>
  );
};

const index = () => {
  return (
    <aside className={styles.aside}>
      <button className={styles.switchOrganization}>
        <BriefCaseIcon />
        Switch Organization
        <FaChevronDown />
      </button>

      <nav>
        
        <NavItem path={"/dashboard"} icon={HomeIcon} title={"Dashboard"} />

        {Object.keys(navItems).map((title) => (
          <section key={title} className={styles.navSection}>
            <h4>{title}</h4>

            <div>
              {navItems[title].map((item, index) => (
                <NavItem
                  key={index}
                  path={item.path}
                  icon={item.icon}
                  title={item.title}
                />
              ))}
            </div>
          </section>
        ))}
      </nav>
    </aside>
  );
};

export default index;
