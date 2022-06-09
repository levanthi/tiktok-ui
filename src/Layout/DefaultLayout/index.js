import classNames from 'classnames/bind';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import styles from './defaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
   return (
      <div className={cx('layout')}>
         <Header />
         <div className={cx('container')}>
            <SideBar />
            <div className={cx('content')}>{children}</div>
         </div>
         <button className={cx('download')}>Tải ứng dụng</button>
      </div>
   );
}

export default DefaultLayout;
