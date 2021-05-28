import React from "react";
// import { injectIntl, intlShape } from "react-intl";

import IconButton from "../icon-button";
import Badge from "../badge";

import { ReactComponent as CartIcon } from "../../icons/tailwind-icons/icon-cart.svg";
import { ReactComponent as WishlistIcon } from "../../icons/tailwind-icons/icon-heart.svg";
import { ReactComponent as SearchIcon } from "../../icons/tailwind-icons/icon-search.svg";
import { ReactComponent as MyProfile } from "../../icons/tailwind-icons/icon-user.svg";

// import SearchForm from "./SearchForm";

const IconNavigation = ({
  intl,
  variant = "",
  cartItemsCount,
  goToCartPage,
  wishListLineItemsCount,
  goToWishlistPage,
  goToProfilePage,
  onSearchToggle,
  showSearch = false
}) => {
  return (
    <div className={`flex justify-end text-2xl items-center ${variant}`}>
      <IconButton
        name={"header.myAccount"}
        variant="hidden lg:block ml-6 outline-none focus:outline-none"
        icon={<MyProfile />}
        onClick={goToProfilePage}
      />

      <Badge count={wishListLineItemsCount} onClick={goToWishlistPage}>
        <IconButton
          name={"header.wishlist"}
          variant="ml-6 outline-none focus:outline-none"
          icon={<WishlistIcon />}
        />
      </Badge>

      <Badge count={cartItemsCount} onClick={goToCartPage}>
        <IconButton
          name={"header.cart"}
          variant="ml-6 outline-none focus:outline-none"
          icon={<CartIcon />}
        />
      </Badge>
    </div>
  );
};

export default IconNavigation;
