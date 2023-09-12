import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
  className,
  to,
  href,
  disabled,
  primary,
  outline,
  blackOutline,
  round,
  small,
  large,
  children,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick: onClick,
    ...passProps,
  };

  //remove event listeners when disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", {
    [className]: className,
    disabled,
    primary,
    outline,
    blackOutline,
    round,
    small,
    large,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('left-icon')}>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className={cx('right-icon')}>{rightIcon}</span>}
    </Comp>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  disabled: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  blackOutline: PropTypes.bool,
  round: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
}

export default Button;