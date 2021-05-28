import MainMenuComponent from "../../components/MainMenu";
import { useContext, useSession, useAccount, useClient } from "frontastic";

export function MainMenu({ data }) {
  return <p>hello</p>;
  // const { context } = useContext();
  // if (!data) return null;
  // return (
  //   <>
  //     <MainMenuComponent
  //       topCategories={data.topCategories}
  //       logo={data.logo}
  //       goToCartPage={console.log}
  //       goToWishlistPage={console.log}
  //       goToProfilePage={console.log}
  //     />
  //   </>
  // );
}
