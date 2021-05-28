import Link from "next/link";
import Image from "next/image";
import Tastic from "../frontastic/tastic";

import { CartIcon } from ".";

function Cell({ size, children }) {
  return <div className={`col-span-${size}`}>{children}</div>;
}

export function Layout({ children, data }) {
  console.log("layout data", data);
  return (
    <div>
      <header className="mx-8 flex justify-between items-center">
        {data.elements.map(cell => (
          <Cell size={cell.configuration.size} key={cell.cellId}>
            {cell.tastics.map(t => (
              <Tastic block={t} key={t.tasticId} />
            ))}
          </Cell>
        ))}
        <h1 className="relative h-12 my-4 text-left inline-block w-64">
          <Link href="/">
            <a>
              <Image src="/frontastic-gradient.svg" layout="fill" />
            </a>
          </Link>
        </h1>
        <div>
          <CartIcon />
        </div>
      </header>
      <main className="rounded-t-xl overflow-hidden bg-gradient-to-r bg-white p-8">
        {children}
      </main>
    </div>
  );
}
