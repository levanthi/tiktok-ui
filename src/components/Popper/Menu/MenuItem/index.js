import classNames from 'classnames/bind';
import Button from '../../../Button';
import styles from '../../popper.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ ...props }) {
   return (
      <div className={cx('menu-item')}>
         {props.icon && <img src={props.icon} alt="icon" />}
         <Button to={props.to} href={props.href}>
            {props.value}
         </Button>
      </div>
   );
}

export default MenuItem;
