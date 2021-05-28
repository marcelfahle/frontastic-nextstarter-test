import { API_TOKEN, API_URL } from "./const";
import { handleFetchResponse } from "./utils";

export type Fetcher<T = any, B = any> = (
  options: FetcherOptions<B>
) => T | Promise<T>;

export type FetcherOptions<Body = any> = {
  url?: string;
  query?: string;
  method?: string;
  variables?: any;
  body?: Body;
};

const fetcher: Fetcher = async ({
  url = API_URL,
  method = "POST",
  variables,
  query
}) => {
  return handleFetchResponse(
    await fetch(url, {
      method,
      body: JSON.stringify({ query, variables }),
      headers: {
        "X-Frontastic-Access-Token": API_TOKEN!,
        "Content-Type": "application/json"
      }
    })
  );
};

export default fetcher;

// export const useClient = baseUrl => {
//   const defaultHeaders = {
//     Accept: "application/json",
//     "Content-Type": "application/json"
//   };

//   const clientFetch = (url, method = "GET", body, headers) => {
//     const options = {
//       method,
//       headers: {
//         ...defaultHeaders,
//         ...headers
//       },
//       credentials: body ? "include" : "same-origin"
//     };

//     if (body) options.body = JSON.stringify(body);

//     return fetch(url, options)
//       .then(async response => {
//         const res = await response.json();
//         // that's how frontastic responds to errors
//         if (res.ok == false) {
//           throw new Error(res.message);
//         }
//         return res;
//       })
//       .catch(err => {
//         throw new Error(err);
//       });
//   };

//   const get = resource => {
//     const url = `${baseUrl}${resource ? resource : ""}`;
//     return clientFetch(url);
//   };

//   const post = (url, body) => {
//     return clientFetch(baseUrl + url, "POST", body);
//   };

//   return {
//     get,
//     post
//   };
// };
