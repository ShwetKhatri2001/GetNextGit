import React from 'react';
import RepoItem from '../repoitem/repoitem';
import styles from './repolist.module.scss';

const RepoList = ({ repos, loading }) => {
  if (loading) {
    return <img src="/img/loader.gif" className={styles.loader} />;
  }

  if (!repos || repos.length === 0) {
    return <span className={styles.message}>No repositories found.</span>;
  }

  return (
    <div className={styles.repoList}>
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo}></RepoItem>
      ))}
    </div>
  );
};

export default RepoList;