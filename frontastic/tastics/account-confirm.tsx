import { useEffect } from "react";
import { useRouter } from "next/router";
import { useContext, useSession, useAccount } from "frontastic";

export function AccountConfirm() {
  // const router = useRouter();
  // const { context, isLoading } = useContext();
  // // const frontastic = useClient(process.env.NEXT_PUBLIC_BASE_URL);

  // const token = router?.query?.slug[2];

  // useEffect(() => {
  //   if (!token) return;

  //   frontastic.post(
  //     `/api/account/confirm/${token}`,
  //   )
  //     .then((res: any) => console.log("success yo", res))
  //     .catch((err: any) => console.error(err));
  // }, []);

  // if (!context || isLoading) return null;
  // console.log("the stuff", context, router.query.slug[2]);

  // if (!token) return <p>No Token error</p>;

  return <p>Work in progress...</p>;
}
