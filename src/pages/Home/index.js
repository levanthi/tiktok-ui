import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import VideoItem from '../../components/VideoItem';
import Loading from '../../components/Loading';
import styles from './home.module.scss';

const cx = classNames.bind(styles);

let data = [
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
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzqEt4lxvcGmZ3s4f6Hmnf6Kz2wQx_IU-Bw&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://v16-webapp.tiktok.com/5ea632864b893693adae1f31c191426d/62a3629e/video/tos/maliva/tos-maliva-ve-0068c799-us/03a76b07dde540978d8ae1cee5e48a77/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1760&bt=880&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZO~Hawe2NdcQml7Gb&mime_type=video_mp4&qs=0&rc=aDNkOzs3MzkzN2Y0N2ZoPEBpM2xzdjk6Zjd0PDMzZzczNEBjNTI2XmE2XmExYWA2LzAuYSNvZi9ucjRvazBgLS1kMS9zcw%3D%3D&l=202206100925450102450340150F114F2F',
   },
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUonESUhczX3IrXOBWtl1dg-CM7RfGTaxWQ&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://v16-webapp.tiktok.com/83d3f69313ef59ea252f5b851539e612/62a37fa5/video/tos/alisg/tos-alisg-pve-0037/3b1e4a0b964146d8860464941a2cf505/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3482&bt=1741&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZrqEawe2NlfBml7Gb&mime_type=video_mp4&qs=0&rc=PGZmNDlpOzU6N2Q2Mzw0aUBpM250bmQ6Zml0PDMzODgzNEBjYzEtLl4yNmIxNl5eXmJhYSNpcl9wcjQwcW9gLS1kLy1zcw%3D%3D&l=20220610112915010245242104190F6C75',
   },
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7n04VtQ93f1Wf81s0pxWxYZGq5ItFWAfHow&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://v16-webapp.tiktok.com/0d6c42f84ed740cf08e49baec265ebd5/62a36289/video/tos/useast2a/tos-useast2a-ve-0068c004/3c020cc308524db0b8f6352dffa18cb2/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3246&bt=1623&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZO~Hawe2NdcQml7Gb&mime_type=video_mp4&qs=0&rc=NjRoZzo1N2Y0Ozg4ZmhlOEBpM2h4b2c6Zm14OzMzNzczM0BgYC0wNS40Xl8xMTUtL2BiYSNeYTMzcjRvMHJgLS1kMTZzcw%3D%3D&l=202206100925450102450340150F114F2F',
   },
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2N70v1QpM2tj3zWv0sn6u8dPnBwgI5gNC8A&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://v16-webapp.tiktok.com/473fe288715c725bcca1806b96d189d3/62a362b3/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/7a94377346cd4c2b8d52801bbcf8ad1c/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2292&bt=1146&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZO~Hawe2NdcQml7Gb&mime_type=video_mp4&qs=0&rc=N2c3ODU8NDpnOWkzN2k0NUBpM2hnbzs6Zjw0PDMzZjgzM0BjLV4xXzYuX14xLWExY2A0YSMzazNncjRnaDVgLS1kL2Nzcw%3D%3D&l=202206100925450102450340150F114F2F',
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
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzqEt4lxvcGmZ3s4f6Hmnf6Kz2wQx_IU-Bw&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://v16-webapp.tiktok.com/5ea632864b893693adae1f31c191426d/62a3629e/video/tos/maliva/tos-maliva-ve-0068c799-us/03a76b07dde540978d8ae1cee5e48a77/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1760&bt=880&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZO~Hawe2NdcQml7Gb&mime_type=video_mp4&qs=0&rc=aDNkOzs3MzkzN2Y0N2ZoPEBpM2xzdjk6Zjd0PDMzZzczNEBjNTI2XmE2XmExYWA2LzAuYSNvZi9ucjRvazBgLS1kMS9zcw%3D%3D&l=202206100925450102450340150F114F2F',
   },
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUonESUhczX3IrXOBWtl1dg-CM7RfGTaxWQ&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://v16-webapp.tiktok.com/ea8a8074f08a3569723cc2195a78c54c/62a362b1/video/tos/useast2a/tos-useast2a-pve-0037-aiso/efce0aa606bf462a84bb591513bef0c0/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2622&bt=1311&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZO~Hawe2NdcQml7Gb&mime_type=video_mp4&qs=0&rc=ODdpaWU2NzU1PDw1aGVmNkBpMzY8djs6ZjRqPDMzZjgzM0BiM2FiLl8tNTIxYmAzLjZfYSNwYy0tcjRfbWZgLS1kL2Nzcw%3D%3D&l=202206100925450102450340150F114F2F',
   },
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7n04VtQ93f1Wf81s0pxWxYZGq5ItFWAfHow&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://v16-webapp.tiktok.com/0d6c42f84ed740cf08e49baec265ebd5/62a36289/video/tos/useast2a/tos-useast2a-ve-0068c004/3c020cc308524db0b8f6352dffa18cb2/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=3246&bt=1623&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZO~Hawe2NdcQml7Gb&mime_type=video_mp4&qs=0&rc=NjRoZzo1N2Y0Ozg4ZmhlOEBpM2h4b2c6Zm14OzMzNzczM0BgYC0wNS40Xl8xMTUtL2BiYSNeYTMzcjRvMHJgLS1kMTZzcw%3D%3D&l=202206100925450102450340150F114F2F',
   },
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2N70v1QpM2tj3zWv0sn6u8dPnBwgI5gNC8A&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://v16-webapp.tiktok.com/473fe288715c725bcca1806b96d189d3/62a362b3/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/7a94377346cd4c2b8d52801bbcf8ad1c/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2292&bt=1146&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZO~Hawe2NdcQml7Gb&mime_type=video_mp4&qs=0&rc=N2c3ODU8NDpnOWkzN2k0NUBpM2hnbzs6Zjw0PDMzZjgzM0BjLV4xXzYuX14xLWExY2A0YSMzazNncjRnaDVgLS1kL2Nzcw%3D%3D&l=202206100925450102450340150F114F2F',
   },
];

function Home() {
   const scrollElementRef = useRef();
   const [videos, setVideos] = useState(data.slice(0, 2));
   const [isLoading, setIsLoading] = useState(false);
   useEffect(() => {
      const handleScroll = () => {
         if (
            window.innerHeight -
               scrollElementRef.current.getBoundingClientRect().top >=
            scrollElementRef.current.offsetHeight
         ) {
            setIsLoading(true);
            setTimeout(() => {
               data.push(data[0]);
               data.push(data[1]);
               setVideos((pre) => [...pre, data.shift(), data.shift()]);
               setIsLoading(false);
            }, 1000);
         }
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);

   return (
      <div ref={scrollElementRef} className={cx('home')}>
         {videos.map((video, i) => {
            return <VideoItem key={i} data={video} />;
         })}
         {isLoading && <Loading />}
      </div>
   );
}

export default Home;
