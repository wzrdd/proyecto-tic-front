import { useEffect, useState } from 'react'
import openSocket from 'socket.io-client';

const Sensor = () => {
  const [response, setResponse] = useState("");

  useEffect(() => {
    const socket = openSocket('http://localhost:8000');
    socket.on("temp", data => {
      setResponse(data);
    });
  }, []);

  return (
    <p>
      {(response > 30) ? 'Luz prendida' : 'Apagada'}
    </p>
  );
}

export default Sensor;
