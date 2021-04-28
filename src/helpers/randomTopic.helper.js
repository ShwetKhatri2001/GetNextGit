function getRandomTopic() {
    const topics = ['covid', 'nextjs', 'firebase', 'web', 'mern', 'india'];
    return topics[Math.floor(Math.random() * topics.length)];
  }
  
  export { getRandomTopic };