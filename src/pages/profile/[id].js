import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from './profile.module.scss';
import ButtonLink from '../../components/basic/button-link';
import { FaGrinStars } from 'react-icons/fa';
import UserAvatar from '../../components/repoitem/user-avatar';

const Profile = ({ profile }) => {

  const router = useRouter();
  
  return (
    <div className="page">
      <Head>
         <title>GetNextGit | GetProfile</title>
      </Head>
      <ButtonLink href='/' text="Back"/>

      <div className={styles.userProfile}>
        <UserAvatar user={profile} isLarge={true}/>
        <div className={styles.userDetails}>
          {profile.bio && 
                <div className={styles.text}>{profile.bio}</div>}
          {profile.email && 
                <div className={styles.text}>{profile.email}</div>}
          {profile.blog && <div className={styles.text}>
                <a target="_blank" href={profile.blog}>{profile.blog}</a></div>}
          {profile.location && (
                <div className={styles.text}>{profile.location}</div>)}
      
        <div className={styles.counters}>
            <div className={styles.counter}>
              <FaGrinStars/>
              <span>Followers :  {profile.followers}</span>
            </div>
            <div className={styles.counter}>
              <FaGrinStars/>
              <span>Following : {profile.following}</span>
            </div>
        </div>

        <ButtonLink
          href={profile.html_url}
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
  
  const res = await fetch(`https://api.github.com/users/${query.id}`);
  const data = await res.json();

  return {
    props: { profile: data }
  };
};

export default Profile;