import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

//component modal cùi bắp tự code @@@
function Modal({ children, trigger, center = false}) {
  const classes = cx("overlay", {
    center
  })
  
  console.log("re-render");

  return (
    <>
      {trigger ?
      (<div className={classes}>
        {children}
      </div>)
      : null}
    </>
  );
}

Modal.propTypes = {
  children: PropTypes.node,
  trigger: PropTypes.bool.isRequired,
  center: PropTypes.bool,
}

export default Modal;