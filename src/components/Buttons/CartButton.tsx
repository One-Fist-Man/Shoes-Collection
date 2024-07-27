import React from "react";

const CartButton = ({iconType}:{iconType:string}) => {
  return (
    <div>
      {" "}
      <button className="active:scale-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 12 12"
          className={`${iconType} inline transition-all duration-300 w-3 text-black`}
        >
          <path
            d="M11.0003 6.83341H6.83366V11.0001C6.83366 11.4584 6.45866 11.8334 6.00033 11.8334C5.54199 11.8334 5.16699 11.4584 5.16699 11.0001V6.83341H1.00033C0.541992 6.83341 0.166992 6.45841 0.166992 6.00008C0.166992 5.54175 0.541992 5.16675 1.00033 5.16675H5.16699V1.00008C5.16699 0.541748 5.54199 0.166748 6.00033 0.166748C6.45866 0.166748 6.83366 0.541748 6.83366 1.00008V5.16675H11.0003C11.4587 5.16675 11.8337 5.54175 11.8337 6.00008C11.8337 6.45841 11.4587 6.83341 11.0003 6.83341Z"
            fill="currentColor"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default CartButton;
