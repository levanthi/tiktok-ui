import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import images from '../../assets/images';
import styles from './images.module.scss';

function Images(
   {
      className,
      feedback = images.defaultImage,
      src,
      width = '32px',
      height = '32px',
      ...props
   },
   ref,
) {
   const [_feedback, setFeedback] = useState('');
   return (
      <img
         className={classNames(className, styles.wrapper)}
         src={_feedback || src}
         ref={ref}
         width={width}
         height={height}
         alt="this is icon"
         {...props}
         onError={() => {
            setFeedback(feedback);
         }}
      />
   );
}

export default forwardRef(Images);
