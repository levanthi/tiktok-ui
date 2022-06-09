import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

function Button({
   children,
   small,
   large,
   href,
   to,
   primary,
   outline,
   classic,
   onClick,
   transparent,
   ...rest
}) {
   let Comp = 'button';
   const props = {};
   if (to) {
      Comp = Link;
      props.to = to;
   } else if (href) {
      Comp = 'a';
      props.href = href;
   }

   return (
      <Comp
         className={cx('wrapper', {
            small,
            medium: !small && !large,
            large,
            primary,
            outline,
            classic,
            transparent,
         })}
         {...props}
         {...rest}
      >
         {children}
      </Comp>
   );
}

export default Button;
