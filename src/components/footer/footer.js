import React from 'react';
import Link from 'next/link';
import { VscGithub } from 'react-icons/vsc';
import { AiOutlineLinkedin } from "react-icons/ai";
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="content has-text-centered">
            <p>
            <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
            is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
            </p>
            <AiOutlineLinkedin/>
        </div>
    </footer>
  );
};

export default Footer;
