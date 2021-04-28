import React from 'react';
import styles from './user-avatar.module.scss';
import Link from 'next/link';

const UserAvatar = ({ user, repo, isLarge}) => {
  return (
    <div className={(isLarge) ? `${styles.mainUser}` : `${styles.user}`}>
      
      {(isLarge && repo) ? <h3 className={`is-size-3 ${styles.userLink}`}>
                              <a>{repo.name}</a>
                          </h3>: null }

      <figure className={`${styles.avatar} image`}>
        <img className="is-rounded" src={user.avatar_url} alt="avatar" />
      </figure>
      <div className={styles.userLink}>
        <Link href="/profile/[id]" as={`/profile/${user.login}`}>
          <a>{user.login}</a>
        </Link>
        {(isLarge && user) ? <h3 className="is-size-3">{user.name}</h3>: null }
      </div>
    </div>
  );
};

export default UserAvatar;