import PropTypes from "prop-types";

import LoadingSpinner from "./LoadingSpinner";

const WrappedLoadingSpinner = ({
  color = "black",
  customClasses = "",
  size = "1.5rem",
}) => {
  return (
    <div className="flex w-full items-center justify-center py-[20px] flex-1">
      <LoadingSpinner color={color} customClasses={customClasses} size={size} />
    </div>
  );
};

WrappedLoadingSpinner.propTypes = {
  color: PropTypes.string,
  customClasses: PropTypes.string,
  size: PropTypes.string,
};

export default WrappedLoadingSpinner;
