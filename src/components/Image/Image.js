import { forwardRef, useState } from "react";
import images from "~/assets/images";
import styles from "./Image.module.scss";
import classNames from "classnames/bind";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, fallBack, ...props }, ref) => {
  const [alternative, setAlternative] = useState("");

  const handleError = () => {
    if (!fallBack) {
      setAlternative(images.placeHolder);
    } else {
      setAlternative(fallBack);
    }
  };

  const classes = cx("wrapper", className);

  return (
    <img
      ref={ref}
      src={alternative || src}
      className={classes}
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
});

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallBack: PropTypes.string,
};

export default Image;
