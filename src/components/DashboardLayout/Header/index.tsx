import React from "react";
import { BellIcon, DropdownIcon, SearchIcon } from "@/components/Icons";
import styles from "./Header.module.scss";
import { AiOutlineBell } from "react-icons/ai";
import Link from "next/link";
interface IHeader {}

const index = () => {
  return (
    <header className={styles.header}>
      <Link href={'/dashboard'}  className={styles.logo}>
        <img src="/assets/images/lendsqr-logo.svg" alt="Lendsqr Logo" />
      </Link>

      <div className={styles.info}>
        <form action="">
          <input
            type="text"
            className={styles.input}
            placeholder="Search for anything"
          />
          <button>
            <SearchIcon />
          </button>
        </form>

        <div>
          <a href="">Docs</a>
          <button className={styles.notificationBell}>
            <AiOutlineBell size={24} />
          </button>

          <section className={styles.profile}>
            <img
              src="/assets/images/avatar.png"
              className="user-profile-image"
              alt=""
            />

            <button>
              Adedeji <DropdownIcon />
            </button>
          </section>
        </div>
      </div>
    </header>
  );
};

export default index;
