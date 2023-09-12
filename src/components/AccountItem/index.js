import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Image from "~/components/Image";
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (  
    <Link to={`/${data.nickname}`} className={cx("wrapper")}>
      <Image className={cx("avatar")} src={data.avatar} alt="avatar" />
      <div className={cx("info")}>
        <span className={cx("name")}>
          <h4>{data.full_name}</h4>
          {data.tick && <BsFillCheckCircleFill className={cx("check")} />}
        </span>
        <span className={cx("username")}>{data.nickname}</span>
      </div>
    </Link>
  );  
}

AccountItem.propTypes = {
  data: PropTypes.object
}

export default AccountItem; 