import React from "react";
import PropTypes from "prop-types";
//import app from 'frontastic-catwalk/src/js/app/app'

import Price from "../price";
import Select from "../select";
//import { ReactComponent as CartBin } from "Icons/cart-bin.svg";
function CartBin() {
  return <i />;
}

const Product = ({
  intl,
  itemId,
  image,
  name,
  designer,
  count,
  price,
  color,
  size
}) => {
  const productCounter = Array.from(Array(10).keys()).map(i => {
    return i + 1;
  });

  return (
    <div className="grid grid-cols-120-1xfr grid-rows-auto-1fr sm:grid-cols-120-2xfr sm:grid-rows-1 col-gap-4 row-gap-3">
      <div>
        <img src={image} alt="" />
      </div>

      <div>
        <div className="text-md font-bold leading-tight">{name}</div>

        {designer && (
          <div className="text-sm text-neutral-600 leading-tight">
            {designer}
          </div>
        )}

        {color && (
          <div className="mt-3 text-sm text-neutral-600 leading-tight">
            color {color}
          </div>
        )}

        {size && (
          <div className="text-sm text-neutral-600 leading-tight">
            Size {size}
          </div>
        )}

        <div className="mt-3 w-24">
          <Select
            variant="form-select"
            value={count}
            values={productCounter}
            formatLabel={option => {
              return option;
            }}
            onSelect={console.log}
          />
        </div>

        <div className="mt-3">
          <Price
            variant="text-sm text-neutral-700 font-bold leading-tight"
            value={price}
          />
        </div>
      </div>

      <div>
        <button
          className="flex sm:flex-row-reverse sm:ml-auto items-center justify-center focus:outline-none"
          onClick={console.log}
        >
          <CartBin className="inline-block mx-1" />

          <div className="mx-1 text-sm text-neutral-900 leading-tight">
            Remove
          </div>
        </button>
      </div>
    </div>
  );
};

export default Product;
