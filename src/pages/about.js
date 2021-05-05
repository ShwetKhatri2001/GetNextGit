import React from 'react';
import repoStyles from './repo/repo.module.scss';
import profileStyles from './profile/profile.module.scss';
import ButtonLink from '../components/basic/button-link';
import UserAvatar from '../components/repoitem/user-avatar';
import Link from 'next/link';
import { FaGrinStars } from 'react-icons/fa';
import Head from 'next/head';

const About = ({devRepo,devProfile}) => {

  return (
    <>
     <div>
      <Head>
         <title>GetNextGit | About</title>
      </Head>
      <div className={repoStyles.devBack}><ButtonLink href="/" text="Back"/></div>
      <div className={repoStyles.devtitle}><h1>Git Repository</h1></div>
      <div className={repoStyles.repoProfile}>
        <div className={repoStyles.repoDetails}>
           <div className={repoStyles.gitLink}>
            <Link href="/repo/[id]" as={`/repo/${devRepo.id}`}>
              <a>{devRepo.name}</a>
            </Link>
          </div>
          <div className={repoStyles.description}>{devRepo.description}</div>
          <div className={repoStyles.language}>{devRepo.language}</div>

          <ButtonLink
            href={devRepo.html_url}
            text="View Repo on Github"
            type="dark"
            target="_blank"
            external
          />
        </div>
      </div>
    </div>

    <div>
      <div className={repoStyles.devtitle}><h3>Developer Profile</h3></div>
      <div className={profileStyles.userProfile}>
        <UserAvatar user={devProfile} isLarge={true}/>
        <div className={profileStyles.userDetails}>
          {devProfile.bio && 
                <div className={profileStyles.text}>{devProfile.bio}</div>}
          {devProfile.email && 
                <div className={profileStyles.text}>{devProfile.email}</div>}
          {devProfile.blog && <div className={profileStyles.text}>
                <a target="_blank" href={devProfile.blog}>{devProfile.blog}</a></div>}
          {devProfile.location && (
                <div className={profileStyles.text}>{devProfile.location}</div>)}
      
        <div className={profileStyles.counters}>
            <div className={profileStyles.counter}>
              <FaGrinStars/>
              <span>Followers :  {devProfile.followers}</span>
            </div>
            <div className={profileStyles.counter}>
              <FaGrinStars/>
              <span>Following : {devProfile.following}</span>
            </div>
        </div>

        <ButtonLink
          href={devProfile.html_url}
          text="View Profile on Github"
          type="dark"
          target="_blank"
          external
        />
        </div>
      </div>
    </div>

  </>
  );
};

export const getServerSideProps = async () => {
  const devProRes = await fetch(`https://api.github.com/users/ShwetKhatri2001`);
  const devProData = await devProRes.json();

  const devRepoRes = await fetch(`https://api.github.com/repositories/362403240`);
  const devRepoData = await devRepoRes.json();

  return {
    props: {
      devRepo: devRepoData,
      devProfile: devProData,
    }
  };
};

export default About;