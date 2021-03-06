export interface IPerfomanceApi {
  content: {
    segments: {
      name: string;
      results: [
        {
          trackingError: Object | null;
          endDate: string;
          grossRateOfReturn: number;
          netRateOfReturn: number;
          dollarWeightedRateOfReturn: number;
          beta: Object | null;
          upsideCapture: Object | null;
          downsideCapture: Object | null;
          informationRatio: Object | null;
          rsquared: Object | null;
          sharpeRatio: Object | null;
          standardDeviation: Object | null;
          startingMarketValue: number;
          startingReceivable: number;
          startingValue: number;
          endingMarketValue: Object | null;
          endingReceivable: number;
          endingValue: number;
          inflows: number;
          managementFees: number;
          netFlows: number;
          outflows: number;
          alpha: Object | null;
        }
      ];
    };
  };
}
