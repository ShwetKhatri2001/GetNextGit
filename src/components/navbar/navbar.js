import React from 'react';
import Link from 'next/link';
import { VscGithub } from 'react-icons/vsc';
import styles from './navbar.module.scss';


const Navbar = () => {

  (function() {
    if (process.browser) {
    var burger = document.querySelector('.navbar-burger');
    var menu = document.querySelector('.navbar-menu');
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-active');
        menu.classList.toggle('is-active');
    });
   }
  })();

  return (
    <nav
      className={`navbar is-primary ${styles.nav} `}
      role="navigation"
      aria-label="main navigation"
    >
      <div className={`navbar-brand ${styles.navbar_brand}`}>
        <Link href="/">
          <a className="navbar-item"><VscGithub className={styles.logo}/>GetNextGit</a>
        </Link>
        <a
          role="button"
          className="navbar-burger burger "
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          <Link href="/">
            <a className="navbar-item">Home</a>
          </Link>
          <Link href="/about">
            <a className="navbar-item">About</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
