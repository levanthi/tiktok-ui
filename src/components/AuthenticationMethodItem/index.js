import classNames from 'classnames/bind';
import styles from './authenticationMethodItem.module.scss';

const cx = classNames.bind(styles);

function AuthenticationMethodItem({ title, icon }) {
   return (
      <div className={cx('method-item')}>
         <img src={icon} alt="authen method item" />
         <div className={cx('content')}>
            <span>{title}</span>
         </div>
      </div>
   );
}

export default AuthenticationMethodItem;
