import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './userItem.module.scss';

const cx = classNames.bind(styles);

function userItem({ user }) {
   return (
      <Link to="/hello" className={cx('user-info')}>
         <img className={cx('avatar')} src={user.avatar} alt={user.name} />
         <div className={cx('info')}>
            <div className={cx('name')}>{user.name}</div>
            <div className={cx('subName')}>{user.subName}</div>
         </div>
      </Link>
   );
}

export default userItem;
