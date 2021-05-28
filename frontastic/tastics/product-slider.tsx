import Image from "next/image";
import Link from "next/link";

import { AddToCartButton } from "../../components";

function Product({ data }) {
  const variant = data.variants[0];
  const { price, discountedPrice, images } = variant;

  const localizedPrice = (price / 100).toLocaleString("en-GB", {
    style: "currency",
    currency: "EUR"
  });

  return (
    <div className="block w-80 bg-white shadow-lg rounded-lg overflow-hidden my-10">
      <Link href={data._url}>
        <a>
          <div className="px-4 py-2">
            <h1 className="text-gray-900 font-bold text-xxl uppercase truncate">
              {data.name}
            </h1>
          </div>
          <Image
            className="h-56 w-full object-contain mt-2"
            src={images[0]}
            width="320"
            height="226"
            alt={data.name}
          />
          <div className="flex items-center justify-between px-4 py-2 bg-gray-200">
            <h1 className="text-gray-900 font-bold text-xl">
              {localizedPrice}
            </h1>
            <AddToCartButton
              product={data}
              variant={variant}
              className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded"
            >
              Add to cart
            </AddToCartButton>
          </div>
        </a>
      </Link>
    </div>
  );
}

export function ProductSlider({ data, stream }) {
  return (
    <div
      className="grid overflow-x-scroll"
      style={{
        gridTemplateColumns: "repeat(20, calc(320px + 40px))"
      }}
    >
      {stream.items.map(item => (
        <Product data={item} key={item.productId} />
      ))}
    </div>
  );
}
