import { useEffect, useState } from 'react'
import style from './Timer.module.scss'
import { Divider } from '../../../Utils/Reexprot';

const Timer = () => {
  // const timer = useSelector((state: { timer: ITimerStore }) => state.timer.time)

  // const timeArr = timer.split(':')

  const [remainingDays, setRemainingDays] = useState<number>(1);
  const [remainingHours, setRemainingHours] = useState<number>(0);
  const [remainingMinutes, setRemainingMinutes] = useState<number>(0);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(0);

  // useEffect(() => {
  //   if (timeArr) {
  //     setRemainingDays(Number(timeArr[0]) || 0);
  //     setRemainingHours(Number(timeArr[1]) || 0);
  //     setRemainingMinutes(Number(timeArr[2]) || 0);
  //     setRemainingSeconds(Number(timeArr[3]) || 0);
  //   }
  // }, [timeArr]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingSeconds((prevSeconds) => {
        if (prevSeconds > 0) return prevSeconds - 1;

        if (remainingMinutes > 0) {
          setRemainingMinutes((prevMinutes) => prevMinutes - 1);
          return 59;
        }

        if (remainingHours > 0) {
          setRemainingHours((prevHours) => prevHours - 1);
          setRemainingMinutes(59);
          return 59;
        }

        if (remainingDays > 0) {
          setRemainingDays((prevDays) => prevDays - 1);
          setRemainingHours(23);
          setRemainingMinutes(59);
          return 59;
        }

        clearInterval(interval);
        return 0;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingSeconds, remainingMinutes, remainingHours, remainingDays]);




  return (
    <div className={style.timer}>
      <div className={style.time}>
        <span>Days</span>
        <h2>{remainingDays}</h2>
      </div>
      <img src={Divider} alt="" />
      <div className={style.time}>
        <span>Hours</span>
        <h2>{remainingHours}</h2>
      </div>
      <img src={Divider} alt="" />
      <div className={style.time}>
        <span>Minutes</span>
        <h2>{remainingMinutes}</h2>
      </div>
      <img src={Divider} alt="" />
      <div className={style.time}>
        <span>Second</span>
        <h2>{remainingSeconds}</h2>
      </div>
    </div>
  )
}

export default Timer