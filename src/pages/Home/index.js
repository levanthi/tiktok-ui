import classNames from 'classnames/bind';
import { useEffect, useRef } from 'react';
import VideoItem from '../../components/VideoItem';
import styles from './home.module.scss';

const cx = classNames.bind(styles);

function Home() {
   const scrollElementRef = useRef();
   useEffect(() => {
      const handleScroll = () => {
         console.log('Window height:' + window.innerHeight);
         console.log('current height:' + scrollElementRef.current.offsetHeight);
         console.log(
            'scroll top:' +
               -scrollElementRef.current.getBoundingClientRect().top,
         );
      };
      window.addEventListener('scroll', handleScroll);
   }, []);
   let videos = [
      {
         icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTztaK6yUwjUgyXSghQGzn2j-AKrrXG8NCZmQ&usqp=CAU',
         name: 'Thaomishinh1',
         subNam: 'thao mi sính',
         videoTitle: 'đi Hà Nội',
         hearts: '899.1k',
         comments: '2970',
         shares: '1097',
         video: 'https://v16-webapp.tiktok.com/5be8adf2c63e92737c7bcd6945ca1c2b/62a362ad/video/tos/useast2a/tos-useast2a-pve-0037-aiso/519434bbb49a4003bdfc4a3ca1bc9dc5/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=7938&bt=3969&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZO~Hawe2NdcQml7Gb&mime_type=video_mp4&qs=0&rc=ZTZpNjZpPGRkZTszOWRlaEBpamc5NGQ6ZjtmPDMzZjgzM0BgYzIzXy4vNTAxYC9jLmJhYSM2cmU0cjRfaGZgLS1kL2Nzcw%3D%3D&l=202206100925450102450340150F114F2F',
      },
      {
         icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTztaK6yUwjUgyXSghQGzn2j-AKrrXG8NCZmQ&usqp=CAU',
         name: 'Thaomishinh1',
         subNam: 'thao mi sính',
         videoTitle: 'đi Hà Nội',
         hearts: '899.1k',
         comments: '2970',
         shares: '1097',
         video: 'https://v16-webapp.tiktok.com/5be8adf2c63e92737c7bcd6945ca1c2b/62a362ad/video/tos/useast2a/tos-useast2a-pve-0037-aiso/519434bbb49a4003bdfc4a3ca1bc9dc5/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=7938&bt=3969&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZO~Hawe2NdcQml7Gb&mime_type=video_mp4&qs=0&rc=ZTZpNjZpPGRkZTszOWRlaEBpamc5NGQ6ZjtmPDMzZjgzM0BgYzIzXy4vNTAxYC9jLmJhYSM2cmU0cjRfaGZgLS1kL2Nzcw%3D%3D&l=202206100925450102450340150F114F2F',
      },
   ];
   return (
      <div ref={scrollElementRef} className={cx('home')}>
         {videos.map((video, i) => {
            return <VideoItem key={i} data={video} />;
         })}
      </div>
   );
}

export default Home;
