import classNames from 'classnames/bind';
import styles from './loading.module.scss';

const cx = classNames.bind(styles);

function Loading() {
   return (
      <div className={cx('ball-roll')}>
         <div className={cx('left')}></div>
         <div className={cx('right')}></div>
      </div>
   );
}

export default Loading;
