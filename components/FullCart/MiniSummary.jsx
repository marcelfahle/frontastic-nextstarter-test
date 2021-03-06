import React from "react";
import PropTypes from "prop-types";
//import ComponentInjector from "frontastic-catwalk/src/js/app/injector";

import LoaderButton from "../Loaders/LoaderButton/index";
import Price from "../price";
import Button from "../button";

const MiniSummary = ({ sum, label, onClick, isLoading }) => {
  return (
    <div className="p-4 grid grid-cols-2 grid-rows-2">
      <div className="text-md text-neutral-900 font-bold leading-tight">
        My Cart
      </div>

      <Price
        variant="text-md text-right sm:text-left text-neutral-900 leading-normal"
        value={sum}
      />

      <div className="col-start-1 col-end-3 sm:row-start-1 sm:row-end-3 sm:col-start-2">
        <div className="flex items-center">
          <Button
            name={label}
            variant="btn btn-primary w-full h-10"
            onClick={onClick}
            disabled={isLoading}
          >
            {isLoading ? <LoaderButton /> : label}
          </Button>
        </div>
      </div>
    </div>
  );
};

MiniSummary.propTypes = {
  sum: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default MiniSummary;
