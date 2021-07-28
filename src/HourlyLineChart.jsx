import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Table } from './Table';
import { LameTable } from './LameTable';

const HourlyLineChart = ({ hourlyData, time }) => {
  console.log(hourlyData);
  console.log(time);
  const timeData = time.map((element) => {
    const milliseconds = element * 1000;
    const dateObject = new Date(milliseconds);
    const humanDateFormat = dateObject.toLocaleString('sk', {
      hour: 'numeric',
    });
    return humanDateFormat;
  });
  const dataTable = hourlyData.map((element) => {
    return { col1: element };
  });
  const columnsTable = timeData.map((element) => {
    return { Header: element, id: element };
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
            labels: timeData,
            datasets: [
              {
                label: 'Teplota v priebehu dňa',
                data: hourlyData,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
              },
            ],
          }}
        />
      </div>
      <div>
        <LameTable dataTable={hourlyData} columnsTable={timeData} />
      </div>
    </div>
  );
};

export default HourlyLineChart;
