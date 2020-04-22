import axios from 'axios';
import moment from 'moment';
import { IPerfomanceApi, IAccountApi } from './performance-api.model';

// const domain = 'http://jrahman02:8080';
const domain = 'http://tbradley01:8080';
const basicAuth = {
  username: 'sysadmin',
  password: 'sysAdmin123',
};

async function getPerformance(performance): Promise<IPerfomanceApi> {
  const selectedAccountName = performance.account.name;
  const startDate = moment(performance.startDate).format('YYYY-MM-DD');
  const endDate = moment(performance.endDate).format('YYYY-MM-DD');
  return await axios
    .get(
      `${domain}/restapi/performance/timeseries/accounts/${performance.account.id}?startDate=${startDate}&endDate=${endDate}&segmentType=TOTAL_FUND&period=${performance.period}&fields=segments[name,results[endDate,grossRateOfReturn]]`,
      {
        auth: basicAuth,
      }
    )
    .then(({ data }) =>
      data.content.segments
        .filter(({ name }) => name !== selectedAccountName)
        .flatMap((account) => account.results)
        .filter(({ grossRateOfReturn }) => grossRateOfReturn !== null)
        .map((account) => ({
          ...account,
          uv: account.grossRateOfReturn,
          pv: account.grossRateOfReturn,
          amt: account.grossRateOfReturn,
        }))
    );
}

async function getAccounts(): Promise<Array<IAccountApi>> {
  return await axios
    .get(`${domain}/restapi/accounts?size=100&fields=**`, {
      auth: basicAuth,
    })
    .then(({ data }) => data.content);
}

export { getPerformance, getAccounts };
