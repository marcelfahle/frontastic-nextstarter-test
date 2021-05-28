// import {
//   ReactNode,
//   MutableRefObject,
//   createContext,
//   useRef,
//   useMemo
// } from "react";
// import { SWRConfig } from "swr";

// export * from "./hooks/use-frontastic";
// export * from "./hooks/fetch";

// type FrontasticProps = {
//   children?: ReactNode;
//   locale: string;
// } & Partial<FrontasticConfig>;

// type FrontasticContextValue = {
//   fetcherRef: MutableRefObject<Fetcher<any>>;
//   locale: string;
// };

// type FrontasticConfig = { fetcher: Fetcher<any> } & Omit<
//   FrontasticContextValue,
//   "fetcherRef"
// >;

// type Fetcher<T> = (options: FetcherOptions) => T | Promise<T>;

// type FetcherOptions = {
//   url?: string;
//   query?: string;
//   method?: string;
//   variables?: any;
//   body?: any;
// };

// const Frontastic = createContext<FrontasticContextValue | {}>({});

// const fetcher = async ({ url, method = "GET", variables, body: bodyObj }) => {
//   const hasBody = Boolean(variables || bodyObj);
//   const body = hasBody
//     ? JSON.stringify(variables ? { variables } : bodyObj)
//     : undefined;
//   const headers = hasBody
//     ? { "Content-Type": "application/json", accept: "application/json" }
//     : undefined;
//   const res = await fetch(url, {
//     method,
//     body,
//     headers,
//     credentials: "include"
//   });

//   if (res.ok) {
//     const { data } = await res.json();
//     return data;
//   }

//   throw Error("fetcher error");
// };

// const frontasticConfig: FrontasticConfig = {
//   locale: "en-us",
//   fetcher
//   // add more api functions here
// };

// export function FrontasticProvider({ children, ...config }: FrontasticProps) {
//   if (!config) {
//     throw new Error("FrontasticProvider requires a valid config!");
//   }

//   // merfe default with provided config options
//   const baseConfig = { ...frontasticConfig, ...config };

//   // store fetcher as ref
//   const fetcherRef = useRef(baseConfig.fetcher);

//   const cfg = useMemo(
//     () => ({
//       fetcherRef,
//       locale: baseConfig.locale
//     }),
//     [baseConfig.locale]
//   );

//   return <Frontastic.Provider value={cfg}>{children}</Frontastic.Provider>;
// }
