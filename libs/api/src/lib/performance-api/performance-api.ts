import axios from 'axios';
import moment from 'moment';
import { IPerformanceApi, IAccountApi } from './performance-api.model';

async function getPerformance(performance): Promise<IPerformanceApi> {
  const startDate = moment(performance.startDate).format('YYYY-MM-DD');
  const endDate = moment(performance.endDate).format('YYYY-MM-DD');
  return await axios
    .get(
      `${domain}/restapi/performance/timeseries/accounts?accountIds=${performance.account.id}&startDate=${startDate}&endDate=${endDate}&segmentType=TOTAL_FUND&period=${performance.period}&includeAccountSleeves=false&fields=segments.results.netRateOfReturn,segments.results.endDate`,
      {
        auth,
      }
    )
    .then(({ data }) => {
      const [segments] = data.content.segments;
      return (segments || []).results
        .filter(({ netRateOfReturn }) => netRateOfReturn !== null)
        .map((account) => ({
          ...account,
          uv: account.netRateOfReturn,
          pv: account.netRateOfReturn,
          amt: account.netRateOfReturn,
        }));
    });
}

async function getAccounts(): Promise<Array<IAccountApi>> {
  return await axios
    .get(`${domain}/restapi/accounts?size=100&fields=**`, {
      auth,
    })
    .then(({ data }) => data.content);
}

export { getPerformance, getAccounts };
