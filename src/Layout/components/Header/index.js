import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faEllipsisVertical,
   faMagnifyingGlass,
   faPlus,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import TippyHeadless from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { Wrapper as WrapperPopper } from '../../../components/Popper';
import { LogoTiktok, SendIcon, InboxIcon } from '../../../components/Icons';
import Images from '../../../components/Images';
import Authentication from '../../../components/Authentication';
import Button from '../../../components/Button';
import UserItem from '../UserItem';
import images from '../../../assets/images';
import styles from './header.module.scss';
import Menu from '../../../components/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS_NOT_LOGIN = [
   {
      icon: images.ASquare,
      title: 'Tiếng Việt',
      children: {
         title: 'Language',
         data: [
            { code: 'en', title: 'Tiếng Việt' },
            { code: 'vi', title: 'English' },
         ],
      },
   },
   {
      icon: images.questionCircle,
      title: 'Phản hồi và trợ giúp',
      to: '/feedback',
   },
   { icon: images.keyboardCircle, title: 'Phím tắt trên bàn phím' },
];
const MENU_ITEMS_HAD_LOGIN = [
   {
      icon: images.defaultAvatar,
      title: 'Xem hồ sơ',
      to: '/profile',
   },
   {
      icon: images.tiktokCoin,
      title: 'Nhận xu',
      to: '/coin',
   },
   {
      icon: images.setting,
      title: 'Cài đặt',
      to: '/setting',
   },
   {
      icon: images.ASquare,
      title: 'Tiếng Việt',
      children: {
         title: 'Language',
         data: [
            { code: 'en', title: 'Tiếng Việt' },
            { code: 'vi', title: 'English' },
         ],
      },
   },
   {
      icon: images.questionCircle,
      title: 'Phản hồi và trợ giúp',
      to: '/feedback',
   },
   { icon: images.keyboardCircle, title: 'Phím tắt trên bàn phím' },
   {
      icon: images.logout,
      title: 'Đăng xuất',
      to: '/logout',
      separate: true,
   },
];

const data = [
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTztaK6yUwjUgyXSghQGzn2j-AKrrXG8NCZmQ&usqp=CAU',
      name: 'Thi',
      subName: 'Lê Văn Thi',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_H5ydGJva-V_E_4yDOjsOH7Z73FABr2hNrA&usqp=CAU',
      name: 'Học',
      subName: 'Nguyễn Văn Học',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQy0ebOGHpegqWDc-9OotL7lQ8uPopmS25uw&usqp=CAU',
      name: 'Thủy',
      subName: 'Đàm Bích Thủy',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTztaK6yUwjUgyXSghQGzn2j-AKrrXG8NCZmQ&usqp=CAU',
      name: 'Thi',
      subName: 'Lê Văn Thi',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_H5ydGJva-V_E_4yDOjsOH7Z73FABr2hNrA&usqp=CAU',
      name: 'Học',
      subName: 'Nguyễn Văn Học',
   },
   {
      avatar:
         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQy0ebOGHpegqWDc-9OotL7lQ8uPopmS25uw&usqp=CAU',
      name: 'Thủy',
      subName: 'Đàm Bích Thủy',
   },
];

