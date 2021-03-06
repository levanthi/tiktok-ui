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
      video: 'https://firebasestorage.googleapis.com/v0/b/tiktok-db-clone.appspot.com/o/short-video%2Fshort1.mp4?alt=media&token=cb439e71-dd9f-4e88-8b51-62572a978cc8',
   },
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzqEt4lxvcGmZ3s4f6Hmnf6Kz2wQx_IU-Bw&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://firebasestorage.googleapis.com/v0/b/tiktok-db-clone.appspot.com/o/short-video%2Fshort2.mp4?alt=media&token=f267c6f9-7fb9-4d50-aac1-8debce20f328',
   },
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUonESUhczX3IrXOBWtl1dg-CM7RfGTaxWQ&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://firebasestorage.googleapis.com/v0/b/tiktok-db-clone.appspot.com/o/short-video%2Fshort3.mp4?alt=media&token=b46170f4-d0eb-4b49-822f-eac5c8cd2c68',
   },
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7n04VtQ93f1Wf81s0pxWxYZGq5ItFWAfHow&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://firebasestorage.googleapis.com/v0/b/tiktok-db-clone.appspot.com/o/short-video%2Fshort1.mp4?alt=media&token=cb439e71-dd9f-4e88-8b51-62572a978cc8',
   },
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2N70v1QpM2tj3zWv0sn6u8dPnBwgI5gNC8A&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://firebasestorage.googleapis.com/v0/b/tiktok-db-clone.appspot.com/o/short-video%2Fshort3.mp4?alt=media&token=b46170f4-d0eb-4b49-822f-eac5c8cd2c68',
   },
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTztaK6yUwjUgyXSghQGzn2j-AKrrXG8NCZmQ&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://firebasestorage.googleapis.com/v0/b/tiktok-db-clone.appspot.com/o/short-video%2Fshort1.mp4?alt=media&token=cb439e71-dd9f-4e88-8b51-62572a978cc8',
   },
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFzqEt4lxvcGmZ3s4f6Hmnf6Kz2wQx_IU-Bw&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://firebasestorage.googleapis.com/v0/b/tiktok-db-clone.appspot.com/o/short-video%2Fshort2.mp4?alt=media&token=f267c6f9-7fb9-4d50-aac1-8debce20f328',
   },
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoUonESUhczX3IrXOBWtl1dg-CM7RfGTaxWQ&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://firebasestorage.googleapis.com/v0/b/tiktok-db-clone.appspot.com/o/short-video%2Fshort1.mp4?alt=media&token=cb439e71-dd9f-4e88-8b51-62572a978cc8',
   },
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7n04VtQ93f1Wf81s0pxWxYZGq5ItFWAfHow&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://firebasestorage.googleapis.com/v0/b/tiktok-db-clone.appspot.com/o/short-video%2Fshort3.mp4?alt=media&token=b46170f4-d0eb-4b49-822f-eac5c8cd2c68',
   },
   {
      icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2N70v1QpM2tj3zWv0sn6u8dPnBwgI5gNC8A&usqp=CAU',
      name: 'Thaomishinh1',
      subNam: 'thao mi sính',
      videoTitle: 'đi Hà Nội',
      hearts: '899.1k',
      comments: '2970',
      shares: '1097',
      video: 'https://firebasestorage.googleapis.com/v0/b/tiktok-db-clone.appspot.com/o/short-video%2Fshort1.mp4?alt=media&token=cb439e71-dd9f-4e88-8b51-62572a978cc8',
   },
];

function Home() {
   const [isLoading, setIsLoading] = useState(false);
   const [videos, setVideos] = useState(data.slice(0, 2));
   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

   const currentVideoRef = useRef();
   const preVideo = useRef([]);
   const scrollElementRef = useRef();

   useEffect(() => {
      const handleScroll = () => {
         //scroll to load
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
               window.addEventListener('scroll', handleScroll);
            }, 1000);
            window.removeEventListener('scroll', handleScroll);
         }
         //scroll to play
         let videoIndex = Math.round((window.scrollY - 80) / 611);
         setCurrentVideoIndex((preState) => {
            if (preState !== videoIndex) {
               return videoIndex;
            }
            return preState;
         });
      };
      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);
   useEffect(() => {
      preVideo.current.unshift(currentVideoRef.current);
      currentVideoRef.current.play();
      return () => {
         const preVideoRef = preVideo.current.pop();
         preVideoRef.pause();
      };
   }, [currentVideoIndex]);
   return (
      <div ref={scrollElementRef} className={cx('wrapper')}>
         {videos.map((video, i) => {
            return (
               <VideoItem
                  key={i}
                  index={i}
                  data={video}
                  ref={i === currentVideoIndex ? currentVideoRef : null}
               />
            );
         })}
         {isLoading && <Loading />}
      </div>
   );
}

export default Home;
