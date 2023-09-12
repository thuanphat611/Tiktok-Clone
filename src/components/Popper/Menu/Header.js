import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { MdOutlineArrowBackIos } from "react-icons/md"
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function Header({ title, onBack }) {
  return (
    <header className={cx("header")}>
      <button className={cx("back-button")} onClick={onBack}> 
        <MdOutlineArrowBackIos />
      </button>
      <h4 className={cx("header-title")}>{title}</h4>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onBack: PropTypes.func,
}

export default Header;
