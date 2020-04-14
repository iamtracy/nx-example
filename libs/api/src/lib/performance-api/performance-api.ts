import axios from 'axios';
import { IPerfomanceApi } from './performance-api.model';

async function getPerformance(performance): Promise<IPerfomanceApi> {
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
    .then(({ data }) => [
      { name: 'Charles Schwab', id: 1 },
      { name: 'TD Ameritrade', id: 2 },
      { name: 'Wintrust', id: 3 },
      { name: 'Edward Jones', id: 4 },
      { name: 'JPMorgan Chase', id: 5 }
    ]);
}

export { getPerformance, getAccounts };
