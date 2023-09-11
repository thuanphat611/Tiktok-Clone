import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Image from "~/components/Image";

const cx = classNames.bind(styles);
const avatar = 'https://khoinguonsangtao.vn/wp-content/uploads/2022/07/avatar-tiktok-nam-chibi.jpg'

function AccountItem() {
  return (  
    <div className={cx("wrapper")}>
      <Image className={cx("avatar")} src={avatar} alt="avatar" />
      <div className={cx("info")}>
        <span className={cx("name")}>
          <h4>Nguyen Van A</h4>
          <BsFillCheckCircleFill className={cx("check")} />
        </span>
        <span className={cx("username")}>@nguyenVanA</span>
      </div>
    </div>
  );  
}

export default AccountItem; 