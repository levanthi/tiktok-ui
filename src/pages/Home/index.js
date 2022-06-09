import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './home.module.scss';
import Button from '../../components/Button';
import images from '../../assets/images';
import { useRef, useState } from 'react';

const cx = classNames.bind(styles);
function convertSecondToMinute(second) {
   let result = '';
   let m = Math.floor(second / 60);
   let s = Math.floor(second % 60);
   result += m > 9 ? m : '0' + m;
   result += ':';
   result += s > 9 ? s : '0' + s;
   return result;
}

function Home() {
   const [isPlay, setIsPlay] = useState(false);
   const [videoDuration, setVideoDuration] = useState();
   const [isMuted, setIsMuted] = useState(false);

   const videoProcessRef = useRef(0);
   const videoRangeRef = useRef();
   const videoRef = useRef();
   const volumeProcessRef = useRef();
   const volumeRangeRef = useRef();
   const currentTimeRef = useRef();

   function handleVideoProcess(e) {
      videoProcessRef.current.style.width = e.target.value + '%';
      videoRef.current.currentTime =
         (e.target.value * videoRef.current.duration) / 100;
   }
   function handlePlayPause() {
      if (isPlay) {
         videoRef.current.pause();
         setIsPlay(false);
      } else {
         videoRef.current.play();
         setIsPlay(true);
      }
   }
   function handleTimeUpdate() {
      if (currentTimeRef.current) {
         currentTimeRef.current.innerText = convertSecondToMinute(
            videoRef.current.currentTime,
         );
      }
      if (videoRangeRef.current) {
         videoRangeRef.current.value = Math.floor(
            (videoRef.current.currentTime / videoRef.current.duration) * 100,
         );
         videoProcessRef.current.style.width =
            videoRangeRef.current.value + '%';
      }
   }
   function handleVolumeChange(e) {
      let volume = +e.target.value;
      volumeProcessRef.current.style.width = volume + '%';
      videoRef.current.volume = volume / 100;
      localStorage.setItem('tiktok', JSON.stringify({ volume: volume / 100 }));
      setIsMuted(!volume);
   }
   function handleVideoLoaded() {
      setVideoDuration(videoRef.current.duration);
      let volume = JSON.parse(localStorage.getItem('tiktok')) || {};
      volume = +(volume.volume === undefined ? 1 : volume.volume);
      volumeRangeRef.current.value = volume * 100;
      volumeProcessRef.current.style.width = volume * 100 + '%';
      setIsMuted(!volume);
   }
   function handleMuted() {
      if (+volumeRangeRef.current.value > 0) {
         let setting = JSON.parse(localStorage.getItem('tiktok')) || {};
         volumeRangeRef.current.value = 0;
         volumeProcessRef.current.style.width = 0 + '%';
         videoRef.current.volume = 0;
         localStorage.setItem(
            'tiktok',
            JSON.stringify({ ...setting, isMuted: true }),
         );
         setIsMuted(true);
      } else {
         let setting = JSON.parse(localStorage.getItem('tiktok')) || {};
         volumeRangeRef.current.value = setting.volume * 100 || 100;
         volumeProcessRef.current.style.width =
            (setting.volume || 1) * 100 + '%';
         videoRef.current.volume = setting.volume || 1;
         localStorage.setItem(
            'tiktok',
            JSON.stringify({ ...setting, isMuted: false }),
         );
         setIsMuted(false);
      }
   }
   return (
      <div className={cx('home')}>
         <div className={cx('video-item')}>
            <div className={cx('info-group')}>
               <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTztaK6yUwjUgyXSghQGzn2j-AKrrXG8NCZmQ&usqp=CAU"
                  alt="avatar"
               />
               <div className={cx('info')}>
                  <div className={cx('name-group')}>
                     <Link to="/" className={cx('name')}>
                        Thaomishinh2
                     </Link>
                     <span className={cx('sub-name')}>thao mi sính</span>
                     <p className={cx('video-title')}>đi Hà Nội</p>
                  </div>
               </div>
               <div className={cx('follow')}>
                  <Button outline small>
                     Follow
                  </Button>
               </div>
            </div>
            <div className={cx('short-video')}>
               <div className={cx('video-wrap')}>
                  <div className={cx('action')}>
                     <button>
                        <img src={images.heart} />
                     </button>
                     <span>899.1k</span>
                     <button>
                        <img src={images.comment} />
                     </button>
                     <span>2970</span>
                     <button>
                        <img src={images.share} />
                     </button>
                     <span>1097</span>
                  </div>
                  <video
                     src="https://v16-webapp.tiktok.com/376d355090cddc0622dacefe1e98716f/62a2231a/video/tos/alisg/tos-alisg-pve-0037/c246eb5d14e142e390001d7eeb889825/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=2852&bt=1426&btag=80000&cs=0&ds=3&ft=eXd.6Hk_Myq8ZDLvawe2N3Kfml7Gb&mime_type=video_mp4&qs=0&rc=NmY2O2U1PGdoOjY7Ojc4aUBpM2p3eTo6Zm45OzMzODgzNEBfLy41MDU1NmAxMzY0NmAyYSMvNGIwcjRnX2xgLS1kLy1zcw%3D%3D&l=202206091042310102450050981100A6A8"
                     ref={videoRef}
                     onTimeUpdate={handleTimeUpdate}
                     onClick={handlePlayPause}
                     onLoadedData={handleVideoLoaded}
                  />
                  <div className={cx('video-controls')}>
                     <div className={cx('report')}>
                        <img src={images.report} />
                        <span>Báo cáo</span>
                     </div>
                     <div className={cx('control')}>
                        <div className={cx('group')}>
                           <img
                              className={cx('pause-play')}
                              src={isPlay ? images.play : images.pause}
                              alt="pause/play icon"
                              onClick={handlePlayPause}
                           />
                           <div className={cx('volume-group')}>
                              <img
                                 className={cx('speaker')}
                                 src={isMuted ? images.muted : images.speaker}
                                 alt="speaker icon"
                                 onClick={handleMuted}
                              />
                              <div className={cx('volume-process-wrap')}>
                                 <div className={cx('size')}>
                                    <input
                                       ref={volumeRangeRef}
                                       type="range"
                                       className={cx('volume-range')}
                                       onChange={handleVolumeChange}
                                    />
                                    <span
                                       ref={volumeProcessRef}
                                       className={cx('volume-process')}
                                    ></span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className={cx('group')}>
                           <div className={cx('range-wrapper')}>
                              <input
                                 className={cx('process-range')}
                                 type="range"
                                 onChange={handleVideoProcess}
                                 ref={videoRangeRef}
                              />
                              <div
                                 ref={videoProcessRef}
                                 className={cx('process')}
                              ></div>
                           </div>
                           <span className={cx('timer')}>
                              <span
                                 ref={currentTimeRef}
                                 className={cx('current')}
                              >
                                 00:00
                              </span>
                              /
                              <span className={cx('end')}>
                                 {convertSecondToMinute(videoDuration)}
                              </span>
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
