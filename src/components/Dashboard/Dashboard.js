import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

const Dashboard = () => {
  const [length, setLength] = useState(0);

  useEffect(() => {
    setLength(localStorage.getItem('length'));
  }, []);
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  const [positiveWords, setPositiveWords] = useState(0);
  const [negativeWords, setNegativeWords] = useState(0);

  if (length === 38) {
    setPositiveWords(5);
    setNegativeWords(6);
  }
  return length === 0 ? (
    <div></div>
  ) : (
    <div>
      <Bar data={data} options={options} />
      <h1>{length}</h1>
    </div>
  );
};

export default Dashboard;
