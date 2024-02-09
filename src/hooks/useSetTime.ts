import { useEffect } from "react";
import { useNavigate } from "../router";

export function useSetTime() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeNewYear: Date = new Date('2024-02-09 10:25:00');
    const dayDot: HTMLElement = document.querySelector('.dayDot') as HTMLElement;
    const hourDot: HTMLElement = document.querySelector('.hourDot') as HTMLElement;
    const minuteDot: HTMLElement = document.querySelector('.minuteDot') as HTMLElement;
    const secondDot: HTMLElement = document.querySelector('.secondDot') as HTMLElement;
    
    const dd: HTMLElement | null = document.getElementById('dd');
    const hh: HTMLElement | null = document.getElementById('hh');
    const mm: HTMLElement | null = document.getElementById('mm');
    const ss: HTMLElement | null = document.getElementById('ss');
    const countdown = setInterval(() => {
      const now: Date = new Date();
      const time: number = timeNewYear.getTime();
      const D: number = time - now.getTime();

      const days: number = Math.floor(D / (1000 * 60 * 60 * 24));
      const hours: number = Math.floor(D / (1000 * 60 * 60)) % 24;
      const minutes: number = Math.floor(D / (1000 * 60)) % 60;
      const seconds: number = Math.floor(D / 1000) % 60;

      const daysElement: HTMLElement | null = document.getElementById('days');
      const hoursElement: HTMLElement | null = document.getElementById('hours');
      const minutesElement: HTMLElement | null = document.getElementById('minutes');
      const secondsElement: HTMLElement | null = document.getElementById('seconds');

      // animate stroke
      dd!.style.strokeDashoffset = String(440 - (440 * days) / 365);
      hh!.style.strokeDashoffset = String(440 - (440 * hours) / 24);
      mm!.style.strokeDashoffset = String(440 - (440 * minutes) / 60);
      ss!.style.strokeDashoffset = String(440 - (440 * seconds) / 60);

      // anime circle dots
      dayDot!.style.transform = `rotateZ(${days * 0.986}deg)`;
      //360deg / 365days = 0.986
      hourDot!.style.transform = `rotateZ(${hours * 15}deg)`;
      //360deg / 24hours = 15
      minuteDot!.style.transform = `rotateZ(${minutes * 6}deg)`;
      //360deg / 60minutes = 6
      secondDot!.style.transform = `rotateZ(${seconds * 6}deg)`;
      //360deg /  60seconds = 6
      daysElement!.innerText = days < 10 ? `0${String(days)}` : String(days);
      hoursElement!.innerText = hours < 10 ? `0${String(hours)}` : String(hours);
      minutesElement!.innerText = minutes < 10 ? `0${String(minutes)}` : String(minutes);
      secondsElement!.innerText = seconds < 10 ? `0${String(seconds)}` : String(seconds);

      if (D < 0) {
        navigate('/intro/happynewyear');
      }
    }, 1000);

    return () => clearInterval(countdown);

  }, [navigate])
}