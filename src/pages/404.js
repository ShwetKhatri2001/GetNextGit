import React from 'react';
import Head from 'next/head';
import ButtonLink from '../components/basic/button-link';
import styles from './index.module.scss';

const Error = () => {
    return (
        <div className="page">
            <Head>
                <title>GetNextGit | 404</title>
            </Head>
            <ButtonLink href="/" text="Back" />

           <div className={styles.container}>
                <div className={styles.errorType}>404</div>
                <p className="is-size-4 m-5">Oops 😮 Error - This Page doesn't exist</p>
                <ButtonLink
                href='/'
                text="Go to Home"
                type="dark"
                target="_blank"
                />
            </div>
        </div>
    )
}

export default Error;
