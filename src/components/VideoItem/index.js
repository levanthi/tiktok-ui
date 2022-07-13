import {
   useRef,
   useState,
   forwardRef,
   useImperativeHandle,
   useEffect,
   memo,
} from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import { useSelector, useDispatch } from 'react-redux';

import styles from './videoItem.module.scss';
import Button from '../../components/Button';
import images from '../../assets/images';
import { volumeSelector, isMutedSelector } from '../../redux/selectors';
import volumeSlice from '../../redux/volumeSlice';

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

function VideoItem({ data, index }, ref) {
   const dispatch = useDispatch();
   const volume = useSelector(volumeSelector);
   const isMuted = useSelector(isMutedSelector);

   const [isPlay, setIsPlay] = useState(false);
   const [videoDuration, setVideoDuration] = useState();

   const videoProcessRef = useRef();
   const videoRangeRef = useRef(0);
   const videoRef = useRef();
   const volumeProcessRef = useRef();
   const volumeRangeRef = useRef();
   const currentTimeRef = useRef();
   const isVideoLoaded = useRef(false);

   useEffect(() => {
      handleVideoLoaded();
   }, [volume]);

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
         videoRangeRef.current.value =
            Math.floor(
               (videoRef.current.currentTime / videoRef.current.duration) * 100,
            ) || 0;
         videoProcessRef.current.style.width =
            videoRangeRef.current.value + '%';
      }
   }
   function handleVolumeChange(e) {
      let volume = +e.target.value;
      volumeProcessRef.current.style.width = volume + '%';
      videoRef.current.volume = volume / 100;
      dispatch(volumeSlice.actions.volumeChange(volume / 100));
   }
   function handleVideoLoaded() {
      volumeRangeRef.current.value = volume * 100;
      volumeProcessRef.current.style.width = volume * 100 + '%';
      videoRef.current.volume = volume;
      isVideoLoaded.current = true;
      setVideoDuration(videoRef.current.duration);
      if (isMuted) {
         videoRef.current.volume = 0;
         volumeProcessRef.current.style.width = '0%';
         volumeRangeRef.current.value = 0;
      }
   }
   function handleMuted() {
      if (+volumeRangeRef.current.value > 0) {
         volumeRangeRef.current.value = 0;
         volumeProcessRef.current.style.width = '0%';
         videoRef.current.volume = 0;
      } else {
         volumeRangeRef.current.value = volume * 100 || 50;
         volumeProcessRef.current.style.width = (volume * 100 || 50) + '%';
         videoRef.current.volume = 0.5;
      }
      dispatch(volumeSlice.actions.mutedToggle());
   }
   useImperativeHandle(ref, () => {
      if (!ref) return undefined;
      return {
         play: () => {
            videoRef.current?.play();
         },
         pause: () => {
            videoRef.current?.pause();
         },
         video: videoRef.current,
      };
   });
   return (
      <div className={cx('video-item')}>
         <div className={cx('info-group')}>
            <img src={data.icon} alt="avatar" />
            <div className={cx('info')}>
               <div className={cx('name-group')}>
                  <Link to="/" className={cx('name')}>
                     {data.name}
                  </Link>
                  <span className={cx('sub-name')}>{data.subName}</span>
                  <p className={cx('video-title')}>{data.videoTitle}</p>
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
               {isVideoLoaded.current && (
                  <div className={cx('action')}>
                     <button>
                        <img src={images.heart} alt="heart icon" />
                     </button>
                     <span>{data.hearts}</span>
                     <button>
                        <img src={images.comment} alt="comment icon" />
                     </button>
                     <span>{data.comments}</span>
                     <button>
                        <img src={images.share} alt="share icon" />
                     </button>
                     <span>{data.shares}</span>
                  </div>
               )}
               <video
                  autoPlay={index === 0}
                  loop
                  src={data.video}
                  ref={videoRef}
                  onTimeUpdate={handleTimeUpdate}
                  onClick={handlePlayPause}
                  onLoadedData={handleVideoLoaded}
                  onPlay={() => {
                     setIsPlay(true);
                  }}
                  onPause={() => {
                     setIsPlay(false);
                  }}
               />
               <div className={cx('video-controls')}>
                  <div className={cx('report')}>
                     <img src={images.report} alt="heart report" />
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
                           <span ref={currentTimeRef} className={cx('current')}>
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
   );
}

export default memo(forwardRef(VideoItem));
