import React from 'react';
import { useRouter } from 'next/router';
import styles from './basic.module.scss';
import Link from 'next/link';

const ButtonLink = ({ href, text, type = 'primary', target, external }) => {

  const router = useRouter();

  const types = {
    primary: 'is-primary',
    success: 'is-success',
    danger: 'is-danger',
    dark: 'is-dark',
    light: 'is-light'
  };

  const buttonClass = `button ${types[type]}`;

  if (external) {
    return (
      <div className={styles.button}>
        <a className={buttonClass} target={target} href={href}>
          {text}
        </a>
      </div>
    );
  }

  return (
    <div className={styles.button} onClick={() => router.back()}>
      <a className={buttonClass} target={target}>
          {text}
        </a>
    </div>
  );
};

export default ButtonLink;
