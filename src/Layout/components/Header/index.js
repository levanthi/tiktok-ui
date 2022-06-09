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
   // faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as WrapperPopper } from '../../../components/Popper';
import Button from '../../../components/Button';
import SearchResultUser from '../SearchResultUser';
import images from '../../../assets/images';
import styles from './header.module.scss';
import Menu from '../../../components/Popper/Menu';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
   { icon: images.ASquare, value: 'Tiếng Việt' },
   {
      icon: images.questionCircle,
      value: 'Phản hồi và trợ giúp',
      to: '/feedback',
   },
   { icon: images.keyboardCircle, value: 'Phím tắt trến bàn phím' },
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
   const [searchResult, setSearchResult] = useState([]);
   const [searchInput, setSearchInput] = useState('');
   const [isLoading, setIsLoading] = useState(false);

   const searchRef = useRef();
   const searchWrapRef = useRef();
   const searchResultRef = useRef();
   const optionsTimerId = useRef([]);

   function handleSearchFocus() {
      searchWrapRef.current.style.border = '1px solid #a6a7ac';
      searchResultRef.current.style.display = 'block';
   }
   function handleSearchBlur() {
      setTimeout(() => {
         searchWrapRef.current.style.border = 'none';
         searchResultRef.current.style.display = 'none';
      }, 100);
   }
   function handleClear() {
      setSearchInput('');
      searchRef.current.focus();
   }
   useEffect(() => {
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
   }, [searchInput]);

   return (
      <header>
         <div className={cx('wrapper')}>
            <div className={cx('inner')}>
               <Link to="/" className={cx('logo')}>
                  <img src={images.logo} alt="logo" />
               </Link>
               <div>
                  <Tippy
                     visible
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
                                          <SearchResultUser user={user} />
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
                  </Tippy>
               </div>

               <div className={cx('actions')}>
                  <Button classic>
                     <FontAwesomeIcon icon={faPlus} />
                     <span className={cx('ml-s')}>Tải lên</span>
                  </Button>
                  <Button primary>Đăng nhập</Button>
                  <div
                     className={cx('options')}
                     onMouseEnter={() => {
                        // optionsTimerId.current.forEach((id) => {
                        //    clearTimeout(id);
                        // });
                        // const detailElement = document.querySelector(
                        //    `.${styles.detail}`,
                        // );
                        // detailElement.style.display = 'block';
                        // detailElement.style.opacity = 1;
                        // detailElement.style.transition = 'none';
                     }}
                     onMouseLeave={() => {
                        const detailElement = document.querySelector(
                           `.${styles.detail}`,
                        );
                        if (detailElement) {
                           optionsTimerId.current[0] = setTimeout(() => {
                              detailElement.style.transition = 'opacity .4s';
                              detailElement.style.opacity = 0;
                           }, 600);
                           optionsTimerId.current[1] = setTimeout(() => {
                              detailElement.style.display = 'none';
                           }, 1000);
                        }
                     }}
                  >
                     <Menu items={MENU_ITEMS}>
                        <button className={cx('options-btn')}>
                           <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                     </Menu>
                     {/* <div className={cx('detail')}>
                        <Link to={''}>
                           <img src={images.ASquare} alt="language icon" />
                           <span>Tiếng Việt</span>
                        </Link>
                        <Link to={''}>
                           <img
                              src={images.questionCircle}
                              alt="question icon"
                           />
                           <span>Phản hồi và trợ giúp</span>
                        </Link>
                        <Link to={''}>
                           <img
                              src={images.keyboardCircle}
                              alt="keyboard icon"
                           />
                           <span>Phím tắt trên bàn phím</span>
                        </Link>
                     </div> */}
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}

export default Header;
