import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import HeadlessTippy from "@tippyjs/react/headless";
import { SearchIcon, CancelIcon, LoadingIcon } from "~/components/Icons";
import { useState, useRef } from "react";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([1]);
  const [showResults, setShowResults] = useState(true);
  const inputRef = useRef();

  function handleClear() {
    setSearchValue("");
    setSearchResults([]);
    inputRef.current.focus();
  }

  function handleHideResults() {
    setShowResults(false);
  }

  return (
    <HeadlessTippy
      interactive
      visible={searchResults.length > 0 && showResults}
      render={(attrs) => (
        <div className={cx("search-results")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Tài khoản</h4>

            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResults}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          type="text"
          placeholder="Tìm kiếm"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => {
            setShowResults(true);
          }}
        />
        {!!searchValue && (
          <button className={cx("clear")} onClick={handleClear}>
            <CancelIcon fill="rgba(22, 24, 35, .34)" />
          </button>
        )}
        {/* <LoadingIcon fill="rgba(22, 24, 35, .34)" className={cx("loading")} /> */}
        <button className={cx("search-button")}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
