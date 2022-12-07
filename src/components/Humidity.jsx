import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  Tooltip
} from 'recharts';

function createData(time, hum) {
  return { time, hum };
}

const data = [
  createData('00:00', 51),
  createData('01:00', 52),
  createData('02:00', 54),
  createData('03:00', 57),
  createData('04:00', 58),
  createData('05:00', 59),
  createData('06:00', 60),
  createData('07:00', 61),
  createData('08:00', 53),
  createData('09:00', 46),
  createData('10:00', 40),
  createData('11:00', 35),
  createData('12:00', 30),
  createData('13:00', 26),
  createData('14:00', 23),
  createData('15:00', 20),
  createData('16:00', 20),
  createData('17:00', 20),
  createData('18:00', 22),
  createData('19:00', 25),
  createData('20:00', 28),
  createData('21:00', 34),
  createData('22:00', 36),
  createData('23:00', 40),
  createData('24:00', 43),
];

const Humidity = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <ResponsiveContainer
          width={"80%"}
          aspect={2}>
          <LineChart sx={{ mx: 'auto' }} width={500} height={300} data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip formatter={(str) => str + '%'} />
            <Legend />
            <Line type="monotone" strokeWidth="2" dataKey="hum" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default Humidity;
