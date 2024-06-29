export type StatisticsVariant = "positive" | "negative";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        variant: StatisticsVariant;
      };
      new: undefined;
      meal: {
        id: string;
      };
    }
  }
}
