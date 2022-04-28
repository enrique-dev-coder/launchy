import React, { useState, useEffect } from "react";

export default function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("02/03/22 13:59:59");
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex space-x-3 justify-around max-w-sm m-auto">
      <div className="text-white flex flex-col items-center">
        <div className="counterBtn">0</div>
        <p className="counterText">Días</p>
      </div>
      <div className="text-white flex flex-col items-center">
        <div className="counterBtn">0</div>
        <p className="counterText ">Horas</p>
      </div>
      <div className="text-white flex flex-col items-center">
        <div className="counterBtn">0</div>
        <p className="counterText ">Minutos</p>
      </div>
      <div className="text-white flex flex-col items-center">
        <div className="counterBtn">0</div>
        <p className="counterText ">Segundos</p>
      </div>
    </div>
  );
}
