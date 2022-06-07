import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import SearchResultUser from '../SearchResultUser';
import images from '../../../assets/images';
import styles from './sidebar.module.scss';

const cx = classNames.bind(styles);
function SideBar() {
   const userList = [
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
   const [isSuggestUserLimit, setIsSuggestUserLimit] = useState(true);
   function handleViewChange() {
      setIsSuggestUserLimit((preState) => !preState);
   }
   return (
      <aside>
         <div className={cx('sidebar')}>
            <div className={cx('main-container')}>
               <div>
                  <Link to="/">
                     <img src={images.home} alt="home icon" />
                     <h2>Dành cho bạn</h2>
                  </Link>
               </div>
               <div>
                  <Link to="/">
                     <img src={images.people} alt="people icon" />
                     <h2>Đang Follow</h2>
                  </Link>
               </div>
               <div>
                  <Link to="/">
                     <img src={images.liveStream} alt="livestream icon" />
                     <h2>LIVE</h2>
                  </Link>
               </div>
            </div>
            <div className={cx('login-group')}>
               <p className={cx('login-text')}>
                  Đăng nhập để follow các tác giả, thích video và xem bình luận.
               </p>
               <button className={cx('login')}>Đăng Nhập</button>
            </div>
            <div className={cx('suggest-user')}>
               <p className={cx('title')}>Tài khoản được đề xuất</p>
               <div className={cx('user-list')}>
                  {/* {userList.map((user, index) => {
                     return (
                        <div className={cx('user-item')}>
                           <SearchResultUser user={user} />
                        </div>
                     );
                  })} */}
                  {(() => {
                     const result = [];
                     for (var i = 0; i < userList.length; i++) {
                        if (i === 5 && isSuggestUserLimit) break;
                        result.push(
                           <div key={i} className={cx('user-item')}>
                              <SearchResultUser user={userList[i]} />
                           </div>,
                        );
                     }
                     return result;
                  })()}
               </div>
               <button className={cx('view-change')} onClick={handleViewChange}>
                  {isSuggestUserLimit ? 'Xem tất cả' : 'Ẩn bớt'}
               </button>
            </div>
         </div>
      </aside>
   );
}

export default SideBar;