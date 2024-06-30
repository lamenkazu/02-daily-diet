export type ColorVariant = "positive" | "negative";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: {
        variant: ColorVariant;
      };
      new: undefined;
      feedback: {
        variant: ColorVariant;
      };
      meal: {
        id: string;
        variant: ColorVariant;
      };
    }
  }
}
