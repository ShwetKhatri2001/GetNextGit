import React from 'react';
import Link from 'next/link';
import styles from './repoitem.module.scss';
import { FaStar, FaCodeBranch} from 'react-icons/fa';
import { VscRepo } from 'react-icons/vsc';
import UserAvatar from './user-avatar';

const RepoItem = ({ repo }) => {
  const cutDescription = (description) => {
    if (description && description.length > 100) {
      return description.slice(0, 100) + '...';
    }

    return description;
  };

  return (
    <div className={`${styles.repoItem} box`}>
      <div className={styles.repoName}>
        <VscRepo className={styles.repoIcon}/>
        <Link href="/repo/[id]" as={`/repo/${repo.id}`}>
          {repo.name}
        </Link>
      </div>

      <UserAvatar user={repo.owner} />
      <p className={styles.description}>{cutDescription(repo.description)}</p>

      <div className={styles.footer}>
        <div className="is-flex">
          <div className={styles.counter}>
            <FaStar />
            <span>{repo.stargazers_count}</span>
          </div>
          <div className={styles.counter}>
            <FaCodeBranch />
            <span>{repo.forks_count}</span>
          </div>
        </div>
        <div className={styles.language}>
          <span>{repo.language}</span>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
