function getRandomTopic() {
    const topics = ['covid', 'react', 'firebase', 'webdev', 'mern', 'india'];
    return topics[Math.floor(Math.random() * topics.length)];
  }
  
  export { getRandomTopic };