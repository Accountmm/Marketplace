import { useEffect, useState } from 'react'
import style from './Timer.module.scss'
import { Divider } from '../../../Utils/Reexprot';

const Timer = () => {
  const [remainingDays, setRemainingDays] = useState<number>(1);
  const [remainingHours, setRemainingHours] = useState<number>(0);
  const [remainingMinutes, setRemainingMinutes] = useState<number>(0);
  const [remainingSeconds, setRemainingSeconds] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remainingSeconds > 0) {
        setRemainingSeconds(remainingSeconds - 1)
      } else if (remainingSeconds === 0 && remainingHours === 0 && remainingMinutes === 0) {
        setRemainingDays(remainingDays - 1)
        setRemainingHours(59)
        setRemainingMinutes(59)
        setRemainingSeconds(59)
      } else if (remainingMinutes === 0 && remainingSeconds === 0 && remainingHours > 0) {
        setRemainingHours(remainingHours - 1)
        setRemainingMinutes(59)
        setRemainingSeconds(59)
      } else if (remainingSeconds === 0) {
        if (remainingMinutes !== 0) {
          setRemainingMinutes(remainingMinutes - 1)
          setRemainingSeconds(59)
        } else {
          if (remainingHours !== 0) {
            setRemainingMinutes(59)
            setRemainingHours(remainingHours - 1)
          } else {
            if (remainingDays !== 0) {
              setRemainingDays(remainingDays - 1)
              setRemainingHours(59)
            } else {
              clearInterval(interval)
            }
          }
        }
      }
      if (remainingDays <= 0 && remainingHours <= 0 && remainingMinutes <= 0 && remainingSeconds <= 0) {
        clearInterval(interval)
      }
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