import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import config from "~/config";
import Menu, { MenuItem } from "./Menu"
import { HomeIconOutline, HomeIconSolid, PeopleIconOutline, PeopleIconSolid, CompassIconOutline, CompassIconSolid, LiveIconOutline, LiveIconSolid } from "~/components/Icons";
import SuggestedAccounts from "~/components/SuggestedAccounts";

const cx = classNames.bind(styles);

function Sidebar() {
  return ( 
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="Dành cho bạn" to={config.routes.root} icon={<HomeIconOutline />} activeIcon={<HomeIconSolid />} ></MenuItem>
        <MenuItem title="Đang Follow" to={config.routes.following} icon={<PeopleIconOutline />} activeIcon={<PeopleIconSolid />} ></MenuItem>
        <MenuItem title="Khám phá" to={config.routes.explore} icon={<CompassIconOutline />} activeIcon={<CompassIconSolid />} ></MenuItem>
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIconOutline />} activeIcon={<LiveIconSolid />} ></MenuItem>
      </Menu>

      <SuggestedAccounts label="Các tài khoản đang follow" />
    </aside>
  );
}

export default Sidebar;