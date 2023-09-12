import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import MenuItem from "./MenuItem";
import Header from "~/components/Popper/Menu/Header";
import { useState } from "react";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);
const defaultFunction = () => {};

function Menu({
  children,
  hideOnClick = "false",
  items = [],
  onChange = defaultFunction,
}) {
  const [history, setHistory] = useState([{ list: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.list.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          data={item}
          key={index}
          onclick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      offset={[10, 10]}
      delay={[0, 700]}
      hideOnClick={hideOnClick}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx("menu-body")}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => { //đưa về menu đầu tiên khi tippy bị ẩn đi
        setHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
