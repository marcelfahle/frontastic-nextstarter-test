import fetcher, { Fetcher } from "./fetcher";

export type FrontasticConfig = {
  locale: string;
  fetcher: Fetcher;
};

export const FrontasticConfig = {
  locale: "en-us",
  fetcher
};
