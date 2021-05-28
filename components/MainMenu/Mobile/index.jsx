import React, { useState, useRef } from "react";
import PropTypes from "prop-types";

import MediaImage from "@frontastic/catwalk/src/js/mediaImage";
import FullPageWidthWrapper from "../../../molecules/Layout/FullPageWidthWrapper";

import Modal from "./Modal";
import IconNavigation from "../IconNavigation";

import { ReactComponent as MenuOpen } from "../../../../../icons/tailwind-icons/icon-menu-open.svg";

import { categoryTreeType, topCategoryType } from "../types";
import { useLevel } from "../mainMenuState";

const Mobile = ({
  topCategories,
  logo,
  currentTopCategory,
  handleSelectTopCategory,
  navPath,
  setNavPath,
  cartItemsCount,
  goToCartPage,
  wishListLineItemsCount,
  goToWishlistPage,
  goToProfilePage
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [level, setLevel] = useLevel(0);

  const ref = useRef(null);

  /* eslint-disable arrow-body-style */
  const handleSearchToggle = () => setIsSearch(!isSearch);

  if (!topCategories) {
    return null;
  }

  return (
    <>
      <FullPageWidthWrapper className="shadow-md">
        <div className="grid grid-cols-2 h-12 max-w-1240px m-center px-5">
          <div className="flex h-12">
            {/* extra h-12 is dirty but for some reason it wouldn't budge */}
            <MenuOpen
              className="self-center cursor-pointer text-2xl"
              onClick={() => {
                setIsOpen(true);
              }}
            />
            <a
              className="self-center max-w-124px w-full ml-3"
              ref={ref}
              href={window.location.origin}
            >
              <MediaImage media={logo} />
            </a>
          </div>
          <IconNavigation
            cartItemsCount={cartItemsCount}
            goToCartPage={goToCartPage}
            wishListLineItemsCount={wishListLineItemsCount}
            goToWishlistPage={goToWishlistPage}
            goToProfilePage={goToProfilePage}
            onSearchToggle={handleSearchToggle}
          />
        </div>
      </FullPageWidthWrapper>

      <Modal
        isOpen={isOpen}
        level={level}
        navPath={navPath}
        topCategories={topCategories}
        currentTopCategory={currentTopCategory}
        handleSelectTopCategory={categoryId => {
          setLevel(0);
          handleSelectTopCategory(categoryId);
        }}
        handleSelectNavItem={(item, toLevel) => {
          setLevel(toLevel + 1);
          setNavPath([...navPath, item]);
        }}
        handleGoBack={() => {
          setLevel(level - 1);
          setNavPath(navPath.slice(0, -1));
        }}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
};

Mobile.propTypes = {
  topCategories: PropTypes.arrayOf(topCategoryType),
  logo: PropTypes.object,
  currentTopCategory: PropTypes.number.isRequired,
  handleSelectTopCategory: PropTypes.func.isRequired,
  navPath: PropTypes.arrayOf(categoryTreeType),
  setNavPath: PropTypes.func.isRequired,
  cartItemsCount: PropTypes.number,
  goToCartPage: PropTypes.func,
  wishListLineItemsCount: PropTypes.number,
  goToWishlistPage: PropTypes.func,
  goToProfilePage: PropTypes.func
};

Mobile.defaultProps = {
  cardItemsCount: 0,
  wishListLineItemsCount: 0
};

export default Mobile;
