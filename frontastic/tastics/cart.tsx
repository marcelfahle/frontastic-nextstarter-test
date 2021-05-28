export function Cart(props) {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/cart`);
  if (!data) return null;
  return (
    <FullCart items={data.cart.lineItems} sum={10000} isLoading={!!data} />
  );
}
