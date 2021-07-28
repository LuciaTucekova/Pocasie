import React, { useState } from 'react';
import './App.css';
import { useEffect } from 'react';
import DaylyLineChart from './DaylyLineChart';
import HourlyLineChart from './HourlyLineChart';
import { Table } from './Table';

const App = () => {
  const [wheather, setWheather] = useState(null);
  const [daily, setDaily] = useState(null);
  const [hourly, setHourly] = useState(null);
  const [days, setDays] = useState(null);
  const [time, setTime] = useState(null);

  useEffect(() => {
    fetch(
      'http://api.openweathermap.org/data/2.5/onecall?lat=49.195061&lon=16.606836&units=metric&appid=805a73b9601a167793b6829f6d4aa5a4',
    )
      .then((response) => response.json())
      .then((json) => setWheather(json));
  }, []);

  return (
    <div className="App">
      <p>Počasie v Brne</p>
      <button
        onClick={(e) => {
          e.preventDefault();
          setHourly(wheather.hourly.map((element) => element.feels_like));
          setTime(wheather.hourly.map((element) => element.dt));
        }}
      >
        Nasledujúcich 48 hodín
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          setDaily(wheather.daily.map((element) => element.feels_like.day));
          setDays(wheather.daily.map((element) => element.dt));
        }}
      >
        Nasledujúcich 7 dní
      </button>
      <div style={{ textAlign: 'center' }}>
        {daily !== null ? <DaylyLineChart dailyData={daily} days={days} /> : ''}
        {hourly !== null ? (
          <HourlyLineChart hourlyData={hourly} time={time} />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default App;
