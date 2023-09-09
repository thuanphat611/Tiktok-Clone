import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { BiSearch } from "react-icons/bi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

const cx = classNames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok"/>
        </div>

        <div className={cx("search")}>
          <input type="text" placeholder="Tìm kiếm" spellCheck={false} />
          <button className={cx("clear")}>
            <MdCancel />
          </button>
          <AiOutlineLoading3Quarters className={cx("loading")}/>
          <button className={cx("search-button")}>
            <BiSearch />
          </button>
        </div>

        <div className={cx("actions")}>

        </div>
      </div>
    </header>
  );
}

export default Header;
