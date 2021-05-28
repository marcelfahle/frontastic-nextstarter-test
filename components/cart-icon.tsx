import Link from "next/link";
import useSWR from "swr";

export function CartIcon() {
  const { data } = useSWR(`${process.env.NEXT_PUBLIC_BASE_URL}/api/cart/cart`);
  if (!data) return null;
  return (
    <Link href="/checkout/cart">
      <a className="cursor-pointer relative block w-12 h-12 rounded-md bg-blue-400 flex justify-center items-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <span className="absolute w-6 h-6 bg-green-400 rounded-full -top-2 -right-2 flex justify-center items-center">
          {data.cart.lineItems.length}
        </span>
      </a>
    </Link>
  );
}
