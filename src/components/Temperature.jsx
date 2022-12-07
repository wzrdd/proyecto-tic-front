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

function createData(time, temp) {
  return { time, temp };
}

const data = [
  createData('00:00', 19),
  createData('01:00', 18),
  createData('02:00', 17),
  createData('03:00', 17),
  createData('04:00', 16),
  createData('05:00', 16),
  createData('06:00', 15),
  createData('07:00', 16),
  createData('08:00', 18),
  createData('09:00', 20),
  createData('10:00', 23),
  createData('11:00', 25),
  createData('12:00', 27),
  createData('13:00', 29),
  createData('14:00', 30),
  createData('15:00', 31),
  createData('16:00', 32),
  createData('17:00', 31),
  createData('18:00', 31),
  createData('19:00', 29),
  createData('20:00', 27),
  createData('21:00', 25),
  createData('22:00', 24),
  createData('23:00', 22),
  createData('24:00', 21),
];

const Temperature = () => {
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
          <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" strokeWidth="2" dataKey="temp" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  )
}

export default Temperature;
