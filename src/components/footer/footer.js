import React from 'react';
import { VscGithub } from 'react-icons/vsc';
import { AiOutlineLinkedin } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import styles from './footer.module.scss';

const Footer = () => {
  return (
        <footer className={styles.footer}>
            <div className={styles.bottom_div}>
                <h4 className={styles.message}><span>Made&nbsp;With&nbsp;</span><a><BsFillHeartFill/></a>&nbsp; By <span>Shwet Khatri</span> 
                    <a href="https://www.linkedin.com/in/shwet-khatri-4ab216196/" target="_blank"><AiOutlineLinkedin/></a>
                    <a href="https://github.com/ShwetKhatri2001" target="_blank"><VscGithub/></a>
                </h4>
            </div>
        </footer>
  );
};

export default Footer;
