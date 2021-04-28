import axios from 'axios';

const axiosConfig = {
  baseURL: 'https://api.github.com/',
  auth: {
    username: process.env.GITHUB_CLIENT_ID,
    password: process.env.GITHUB_CLIENT_SECRET
  }
};

const searchRepos = (searchText, language) => {
  const query = language ? `${searchText}+language:${language}` : searchText;

  return axios.get(
    `search/repositories?q=${query}&sort=stars&order=desc`,
    axiosConfig
  );
}


export { searchRepos};
