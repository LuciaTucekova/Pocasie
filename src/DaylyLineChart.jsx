import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { LameTable } from './LameTable';
import { Table } from './Table';

const DaylyLineChart = ({ dailyData, days }) => {
  console.log(dailyData);
  console.log(days);
  const daysData = days.map((element) => {
    const milliseconds = element * 1000;
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleString('sk', {
      weekday: 'long',
    });
    return humanDateFormat;
  });

  const dataTable = dailyData.map((element) => {
    return { col1: element };
  });
  const columnsTable = daysData.map((element) => {
    return { Header: element, id: element + Math.random() };
  });

  return (
    <div
      style={{
        marginBottom: '4%',
      }}
    >
      <div
        style={{
          maxWidth: '60%',
          marginBottom: '4%',
          marginLeft: '20%',
        }}
      >
        <Line
          data={{
            labels: daysData,
            datasets: [
              {
                label: 'Teplota nasledujúcich 7 dní',
                data: dailyData,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
              },
            ],
          }}
        />
        <LameTable dataTable={dailyData} columnsTable={daysData} />
      </div>
    </div>
  );
};

export default DaylyLineChart;
