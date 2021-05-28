import useSWR from "swr";

import { mutate } from "swr";

export function AddToCartButton({ className, children, product, variant }) {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/cart`);

  const addToCart = async e => {
    e.preventDefault();

    const payload = {
      _type: product._type,
      variant,
      count: 1
    };

    const res = await fetch(
      "https://demo-show.frontastic.io/api/cart/cart/add",
      {
        body: JSON.stringify(payload),
        headers: {
          accept: "application/json"
        },
        credentials: "include",
        method: "POST"
      }
    );

    mutate(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/cart`);
  };

  const isInCart = () =>
    data.cart.lineItems.find(v => v.variant.sku === variant.sku);

  if (!data) return null;

  if (isInCart()) return <span className="">in cart ✌️</span>;
  return (
    <button onClick={addToCart} className={className}>
      {children}
    </button>
  );
}
