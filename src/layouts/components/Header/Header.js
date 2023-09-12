//library
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom"

//component
import images from "~/assets/images";
import Search from "~/layouts/components/Search";
import { Menu } from "~/components/Popper";
import Button from "~/components/Button";
import Image from "~/components/Image";
import { useEffect } from "react";
import routes from "~/config/route";

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
  PlusIcon,
} from "~/components/Icons";
import { BsThreeDotsVertical } from "react-icons/bs";


const avatar =
  "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg";
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
  useEffect(() => {}, []);

  // const handleOnChange = (item) => {
  //   console.log(item);
  // };

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
        <Link to={routes.root} className={cx("logo")}>
          <Image src={images.logo} alt="Tiktok" />
        </Link>

        <span>
          <Search />
        </span>

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
              <Button primary to={routes.login}>
                Đăng nhập
              </Button>
              <button className={cx("devices-button")}>
                <DeviceIcon />
              </button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            // onChange={handleOnChange}
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
