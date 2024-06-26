'use client'
import React, { FC, SVGProps, useEffect, useRef, useState } from 'react';
import { AiOutlineBell, AiOutlineSearch } from 'react-icons/ai';
import styles from './Header.module.scss';
import { HiMenuAlt2 } from "react-icons/hi";
import useClickOutside from '@/hooks/useClickOutside';
import { IoCloseOutline, IoDocumentsOutline } from 'react-icons/io5';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa';
import { BriefCaseIcon, HomeIcon } from '@/components/Icons';
import { navItems } from '@/lib/constants';

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

const MobileHeader = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [openMenu, setOpenMenu] = useState(false)
  const mobileMenuRef = useRef(null)
  const pathname = usePathname();

  useClickOutside(mobileMenuRef, ()=>setOpenMenu(false))

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  useEffect(()=>{
    setOpenMenu(false)
  }, [pathname])

  return (
    <header className={styles.mobileHeader}>
     {openMenu && <div className={styles.menuContainer}>
      <aside className={styles.mobileMenu} ref={mobileMenuRef}>
      <div>
        <img src="/assets/images/lendsqr-logo.svg" alt="Lendsqr Logo" />
      </div>

      <section>
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
      </section>


        {/* <a href="">Docs <IoDocumentsOutline /></a> */}
    
      
      </aside>
      </div> }
      <div className={styles.logo}>
        <img src="/assets/images/lendsqr-logo.svg" alt="Lendsqr Logo" />
      </div>


      {isSearchVisible && (
          <form className={styles.searchForm}>
            <input type="text" autoFocus className={styles.input} placeholder='Search for anything' />
            <button type="submit">
              <AiOutlineSearch size={24} />
            </button>
            <button type='button' onClick={()=> setIsSearchVisible(false)}>
               <IoCloseOutline size={22}/>
            </button>
           
          </form>
        )}


{!isSearchVisible &&  <div className={styles.info}>

        <button className={styles.notificationBell}>
          <AiOutlineBell size={24} />
        </button>


        <button className={styles.searchToggle} onClick={toggleSearch}>
          <AiOutlineSearch size={24} />
        </button>

       

        <button className={styles.profile}>
          <img src="/assets/images/avatar.png" className={styles.userProfileImage} alt="User Avatar" />
        </button>

        <button onClick={()=> setOpenMenu(!openMenu)}>
            <HiMenuAlt2 size={24}/>
        </button> 

     
      </div>}
    </header>
  );
};

export default MobileHeader;
