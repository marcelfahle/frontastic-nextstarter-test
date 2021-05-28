import {
  ReactNode,
  MutableRefObject,
  createContext,
  useRef,
  useMemo
} from "react";
import fetcher, { Fetcher } from "./fetcher";
// export * from "./hooks/fetch";

type FrontasticProps = {
  children?: ReactNode;
  locale: string;
} & Partial<FrontasticConfig>;

type FrontasticContextValue = {
  fetcherRef: MutableRefObject<Fetcher<any>>;
  locale: string;
};

type FrontasticConfig = { fetcher: Fetcher<any> } & Omit<
  FrontasticContextValue,
  "fetcherRef"
>;

const Frontastic = createContext<FrontasticContextValue | {}>({});

const frontasticConfig: FrontasticConfig = { locale: "en-US", fetcher };

export function FrontasticProvider({ children, ...config }: FrontasticProps) {
  // if (!config) {
  //   throw new Error("FrontasticProvider requires a valid config!");
  // }

  // merge default with provided config options
  const baseConfig = { ...frontasticConfig, ...config };

  // store fetcher as ref
  const fetcherRef = useRef(baseConfig.fetcher);

  const cfg = useMemo(
    () => ({
      fetcherRef,
      locale: baseConfig.locale
    }),
    [baseConfig.locale]
  );

  return <Frontastic.Provider value={cfg}>{children}</Frontastic.Provider>;
}
