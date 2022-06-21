import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import images from '../../assets/images';
import AuthenticationMethodItem from '../AuthenticationMethodItem';
import styles from './authentication.module.scss';

const cx = classNames.bind(styles);
const authenMethods = [
   { title: 'Sử dụng mã QR', icon: images.qr },
   {
      title: 'Số điện thoại / Email ? TikTok ID',
      icon: images.defaultAvatar,
      isSignUp: true,
   },
   {
      title: 'Tiếp tục với Facebook',
      icon: images.facebook,
      isSignUp: true,
   },
   {
      title: 'Tiếp tục với Google',
      icon: images.google,
      isSignUp: true,
   },
   {
      title: 'Tiếp tục với Twitter',
      icon: images.twitter,
      isSignUp: true,
   },
   {
      title: 'Tiếp tục với LINE',
      icon: images.line,
      isSignUp: true,
   },
   {
      title: 'Tiếp tục với KakaoTalk',
      icon: images.kakaoTalk,
      isSignUp: true,
   },
   {
      title: 'Tiếp tục với Apple',
      icon: images.apple,
   },
   {
      title: 'Tiếp tục với Instagram',
      icon: images.instagram,
   },
];
function Authentication({ close }) {
   const [showMethods, setShowMethods] = useState([]);
   const [isSignIn, setIsSignIn] = useState(true);

   const containerRef = useRef();
   const wrapperRef = useRef();
   const dropDownRef = useRef();

   useEffect(() => {
      setTimeout(() => {
         containerRef.current.style.transform = 'scale(1)';
         containerRef.current.style.opacity = '1';
         wrapperRef.current.style.opacity = '1';
      }, 0);
      setShowMethods(authenMethods);
   }, []);

   return (
      <div ref={wrapperRef} className={cx('wrapper')}>
         <div ref={containerRef} className={cx('container')}>
            <div className={cx('header')}>
               <div
                  onClick={() => {
                     containerRef.current.style.transform = 'scale(0)';
                     containerRef.current.style.opacity = '0';
                     wrapperRef.current.style.opacity = '0';
                     setTimeout(() => {
                        close((pre) => !pre);
                     }, 300);
                  }}
                  className={cx('close-wrapper')}
               >
                  <img
                     className={cx('close-icon')}
                     src={images.close}
                     alt="close icon"
                  />
               </div>
            </div>
            <div className={cx('body')}>
               <div className={cx('title')}>
                  Đăng {isSignIn ? 'nhập vào' : 'ký'} TikTok
               </div>
               {showMethods.map((showMethod, index) => {
                  return (
                     <AuthenticationMethodItem
                        key={index}
                        title={showMethod.title}
                        icon={showMethod.icon}
                     />
                  );
               })}
               {!isSignIn && (
                  <div
                     ref={dropDownRef}
                     className={cx('drop-down')}
                     onClick={(e) => {
                        dropDownRef.current.style.display = 'none';
                        setShowMethods(
                           authenMethods.filter((authenMethod) => {
                              return authenMethod.isSignUp;
                           }),
                        );
                     }}
                  >
                     <img src={images.arrowDown} alt="arrow down" />
                  </div>
               )}
            </div>
            {!isSignIn && (
               <div className={cx('policy')}>
                  Bằng cách tiếp tục, bạn đồng ý với{' '}
                  <a
                     href="https://www.tiktok.com/legal/terms-of-service?lang=vi"
                     target={'_blank'}
                     rel="noreferrer"
                  >
                     Điều khoản Sử dụng
                  </a>{' '}
                  của TikTok và xác nhận rằng bạn đã đọc hiểu{' '}
                  <a
                     href="https://www.tiktok.com/legal/privacy-policy-row?lang=vi"
                     target={'_blank'}
                     rel="noreferrer"
                  >
                     Chính sách Quyền riêng tư
                  </a>{' '}
                  của TikTok.
               </div>
            )}
            <div className={cx('footer')}>
               <span>
                  Bạn {!isSignIn ? 'đã' : 'không'} có tài khoản?{' '}
                  <button
                     onClick={() => {
                        setIsSignIn((pre) => !pre);
                        if (!isSignIn) {
                           setShowMethods(authenMethods);
                        } else {
                           const _showMethods = [];
                           let count = 0;
                           for (var i = 0; i < showMethods.length; i++) {
                              if (count >= 3) break;
                              if (showMethods[i].isSignUp) {
                                 _showMethods.push(showMethods[i]);
                                 count++;
                              }
                           }
                           setShowMethods(_showMethods);
                        }
                     }}
                  >
                     {!isSignIn ? 'Đăng nhập' : 'Đăng ký'}
                  </button>
               </span>
            </div>
         </div>
      </div>
   );
}

export default Authentication;
