import axios from 'axios';

async function getPerformance() {
  return await axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(({ data }) =>
      data.slice(0, 10).map(({ title }) => ({
        name: title.split(' ')[0],
        uv: Math.floor(Math.random() * 2000) + 1,
        pv: Math.floor(Math.random() * 3800) + 1,
        amt: Math.floor(Math.random() * 2500) + 1
      }))
    );
}

async function getAccounts() {
  return await axios
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(({ data }) =>
      data.slice(0, 5).map(({ title, id }) => ({
        name: title.split(' ')[1],
        id
      }))
    );
}

export { getPerformance, getAccounts };
