export default async function getPageData(config, urlParams) {
  const slug = urlParams.slug?.join("/") || "";
  const endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/${
    slug !== "index" ? slug : ""
  }`;
  const data = await config.fetcher(endpoint);
  return { data };
}
