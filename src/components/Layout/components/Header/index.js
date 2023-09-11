//library
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";

//component
import { Wrapper as PopperWrapper, Menu } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";
import Image from "~/components/Image";

import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

//icons
import {
  DeviceIcon,
  MessageIcon,
  MailboxIcon,
  ProfileIcon,
  BookmarkIcon,
  CoinIcon,
  BulbIcon,
  GearIcon,
  LanguageIcon,
  HelpIcon,
  KeyboardIcon,
  MoonIcon,
  LogOutIcon,
  SearchIcon,
  CancelIcon,
  LoadingIcon,
  PlusIcon,
} from "~/components/Icons";
import { BsThreeDotsVertical } from "react-icons/bs";

import { useState, useEffect } from "react";

const avatar =
  "https://haycafe.vn/wp-content/uploads/2021/11/Ah-avatar-dep-chat-lam-hinh-dai-dien.jpg";
const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <BulbIcon />,
    title: "Trung tâm Nhà sáng tạo LIVE",
  },
  {
    icon: <LanguageIcon />,
    title: "Tiếng Việt",
    children: {
      title: "Ngôn ngữ",
      list: [
        {
          title: "English",
          code: "en",
          type: "language",
        },
        {
          title: "Tiếng Việt",
          code: "vi",
          type: "language",
        },
        {
          title: "Deutsch",
          code: "de",
          type: "language",
        },
        {
          title: "Français",
          code: "fr",
          type: "language",
        },
        {
          title: "Italiano",
          code: "it",
          type: "language",
        },
      ],
    },
  },
  {
    icon: <HelpIcon />,
    title: "Phản hồi và trợ giúp",
    to: "/feedback",
  },
  {
    icon: <KeyboardIcon />,
    title: "Phím tắt trên bàn phím",
  },
  {
    icon: <MoonIcon />,
    title: "Chế độ tối",
  },
];

function Header() {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {}, []);

  const handleOnChange = (item) => {
    console.log(item);
  };

  const currentUser = true;
  const userMenu = [
    {
      icon: <ProfileIcon />,
      title: "Xem hồ sơ",
    },
    {
      icon: <BookmarkIcon />,
      title: "Yêu thích",
    },
    {
      icon: <CoinIcon />,
      title: "Nhận xu",
    },
    {
      icon: <GearIcon />,
      title: "Cài đặt",
    },
    ...MENU_ITEMS,
    {
      icon: <LogOutIcon />,
      title: "Đăng xuất",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("logo")}>
          <Image src={images.logo} alt="Tiktok" />
        </div>

        <HeadlessTippy
          interactive
          visible={searchResults.length > 0}
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
        >
          <div className={cx("search")}>
            <input type="text" placeholder="Tìm kiếm" spellCheck={false} />
            <button className={cx("clear")}>
              <CancelIcon fill="rgba(22, 24, 35, .34)" />
            </button>
            <LoadingIcon fill="rgba(22, 24, 35, .34)" className={cx("loading")} />
            <button className={cx("search-button")}>
              <SearchIcon fill="rgba(22, 24, 35, .75)" />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx("actions")}>
          <Button blackOutline leftIcon={<PlusIcon />}>
            Tải lên
          </Button>
          {currentUser ? (
            <>
              <button className={cx("devices-button")}>
                <DeviceIcon />
              </button>
              <Tippy delay={[0, 200]} placement="bottom" content="Tin nhắn">
                <button className={cx("message-button")}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} placement="bottom" content="Hộp thư">
                <button className={cx("mailbox-button")}>
                  <MailboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary to="/login">
                Đăng nhập
              </Button>
              <button className={cx("devices-button")}>
                <DeviceIcon />
              </button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleOnChange}
          >
            {currentUser ? (
              <Image className={cx("user-avatar")} src={avatar} alt="avatar" />
            ) : (
              <button className={cx("more-button")}>
                <BsThreeDotsVertical />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