function Header() {
   const isLogin = true;
   const [searchResult, setSearchResult] = useState([]);
   const [searchInput, setSearchInput] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [isShowAuthenPopup, setIsShowAuthenPopup] = useState(false);

   const searchTimerIdRef = useRef();
   const searchRef = useRef();
   const searchWrapRef = useRef();
   const searchResultRef = useRef();

   function handleSearchFocus() {
      searchWrapRef.current.style.border = '1px solid #a6a7ac';
      searchResultRef.current.style.display = 'block';
   }
   function handleSearchBlur() {
      searchWrapRef.current.style.border = '1px solid transparent';
      searchResultRef.current.style.display = 'none';
   }
   function handleClear() {
      setSearchInput('');
      setSearchResult([]);
      searchRef.current.focus();
   }
   useEffect(() => {
      if (!searchTimerIdRef.current) {
         searchTimerIdRef.current = 99;
      } else {
         clearTimeout(searchTimerIdRef.current);
         searchTimerIdRef.current = setTimeout(() => {
            console.log('hello');
            setIsLoading(true);
            if (searchInput) {
               setTimeout(() => {
                  const result = data.filter((item) => {
                     return item.name
                        .toLowerCase()
                        .includes(searchInput.toLowerCase());
                  });
                  setIsLoading(false);
                  setSearchResult(result);
               }, 500);
            } else {
               setSearchResult([]);
               setIsLoading(false);
            }
         }, 350);
      }
   }, [searchInput]);
   return (
      <header>
         {isShowAuthenPopup && <Authentication close={setIsShowAuthenPopup} />}
         <div className={cx('wrapper')}>
            <div className={cx('inner')}>
               <Link to="/" className={cx('logo')}>
                  <LogoTiktok />
               </Link>

               <div>
                  <TippyHeadless
                     // visible
                     interactive
                     placement="bottom-end"
                     render={(attrs) => (
                        <div
                           ref={searchResultRef}
                           className={cx('search-result')}
                           tabIndex="-1"
                           {...attrs}
                        >
                           {searchResult.length > 0 && (
                              <WrapperPopper>
                                 {searchResult.map((user, index) => {
                                    return (
                                       <div
                                          key={index}
                                          className={cx('result-item')}
                                       >
                                          <UserItem user={user} />
                                       </div>
                                    );
                                 })}
                              </WrapperPopper>
                           )}
                        </div>
                     )}
                  >
                     <div className={cx('search-wrap')} ref={searchWrapRef}>
                        <div className={cx('inner-search')}>
                           <input
                              ref={searchRef}
                              value={searchInput}
                              spellCheck={false}
                              placeholder="Tìm kiếm tài khoản và video"
                              onFocus={handleSearchFocus}
                              onBlur={handleSearchBlur}
                              onChange={(e) => setSearchInput(e.target.value)}
                           />
                           <button
                              className={cx('clear-loading', {
                                 loading: isLoading,
                              })}
                           >
                              {isLoading && (
                                 <span>
                                    <FontAwesomeIcon icon={faSpinner} />
                                 </span>
                              )}
                              {!isLoading && searchInput !== '' && (
                                 <span onClick={handleClear}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                 </span>
                              )}
                           </button>
                        </div>
                        <button className={cx('search')}>
                           <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                     </div>
                  </TippyHeadless>
               </div>

               <div className={cx('actions', { 'had-login': isLogin })}>
                  {!isLogin ? (
                     <>
                        <Button classic>
                           <FontAwesomeIcon icon={faPlus} />
                           <span
                              onClick={() => {
                                 setIsShowAuthenPopup(true);
                              }}
                              className={cx('ml-s')}
                           >
                              Tải lên
                           </span>
                        </Button>
                        <Button
                           onClick={() => {
                              setIsShowAuthenPopup(true);
                           }}
                           primary
                        >
                           Đăng nhập
                        </Button>
                        <div className={cx('options')}>
                           <Menu items={MENU_ITEMS_NOT_LOGIN}>
                              <button className={cx('options-btn')}>
                                 <FontAwesomeIcon icon={faEllipsisVertical} />
                              </button>
                           </Menu>
                        </div>
                     </>
                  ) : (
                     <>
                        <Button classic>
                           <FontAwesomeIcon icon={faPlus} />
                           <span className={cx('ml-s')}>Tải lên</span>
                        </Button>
                        <Tippy delay={[0, 200]} content="Tin Nhắn" interactive>
                           <div className={cx('send-icon-container')}>
                              <SendIcon />
                           </div>
                        </Tippy>
                        <Tippy content="Hộp thư" interactive>
                           <div className={cx('inbox-icon-container')}>
                              <InboxIcon />
                           </div>
                        </Tippy>
                        <Menu
                           className={cx('ml-0')}
                           items={MENU_ITEMS_HAD_LOGIN}
                        >
                           <Images
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTidCZGuRI6nf8C2GN9cYC1R_HRspzbaEWPDA&usqp=CAU"
                              alt="avatar"
                              className={cx('mr-l-m')}
                           />
                        </Menu>
                     </>
                  )}
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
