import React from 'react';
import styles from './repo.module.scss';
import ButtonLink from '../../components/basic/button-link';
import UserAvatar from '../../components/repoitem/user-avatar';

const Repo = ({ repo }) => {
  return (
    <div>
      <ButtonLink href="/" text="Back" />

      <div className={styles.header}>
        <span>{repo.name}</span>
      </div>
      <UserAvatar user={repo.owner}></UserAvatar>
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