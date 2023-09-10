import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "~/assets/images";
import { Wrapper as PopperWrapper, Menu } from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import Button from "~/components/Button";

import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';

//icons
import { BiSearch, BiMoon, BiMessageAltMinus } from "react-icons/bi";
import {
  AiOutlineLoading3Quarters,
  AiOutlinePlus,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { MdCancel, MdDevices } from "react-icons/md";
import { BsThreeDotsVertical, BsGearWide } from "react-icons/bs";
import { IoLanguageOutline, IoBulbOutline } from "react-icons/io5";
import { CgKeyboard } from "react-icons/cg";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { RxPerson } from "react-icons/rx";
import { FiBookmark, FiLogIn } from "react-icons/fi";
import { TbCoin } from "react-icons/tb";

import { useState, useEffect } from "react";

const avatar = "https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
const cx = classNames.bind(styles);
const MENU_ITEMS = [
  {
    icon: <IoBulbOutline />,
    title: "Trung tâm Nhà sáng tạo LIVE",
  },
  {
    icon: <IoLanguageOutline />,
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
    icon: <AiOutlineQuestionCircle />,
    title: "Phản hồi và trợ giúp",
    to: "/feedback",
  },
  {
    icon: <CgKeyboard />,
    title: "Phím tắt trên bàn phím",
  },
  {
    icon: <BiMoon />,
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
      icon: <RxPerson />,
      title: "Xem hồ sơ"
    },
    {
      icon: <FiBookmark />,
      title: "Yêu thích"
    },
    {
      icon: <TbCoin />,
      title: "Nhận xu"
    },
    {
      icon: <BsGearWide />,
      title: "Cài đặt"
    },
    ...MENU_ITEMS,
    {
      icon: <FiLogIn />,
      title: "Đăng xuất",
      separate: true
    },
  ]

  return (
    <header className={cx("wrapper")}>
      <div className={cx("content")}>
        <div className={cx("logo")}>
          <img src={images.logo} alt="Tiktok" />
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
              <MdCancel />
            </button>
            <AiOutlineLoading3Quarters className={cx("loading")} />
            <button className={cx("search-button")}>
              <BiSearch />
            </button>
          </div>
        </HeadlessTippy>

        <div className={cx("actions")}>
          <Button blackOutline leftIcon={<AiOutlinePlus />}>
            Tải lên
          </Button>
          {currentUser ? (
            <>
              <button className={cx("devices-button")}>
                <MdDevices />
              </button>
              <Tippy delay={[0, 200]} placement="bottom" content="Tin nhắn">
                <button className={cx("message-button")}>
                  <PiPaperPlaneTiltBold />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} placement="bottom" content="Hộp thư">
                <button className={cx("mailbox-button")}>
                  <BiMessageAltMinus />
                </button>
              </Tippy>
              <div className={cx("current-user")}></div>
            </>
          ) : (
            <>
              <Button primary to="/login">
                Đăng nhập
              </Button>
              <button className={cx("devices-button")}>
                <MdDevices />
              </button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleOnChange}>
            {currentUser ? (
              <img className={cx("user-avatar")} src={avatar} alt="avatar" />
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
