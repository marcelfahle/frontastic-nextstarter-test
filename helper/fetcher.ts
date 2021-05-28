export const fetcher = url =>
  fetch(url, {
    method: "GET",
    headers: { accept: "application/json" },
    credentials: "include"
  }).then(r => r.json());
