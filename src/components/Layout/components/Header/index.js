import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";

//icons
import { BiSearch } from "react-icons/bi";
import { AiOutlineLoading3Quarters, AiOutlinePlus } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

import { useState, useEffect } from "react";

const cx = classNames.bind(styles);

function Header() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {

  },[])

  return (
    <header className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
        </div>

        <Tippy
          interactive
          visible={searchResults.length > 0}
          render={(attrs) => (
            <div className={cx("search-results")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>
                  Tài khoản 
                </h4>

                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input type="text" placeholder="Tìm kiếm" spellCheck={false} />
            <button className={cx("clear")}>
              <MdCancel />
            </button>
            <AiOutlineLoading3Quarters className={cx("loading")} />
            <button className={cx("search-button")}>
              <BiSearch />
            </button>
          </div>
        </Tippy>

        <div className={cx("actions")}>
          <Button blackOutline leftIcon={<AiOutlinePlus />}>Tải lên</Button>
          <Button primary>Đăng nhập</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
