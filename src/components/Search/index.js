import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import HeadlessTippy from "@tippyjs/react/headless";
import { SearchIcon, CancelIcon, LoadingIcon } from "~/components/Icons";
import { useState, useRef, useEffect } from "react";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();

  function handleClear() {
    setSearchValue("");
    setSearchResults([]);
    inputRef.current.focus();
  }

  function handleHideResults() {
    setShowResults(false);
  }

  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResults([]);
      return;
    }

    setLoading(true);

    fetch(
      `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`
    )
      .then((res) => res.json())
      .then((res) => {
          setSearchResults(res.data);
          setLoading(false)
      })
      .catch(() =>{
        setLoading(false);
      })
  }, [searchValue]);

  return (
    <HeadlessTippy
      interactive
      visible={searchResults.length > 0 && showResults}
      render={(attrs) => (
        <div className={cx("search-results")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Tài khoản</h4>
            {searchResults.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
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
        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handleClear}>
            <CancelIcon fill="rgba(22, 24, 35, .34)" />
          </button>
        )}
        {loading && <LoadingIcon fill="rgba(22, 24, 35, .34)" className={cx("loading")} />}
        <button className={cx("search-button")}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
