import useSWR, { mutate } from "swr";

export function useContext() {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/context`,
  );

  return {
    context: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useSession() {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/context`,
  );

  return {
    session: data?.session,
    isLoading: !error && !data,
    isError: error,
  };
}

export function useAccount() {
  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/context`,
  );

  return {
    account: data?.session?.account,
    isLoading: !error && !data,
    isError: error,
  };
}
