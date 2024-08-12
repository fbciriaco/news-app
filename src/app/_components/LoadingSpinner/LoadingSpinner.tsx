import { FC } from "react";
import PropTypes from "prop-types";

type LoadingSpinnerProps = {
  color?: string;
  customClasses?: string;
  size?: string;
};

const LoadingSpinner: FC<LoadingSpinnerProps> = ({
  color = "black",
  customClasses = "",
  size = "1rem",
}) => {
  const colorStyles =
    color === "black"
      ? "border-black border-r-transparent"
      : "border-gray-100 border-r-transparent";

  return (
    <div
      data-testid="LoadingSpinner"
      className={`text-primary inline-block animate-spin rounded-full border-2 border-solid align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] ${colorStyles} ${customClasses}`}
      role="status"
      style={{ height: size, width: size }}
    />
  );
};

LoadingSpinner.propTypes = {
  color: PropTypes.string,
  customClasses: PropTypes.string,
  size: PropTypes.string,
};

export default LoadingSpinner;
