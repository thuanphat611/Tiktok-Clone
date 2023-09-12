import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./DownloadApp.module.scss";
import PropTypes from "prop-types";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import images from "~/assets/images";
import Image from "~/components/Image";
import Button from "~/components/Button";
import { RightArrowIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function DownloadApp({ children, hideOnClick = "false", showModal}) {
  return (
    <Tippy
      offset={[-48, 25]}
      delay={[0, 700]}
      hideOnClick={hideOnClick}
      interactive
      placement="bottom"
      render={(attrs) => (
        <PopperWrapper>
          <div className={cx("wrapper")}>
            <div className={cx("arrow")}></div>
            <Image
              className={cx("image")}
              src={images.downloadApp}
              alt="tải ứng dụng"
            />
            <h3 className={cx("title")}>Ứng dụng TikTok cho máy tính</h3>
            <Button to="/download" className={cx("button")} primary large>
              Tải về
            </Button>
            <div className={cx("mobile-app")} onClick={showModal}>
              <h4>Thay vào đó, tải ứng dụng di động về</h4>
              <RightArrowIcon className={cx("mobile-icon")} />
            </div>
          </div>
        </PopperWrapper>
      )}
    >
      {children}
    </Tippy>
  );
}

DownloadApp.propTypes = {
  children: PropTypes.node.isRequired,
  hideOnClick: PropTypes.bool,
  showModal: PropTypes.func,
};

export default DownloadApp;
