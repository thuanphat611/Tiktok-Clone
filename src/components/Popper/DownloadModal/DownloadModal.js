import classNames from "classnames/bind";
import styles from "./DownloadModal.module.scss";
import PropTypes from "prop-types";
import Image from "~/components/Image";
import { CloseIcon } from "~/components/Icons";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function DownloadModal({ toggleModal }) {
  return (
    <div className={cx("modal-content")}>
    <div className={cx("modal-header")}>
      <h3>Tải ứng dụng TikTok</h3>
      <CloseIcon
        className={cx("modal-close")}
        onClick={toggleModal}
      />
    </div>
    <div className={cx("modal-body")}>
      <h3 className={cx("modal-text")}>
        Hãy quét mã QR để tải TikTok về máy
      </h3>
      <Image className={cx("modal-QR")} src={images.downloadQR} />
      <div className={cx("modal-wrapper")}>
        <h3 className={cx("modal-text")}>Tải về từ cửa hàng ứng dụng</h3>
        <div className={cx("modal-stores")}>
          <a rel="nofollow noopener noreferrer" target="_blank" href="https://www.microsoft.com/store/apps/9NH2GPH4JZS4">
            <Image
              className={cx("modal-microsoft")}
              src={images.dl_microsoft}
            />
          </a>
          <a rel="nofollow noopener noreferrer" target="_blank" href="https://apps.apple.com/MY/app/id1235601864?mt=8">
            <Image
              className={cx("modal-appStore")}
              src={images.dl_appStore}
            />
          </a>
          <a rel="nofollow noopener noreferrer" target="_blank" href="https://www.amazon.com/dp/B07KR1RJL2/">
            <Image
              className={cx("modal-amazon")}
              src={images.dl_amazon}
            />
          </a>
          <a rel="nofollow noopener noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.ss.android.ugc.trill&referrer=af_tranid%3DM7Sj5UqgZc0wHsOvnuGdrA">
            <Image
              className={cx("modal-ggplay")}
              src={images.dl_ggplay}
            />
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}

DownloadModal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
}

export default DownloadModal;