import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import Wrapper from '../Wrapper';
import MenuItem from './MenuItem';
import styles from '../popper.module.scss';

const cx = classNames.bind(styles);

const Menu = ({ children, items = [] }) => {
   return (
      <Tippy
         visible
         interactive
         placement="bottom-end"
         delay={[0, 600]}
         render={(attrs) => (
            <div className="menu" tabIndex="-1" {...attrs}>
               <Wrapper>
                  {items.map((item, index) => {
                     return <MenuItem key={index} {...item} />;
                  })}
               </Wrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
};

export default Menu;
