import React from "react";
import PropTypes from "prop-types";
// import { useSelector } from "react-redux";
import { useContext, useSession, useAccount, useClient } from "frontastic";
// import Mobile from "./Mobile";
import Desktop from "./Desktop";
//import { topCategoryType } from "./types";
import { useCurrentTopCategory, useNavPath } from "./mainMenuState";
import { useDeviceType } from "frontastic/hooks/use-device-type";

const MainMenu = ({
  topCategories,
  logo,
  goToCartPage,
  goToWishlistPage,
  goToProfilePage
}) => {
  // const { context } = useContext();
  // const [currentTopCategory, setCurrentTopCategory] = useCurrentTopCategory(0);
  // const [navPath, setNavPath] = useNavPath([]);
  // const deviceType = useDeviceType();
  // console.log("context ", context, topCategories);

  // const handleSelectTopCategory = categoryId => {
  //   setNavPath([]);
  //   setCurrentTopCategory(categoryId);
  // };

  // const handleSelectNavItem = item => {
  //   setNavPath([...navPath, item]);
  // };

  // const { cartItemsCount, wishListLineItemsCount } = {
  //   cartItemsCount: 0,
  //   wishListLineItemsCount: 0
  // };
  // // const { cartItemsCount, wishListLineItemsCount } = useSelector(state => {
  // //   const cartLineItems = state.cart?.cart?.data?.lineItems || [];
  // //   const wishListLineItems = state.wishlist?.wishlist?.data?.lineItems || [];
  // //   return {
  // //     cartItemsCount: cartLineItems.reduce((accumulator, currentValue) => {
  // //       return accumulator + currentValue.count;
  // //     }, 0),
  // //     wishListLineItemsCount: wishListLineItems.reduce(
  // //       (accumulator, currentValue) => {
  // //         return accumulator + currentValue.count;
  // //       },
  // //       0
  // //     )
  // //   };
  // // });

  // if (!topCategories) {
  //   return null;
  // }

  // // For performance reasons we hide the mobile navigation on desktop and vice versa.
  // // if (deviceType === "mobile") {
  // //   return (
  // //     <Mobile
  // //       topCategories={topCategories}
  // //       logo={logo}
  // //       currentTopCategory={currentTopCategory}
  // //       handleSelectTopCategory={handleSelectTopCategory}
  // //       navPath={navPath}
  // //       setNavPath={setNavPath}
  // //       cartItemsCount={cartItemsCount}
  // //       wishListLineItemsCount={wishListLineItemsCount}
  // //       goToCartPage={goToCartPage}
  // //       goToWishlistPage={goToWishlistPage}
  // //       goToProfilePage={goToProfilePage}
  // //     />
  // //   );
  // // }

  // return (
  //   <Desktop
  //     topCategories={topCategories}
  //     logo={logo}
  //     currentTopCategory={currentTopCategory}
  //     handleSelectTopCategory={handleSelectTopCategory}
  //     navPath={navPath}
  //     onSelectNavItem={handleSelectNavItem}
  //     cartItemsCount={cartItemsCount}
  //     wishListLineItemsCount={wishListLineItemsCount}
  //     goToCartPage={goToCartPage}
  //     goToWishlistPage={goToWishlistPage}
  //     goToProfilePage={goToProfilePage}
  //   />
  // );
  return <p>hello</p>;
};

export default MainMenu;
