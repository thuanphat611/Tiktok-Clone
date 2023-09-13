import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import PropTypes from "prop-types";
import Image from "../Image";
import { BsFillCheckCircleFill } from "react-icons/bs";

const cx = classNames.bind(styles);

function AccountItem() {
  const avatar =
    "https://toigingiuvedep.vn/wp-content/uploads/2022/04/hinh-avatar-tiktok-hoodie-dang-yeu.jpg";

  return (
    <div className={cx("account-item")}>
      <Image src={avatar} alt="avatar" className={cx("avatar")} />
      <div className={cx("info")}>
        <span className={cx("username-wrapper")}>
          <p className={cx("username")}>usernameasdasdsdasdasddasdasadsad</p>
          <BsFillCheckCircleFill className={cx("check")} />
        </span>
        <p className={cx("nickname")}>nickname</p>
      </div>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
