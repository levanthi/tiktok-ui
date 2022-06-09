import classNames from 'classnames/bind';
import styles from './footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
   const introduce = [
      { value: 'Giới thiệu', url: 'https://www.tiktok.com/about?lang=vi-VN' },
      { value: 'Bảng tin', url: 'https://newsroom.tiktok.com/?lang=vi-VN' },
      {
         value: 'Liên hệ',
         url: 'https://www.tiktok.com/about/contact?lang=vi-VN',
      },
      { value: 'Sự nghiệp', url: 'https://careers.tiktok.com/?lang=vi-VN' },
      { value: 'ByteDance', url: 'https://www.bytedance.com/?lang=vi-VN' },
   ];
   const tikTok = [
      {
         value: 'TikTok for Good',
         url: 'https://www.tiktok.com/forgood?lang=vi-VN',
      },
      {
         value: 'Quảng cáo',
         url: 'https://www.tiktok.com/business/?attr_medium=tt_official_site_guidance&attr_source=tt_official_site&lang=vi-VN&refer=tiktok_web',
      },
      {
         value: 'Developers',
         url: 'https://developers.tiktok.com/?lang=vi-VN&refer=tiktok_web',
      },
      {
         value: 'Transparency',
         url: 'https://www.tiktok.com/transparency?lang=vi-VN',
      },
      {
         value: 'TikTok Rewards',
         url: 'https://www.tiktok.com/tiktok-rewards/vi-VN?lang=vi-VN',
      },
   ];
   const policy = [
      { value: 'Trợ giúp', url: 'https://support.tiktok.com/vi-VN?lang=vi-VN' },
      { value: 'An toàn', url: 'https://www.tiktok.com/safety?lang=vi-VN' },
      {
         value: 'Điều khoản',
         url: 'https://www.tiktok.com/legal/terms-of-service?lang=vi-VN',
      },
      {
         value: 'Creator Portal',
         url: 'https://www.tiktok.com/creators/creator-portal/en-us/?lang=vi-VN',
      },
      {
         value: 'Hướng dẫn Cộng đồng',
         url: 'https://www.tiktok.com/community-guidelines?lang=vi-VN',
      },
   ];
   return (
      <div className={cx('footer')}>
         <div className={cx('group')}>
            {introduce.map((item, index) => {
               return (
                  <a
                     key={index}
                     rel="noreferrer"
                     target="_blank"
                     href={item.url}
                  >
                     {item.value}
                  </a>
               );
            })}
         </div>
         <div className={cx('group')}>
            {tikTok.map((item, index) => {
               return (
                  <a
                     key={index}
                     rel="noreferrer"
                     target="_blank"
                     href={item.url}
                  >
                     {item.value}
                  </a>
               );
            })}
         </div>
         <div className={cx('group')}>
            {policy.map((item, index) => {
               return (
                  <a
                     key={index}
                     rel="noreferrer"
                     target="_blank"
                     href={item.url}
                  >
                     {item.value}
                  </a>
               );
            })}
         </div>
      </div>
   );
}

export default Footer;
