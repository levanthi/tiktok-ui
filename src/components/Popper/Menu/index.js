import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Wrapper from '../Wrapper';
import { useRef, useState } from 'react';
import MenuItem from './MenuItem';
import styles from '../popper.module.scss';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const Menu = ({ children, items = [] }) => {
   const menuRef = useRef();
   const timerId = useRef();
   const [history, setHistory] = useState([{ data: items }]);
   const current = history[history.length - 1];
   const renderItems = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory([...history, item.children]);
                  } else {
                  }
               }}
            />
         );
      });
   };
   return (
      <Tippy
         // visible
         interactive
         placement="bottom-end"
         delay={[0, 900]}
         render={(attrs) => (
            <div
               ref={menuRef}
               className={cx('menu', 'trans-left-s')}
               tabIndex="-1"
               {...attrs}
               onMouseOver={() => {
                  clearTimeout(timerId.current);
                  menuRef.current.animate({});
               }}
               onMouseOut={() => {
                  const appear = [{ opacity: 1 }, { opacity: 0 }];
                  const duration = {
                     duration: 300,
                  };
                  timerId.current = setTimeout(() => {
                     menuRef.current.animate(appear, duration);
                  }, 600);
               }}
            >
               <Wrapper>
                  {history.length > 1 && (
                     <div className={cx('title')}>
                        <FontAwesomeIcon
                           className={cx('chevron-left')}
                           icon={faChevronLeft}
                           onClick={() => {
                              setHistory((prev) =>
                                 prev.slice(0, prev.length - 1),
                              );
                           }}
                        />
                        <h4>Language</h4>
                     </div>
                  )}
                  {renderItems()}
               </Wrapper>
            </div>
         )}
         onHidden={(e) => {
            setHistory((pre) => pre.slice(0, 1));
         }}
      >
         {children}
      </Tippy>
   );
};

export default Menu;
