import { useEffect, useRef, useState } from "react";
import useSWR, { mutate } from "swr";
import { useRouter } from "next/router";

import { Layout } from "../../components";
import Block from "../../frontastic/block";

import Notifier from "../../helper/notifier";

function Cell({ size, children }) {
  return <div className={`col-span-${size}`}>{children}</div>;
}

function Preview() {
  const [currentHighlight, setCurrentHighlight] = useState(null);
  const router = useRouter();
  const { id } = router.query;
  const endpoint = `${process.env.NEXT_PUBLIC_BASE_URL}/p/${router.query.id}`;
  const notifier = useRef(null);

  const { data } = useSWR(endpoint);

  const handleRefresh = () => mutate(endpoint);

  const handleHighlight = ({ item }) => {
    if (currentHighlight !== item) {
      setCurrentHighlight(item);
    }
  };
  const handleEndHighlight = () => setCurrentHighlight(null);

  useEffect(() => {
    if (id && !notifier.current) {
      notifier.current = new Notifier(
        { previewId: id },
        {
          Refresh: handleRefresh,
          Highlight: handleHighlight,
          EndHighlight: handleEndHighlight
        }
      );
      notifier.current.connect();
    }
  }, [id]);

  if (!data || !window) return null;

  return (
    <Layout>
      <div className="grid grid-cols-12 gap-4">
        {data.page.regions.main.elements.map((cell: any) => (
          <Cell size={cell.configuration.size} key={cell.cellId}>
            {cell.tastics.map((t: any) => (
              <Block
                block={t}
                highlight={t.tasticId === currentHighlight}
                key={t.tasticId}
                streams={data.data.stream}
              />
            ))}
          </Cell>
        ))}
      </div>
    </Layout>
  );
}

export default Preview;
