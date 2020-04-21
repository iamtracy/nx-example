import axios from 'axios';
import { IPerfomanceApi } from './performance-api.model';

async function getPerformance(performance): Promise<IPerfomanceApi> {
  return await axios
    .get('https://jsonplaceholder.typicode.com/posts', {
      data: performance,
      auth: {
        username: 'janedoe',
        password: 's00pers3cret',
      },
    })
    .then(({ data }) =>
      data.slice(0, 10).map(({ title }) => ({
        name: title.split(' ')[0],
        uv: Math.floor(Math.random() * 2000) + 1,
        pv: Math.floor(Math.random() * 3800) + 1,
        amt: Math.floor(Math.random() * 2500) + 1,
      }))
    );
}

async function getAccounts() {
  return await axios
    .get('https://jsonplaceholder.typicode.com/posts', {
      auth: {
        username: 'janedoe',
        password: 's00pers3cret',
      },
    })
    .then(({ data }) => [
      { name: 'Charles Schwab', encodedAccountId: 1 },
      { name: 'TD Ameritrade', encodedAccountId: 2 },
      { name: 'Wintrust', encodedAccountId: 3 },
      { name: 'Edward Jones', encodedAccountId: 4 },
      { name: 'JPMorgan Chase', encodedAccountId: 5 },
    ]);
}

export { getPerformance, getAccounts };
