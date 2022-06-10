import classNames from 'classnames/bind';
import Button from '../../../Button';
import styles from '../../popper.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
   return (
      <div className={cx('menu-item')} onClick={onClick}>
         <Button to={data.to} href={data.href}>
            {data.icon && <img src={data.icon} alt="icon" />}
            <span>{data.title}</span>
         </Button>
      </div>
   );
}

export default MenuItem;
