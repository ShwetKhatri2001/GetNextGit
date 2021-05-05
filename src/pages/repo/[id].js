import React from 'react';
import Head from 'next/head';
import styles from './repo.module.scss';
import ButtonLink from '../../components/basic/button-link';
import UserAvatar from '../../components/repoitem/user-avatar';


const Repo = ({ repo }) => {
  return (
    <div className="page">
       <Head>
         <title>GetNextGit | GetRepo</title>
      </Head>
      <ButtonLink href="/" text="Back" />

      <div className={styles.repoProfile}>
        <UserAvatar user={repo.owner} isLarge repo={repo}/>
        <div className={styles.repoDetails}>
          <div className={styles.description}>{repo.description}</div>
          <div className={styles.language}>{repo.language}</div>

          <ButtonLink
            href={repo.html_url}
            text="View on Github"
            type="dark"
            target="_blank"
            external
          />
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {

  const res = await fetch(`https://api.github.com/repositories/${query.id}`);
  const data = await res.json();

  return {
    props: { repo: data }
  };
};

export default Repo;