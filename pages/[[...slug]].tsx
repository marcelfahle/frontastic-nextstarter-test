import useSWR from "swr";

import { Layout } from "../components";
import { fetcher } from "../helper/fetcher";
import Tastic from "../frontastic/tastic";
import getPageData from "../frontastic/data/get-page-data";

type Cell = {
  cellId: string;
  configuration: {
    _type: string;
    size: number;
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
  customConfiguration: [];
  tastics: [typeof Tastic];
};

function Cell({ size, children }) {
  return <div className={`col-span-${size}`}>{children}</div>;
}

function HomePage({ data }) {
  if (!data) return null;
  const { head, main } = data.page.regions;
  const { stream } = data.data;
  console.log("data", data);

  return (
    <Layout data={head}>
      <div className="grid grid-cols-12 gap-4">
        {main.elements.map(cell => (
          <Cell size={cell.configuration.size} key={cell.cellId}>
            {cell.tastics.map(t => (
              <Tastic block={t} key={t.tasticId} streams={stream} />
            ))}
          </Cell>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const config = { fetcher };
  console.log("PARAMS", params);
  const { data } = await getPageData(config, params);

  return {
    props: {
      data
    },
    revalidate: 600
  };
}

export async function getStaticPaths() {
  const paths = [];

  return { paths, fallback: true };
}

export default HomePage;
