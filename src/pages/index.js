import React from 'react';
import { useState} from 'react';
import Search from '../components/search/search';
import { searchRepos } from '../services/githubService';
import RepoList from '../components/repolist/repolist';
import { getRandomTopic } from '../helpers/randomTopic.helper';
import styles from './index.module.scss';

const Index = (props) => {
  const [searchText, setSearchText] = useState(props.searchText);
  const [repos, setRepos] = useState(props.repos);
  const [language, setLanguage] = useState('');
  const [loading, setLoading] = useState(false);

  const onSearchTextChange = (text) => {
    setSearchText(text);
    if (text) {
      loadRepos(text, language);
    }
  };

  const onLanguageChange = (language) => {
    setLanguage(language);
    loadRepos(searchText, language);
  };

  const loadRepos = async (searchText, language) => {
    setLoading(true);
    const res = await searchRepos(searchText, language);
    if (res && res.data) {
      setLoading(false);
      setRepos(res.data.items);
    }
  };

  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/img/gitdev.svg"></img>
      <Search
        searchText={searchText}
        language={language}
        options={props.languages}
        onSearchTextChange={onSearchTextChange}
        onLanguageChange={onLanguageChange}
      />
      <RepoList loading={loading} repos={repos} />
    </div>
  );
};

export const getServerSideProps = async () => {
  const searchText = getRandomTopic();
  const query = `${searchText}+topic=${searchText}+language:any`;
  const searchRes = await fetch(`https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`);
  const searchData = await searchRes.json();

  const languageRes = await fetch(`https://api.github.com/languages`);
  const languageData = await languageRes.json();

  return {
    props: {
      searchText: searchText,
      repos: searchData.items,
      languages: languageData
    }
  };
};

export default Index;